/*
 *  @license
 *  Copyright Hôpitaux Universitaires de Genève. All Rights Reserved.
 *
 *  Use of this source code is governed by an Apache-2.0 license that can be
 *  found in the LICENSE file at https://github.com/DSI-HUG/dejajs-components/blob/master/LICENSE
 */

import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { AfterViewInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { Component } from '@angular/core';
import { ContentChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { Optional } from '@angular/core';
import { Output } from '@angular/core';
import { Self } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NgControl } from '@angular/forms';
import { IDejaMouseDroppableContext, IDropCursorInfos } from '@deja-js/component/mouse-dragdrop';
import { Destroy, KeyCodes, Position, Rect } from '@deja-js/core';
import { from, fromEvent, Observable, Subject, Subscription } from 'rxjs';
import { debounceTime, filter, takeUntil } from 'rxjs/operators';

import { DejaTile } from './tile.class';
import { DejaTilesLayoutProvider } from './tiles-layout.provider';
import { IDejaTilesRefreshParams } from './tiles-refresh-params.interface';
import { IDejaTilesAddedEvent, IDejaTilesAddEvent, IDejaTilesDeletedEvent, IDejaTilesEvent, IDejaTilesRemoveEvent } from './tiles.event';

@Component({
    selector: 'deja-tiles',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [DejaTilesLayoutProvider],
    styleUrls: [
        './tiles.component.scss'
    ],
    templateUrl: './tiles.component.html'
})
export class DejaTilesComponent extends Destroy implements AfterViewInit, ControlValueAccessor, OnDestroy {
    /**
     * Raised when the selected items has changed
     */
    @Output() public readonly selectionChanged = new EventEmitter<IDejaTilesEvent>();

    /**
     * Raised when the layout has changed with a drag and drop
     */
    @Output() public readonly layoutChanged = new EventEmitter<IDejaTilesEvent>();

    /**
     * Raised when the layout is completed and all tiles are binded
     */
    @Output() public readonly layoutCompleted = new EventEmitter<IDejaTilesEvent>();

    /**
     * Raised before some tiles will be added to the data model with a paste
     */
    @Output() public readonly contentAdding = new EventEmitter<IDejaTilesAddEvent>();

    /**
     * Raised before some tiles will be removed from the data model with a delete
     */
    @Output() public readonly contentRemoving = new EventEmitter<IDejaTilesRemoveEvent>();

    /**
     * Raised when tiles are added
     */
    @Output() public readonly tilesAdded = new EventEmitter<IDejaTilesAddedEvent>();

    /**
     * Raised when tiles are deleted
     */
    @Output() public readonly tilesDeleted = new EventEmitter<IDejaTilesDeletedEvent>();

    /**
     * Raised when some tiles are copied in the clipboard service. Can result from a copy or paste operation on the tiles.
     */
    @Output() public readonly contentCopied = new EventEmitter<IDejaTilesEvent>();

    /**
     * Tab index of the focusable element
     */
    @Input() public tabIndex = 0;

    @ContentChild('tileTemplate')public tileTemplate: unknown;

    @ViewChild('tilesContainer', { static: true }) private tilesContainer: ElementRef;

    private _models = [] as DejaTile[];
    private delete$sub: Subscription;
    private copy$sub: Subscription;
    private cut$sub: Subscription;
    private paste$sub: Subscription;
    private keyup$: Observable<KeyboardEvent>;
    private hasFocus = false;

    public get tiles(): DejaTile[] {
        return this.layoutProvider.tiles;
    }

    public constructor(el: ElementRef, private changeDetectorRef: ChangeDetectorRef, private layoutProvider: DejaTilesLayoutProvider, @Self() @Optional() public control: NgControl) {
        super();

        if (this.control) {
            this.control.valueAccessor = this;
        }

        const element = el.nativeElement as HTMLElement;

        from(this.layoutProvider.selectionChanged).pipe(
            takeUntil(this.destroyed$)
        ).subscribe(event => this.selectionChanged.emit(event));

        from(this.layoutProvider.contentAdding).pipe(
            takeUntil(this.destroyed$)
        ).subscribe(event => this.contentAdding.emit(event));

        from(this.layoutProvider.contentRemoving).pipe(
            takeUntil(this.destroyed$)
        ).subscribe(event => this.contentRemoving.emit(event));

        from(this.layoutProvider.tilesAdded).pipe(
            takeUntil(this.destroyed$)
        ).subscribe(event => {
            this.tilesAdded.emit(event);
            this.onChangeCallback(event.tiles);
        });

        from(this.layoutProvider.tilesDeleted).pipe(
            takeUntil(this.destroyed$)
        ).subscribe(event => {
            this.tilesDeleted.emit(event);
            this.onChangeCallback(event.tiles);
        });

        from(this.layoutProvider.layoutChanged).pipe(
            takeUntil(this.destroyed$)
        ).subscribe(event => {
            this.layoutChanged.emit(event);
            this.onChangeCallback(event.tiles);
        });

        from(this.layoutProvider.layoutCompleted).pipe(
            takeUntil(this.destroyed$)
        ).subscribe(event => this.layoutCompleted.emit(event));

        this.keyup$ = fromEvent(element.ownerDocument, 'keyup') as Observable<KeyboardEvent>;

        fromEvent(window, 'resize').pipe(
            debounceTime(5),
            takeUntil(this.destroyed$)
        ).subscribe(() => this.refresh({ resetWidth: true }));
    }

    // provide a public access
    public get selectionRect$(): Subject<Rect> {
        return this.layoutProvider.selectionRect$;
    }

    @Input()
    public set tileminwidth(value: string) {
        this.layoutProvider.tileMinWidth = value;
    }

    @Input()
    public set tilemaxwidth(value: string) {
        this.layoutProvider.tileMaxWidth = value;
    }

    @Input()
    public set tileminheight(value: string) {
        this.layoutProvider.tileMinHeight = value;
    }

    @Input()
    public set tilemaxheight(value: string) {
        this.layoutProvider.tileMaxHeight = value;
    }

    @Input()
    public set maxwidth(value: string) {
        this.layoutProvider.maxWidth = value;
    }

    @Input()
    public set designMode(value: boolean | string) {
        this.layoutProvider.designMode = coerceBooleanProperty(value);
    }

    public get designMode() {
        return this.layoutProvider.designMode;
    }

    @Input()
    public set models(models: DejaTile[]) {
        this.writeValue(models);
    }

    @Input()
    public set canDelete(value: boolean | string) {
        if (coerceBooleanProperty(value) && !this.delete$sub) {
            this.delete$sub = this.keyup$.pipe(
                filter(event => this.layoutProvider.designMode && event.code === KeyCodes.Delete && this.hasFocus),
                takeUntil(this.destroyed$)
            ).subscribe(() => this.layoutProvider.deleteSelection());

        } else if (this.delete$sub) {
            this.delete$sub.unsubscribe();
            this.delete$sub = undefined;
        }
    }

    @Input()
    public set canCopy(value: boolean | string) {
        if (coerceBooleanProperty(value) && !this.copy$sub) {
            this.copy$sub = this.keyup$.pipe(
                filter(event => event.code === KeyCodes.KeyC && event.ctrlKey && this.hasFocus),
                takeUntil(this.destroyed$)
            ).subscribe(() => this.copySelection());

        } else if (this.copy$sub) {
            this.copy$sub.unsubscribe();
            this.copy$sub = undefined;
        }
    }

    @Input()
    public set canCut(value: boolean | string) {
        if (coerceBooleanProperty(value) && !this.cut$sub) {
            this.cut$sub = this.keyup$.pipe(
                filter(event => this.layoutProvider.designMode && event.code === KeyCodes.KeyX && event.ctrlKey && this.hasFocus),
                takeUntil(this.destroyed$)
            ).subscribe(() => this.cutSelection());

        } else if (this.cut$sub) {
            this.cut$sub.unsubscribe();
            this.cut$sub = undefined;
        }
    }

    @Input()
    public set canPaste(value: boolean | string) {
        if (coerceBooleanProperty(value) && !this.paste$sub) {
            this.paste$sub = this.keyup$.pipe(
                filter(event => this.layoutProvider.designMode && event.code === KeyCodes.KeyV && event.ctrlKey && this.hasFocus),
                takeUntil(this.destroyed$)
            ).subscribe(() => this.paste());

        } else if (this.paste$sub) {
            this.paste$sub.unsubscribe();
            this.paste$sub = undefined;
        }
    }

    @Input()
    public set selectedTiles(selectedTiles: Array<DejaTile | string>) {
        this.layoutProvider.selectedTiles = selectedTiles.map(tile => typeof tile === 'string' ? tile : (tile).id);
    }

    // ************* ControlValueAccessor Implementation **************
    public writeValue(models: DejaTile[]) {
        this._models = models || [];
        const tiles = this._models;
        this.layoutProvider.tiles = tiles;
        this.changeDetectorRef.markForCheck();
    }

    public registerOnChange(fn: (_a: unknown) => void) {
        this.onChangeCallback = fn;
    }

    public registerOnTouched(fn: () => void) {
        this.onTouchedCallback = fn;
    }
    // ************* End of ControlValueAccessor Implementation **************

    public ngAfterViewInit() {
        this.layoutProvider.container = this.tilesContainer.nativeElement;
        this.refresh({ resetWidth: true });
    }

    public ngOnDestroy() {
        super.ngOnDestroy();
        this.canCopy = false;
        this.canCut = false;
        this.canDelete = false;
        this.canPaste = false;
    }

    public copySelection() {
        const tiles = this.layoutProvider.copySelection();
        if (tiles?.length) {
            const event = new CustomEvent('DejaTilesCopied', { cancelable: true }) as IDejaTilesEvent;
            event.tiles = tiles;
            this.contentCopied.emit(event);
        }
    }

    public cutSelection() {
        const tiles = this.layoutProvider.cutSelection();
        if (tiles?.length) {
            const event = new CustomEvent('DejaTilesCutted', { cancelable: true }) as IDejaTilesEvent;
            event.tiles = tiles;
            this.contentCopied.emit(event);
        }
    }

    public deleteSelection() {
        const tiles = this.layoutProvider.deleteSelection();
        this.changeDetectorRef.markForCheck();
        return tiles;
    }

    public paste() {
        const tiles = this.layoutProvider.paste();
        this.changeDetectorRef.markForCheck();
        return tiles;
    }

    public ensureVisible(id: string) {
        this.layoutProvider.ensureVisible$.next(id);
    }

    public refresh(params?: IDejaTilesRefreshParams) {
        this.layoutProvider.refreshTiles$.next(params);
    }

    public addTiles(tiles: DejaTile[]) {
        this.layoutProvider.addTiles(tiles);
    }

    public removeTiles(tileIds: string[]) {
        this.layoutProvider.removeTiles(tileIds);
    }

    public hitTest(pageX: number, pageY: number) {
        const containerElement = this.tilesContainer.nativeElement as HTMLElement;
        const containerBounds = containerElement.getBoundingClientRect();

        const x = pageX - containerBounds.left;
        const y = pageY - containerBounds.top;

        return this.tiles.find(t => t.pixelBounds?.containsPoint(new Position(x, y)));
    }

    public getFreePlace(pageX?: number, pageY?: number, width?: number, height?: number) {
        if (!this._models || this._models.length === 0) {
            return new Rect(0, 0, width, height);
        }

        // Check if we drag on a tile
        const containerElement = this.tilesContainer.nativeElement as HTMLElement;
        const containerBounds = containerElement.getBoundingClientRect();

        const x = pageX ? (pageX - containerBounds.left) : 0;
        const y = pageY ? (pageY - containerBounds.top) : 0;

        const percentBounds = new Rect(this.layoutProvider.getPercentSize(x), this.layoutProvider.getPercentSize(y), width, height);
        return this.layoutProvider.getFreePlace(percentBounds);
    }

    public moveTile(id: string, bounds: Rect) {
        this.layoutProvider.moveTile(id, bounds);
    }

    public getDropContext() {
        return {
            dragEnter: (dragContext, dragCursor) => this.layoutProvider.dragEnter(dragContext, dragCursor) && {
                className: 'hidden' // Hide drag cursor
            } as IDropCursorInfos,
            dragOver: (_dragContext, dragCursor) => {
                this.layoutProvider.dragover$.next(dragCursor);
            },
            dragLeave: _dragContext => {
                this.layoutProvider.dragleave$.next();
            }
        } as IDejaMouseDroppableContext;
    }

    public onTileClosed(tile: DejaTile) {
        this.layoutProvider.removeTiles([tile.id]);
    }

    public onFocus() {
        this.hasFocus = true;
    }

    public onBlur() {
        this.hasFocus = false;
    }

    // NgModel implementation
    public onTouchedCallback = () => undefined as void;
    public onChangeCallback = (_a?: unknown) => undefined as void;
}
