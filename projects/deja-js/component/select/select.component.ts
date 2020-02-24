/*
 *  @license
 *  Copyright Hôpitaux Universitaires de Genève. All Rights Reserved.
 *
 *  Use of this source code is governed by an Apache-2.0 license that can be
 *  found in the LICENSE file at https://github.com/DSI-HUG/dejajs-components/blob/master/LICENSE
 */

import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty, coerceNumberProperty } from '@angular/cdk/coercion';
import { AfterContentInit, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ContentChildren, DoCheck, ElementRef, EventEmitter, HostBinding, Input, OnDestroy, Optional, Output, Self, ViewChild, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroupDirective, NgControl, NgForm } from '@angular/forms';
import { CanDisable, CanUpdateErrorState, ErrorStateMatcher } from '@angular/material/core';
import { MatFormFieldControl } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { IDejaChipsComponentCloseEvent } from '@deja-js/component/chips';
import { DejaOverlayComponent } from '@deja-js/component/overlay';
import { DejaChildValidatorDirective, DejaConnectionPositionPair, DejaItemComponent, DejaItemEvent, DejaItemsEvent, GroupingService, IItemBase, IItemTree, ItemListBase, ItemListService, IViewListResult, IViewPort, KeyCodes, MediaService, SortingService, ViewportMode, ViewPortService } from '@deja-js/core';
import { BehaviorSubject, combineLatest, from, fromEvent, merge, Observable, of, Subject, Subscription, timer } from 'rxjs';
import { combineLatest as combineLatestOp, debounce, debounceTime, delay, delayWhen, filter, first, map, switchMap, take, takeUntil, tap } from 'rxjs/operators';

/** Combo box avec une liste basée sur la treelist */
@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    providers: [
        ViewPortService,
        { provide: MatFormFieldControl, useExisting: DejaSelectComponent }
    ],
    selector: 'deja-select',
    styleUrls: [
        './select.component.scss',
    ],
    templateUrl: './select.component.html',
})
export class DejaSelectComponent extends ItemListBase implements CanUpdateErrorState, CanDisable, DoCheck, MatFormFieldControl<any>, ControlValueAccessor, OnDestroy, AfterViewInit, AfterContentInit {
    public static nextId = 0;
    @HostBinding() public id = `deja-select-${DejaSelectComponent.nextId++}`;
    @HostBinding('class.floating') public get shouldLabelFloat() {
        return this.focused || !this.empty;
    }

    @HostBinding('attr.aria-describedby') public describedBy = '';

    public controlType = 'deja-select';
    public errorState = false;
    public errorStateMatcher: ErrorStateMatcher;
    public stateChanges = new Subject<void>();

    /** Texte à afficher par default dans la zone de recherche */
    /** Texte affiché si aucune donnée n'est présente dans le tableau */
    @Input() public nodataholder: string;
    /** Offset de position horizontal de la zone de dropdown */
    @Input() public overlayOffsetX = 0;
    /** Offset de position vertical de la zone de dropdown */
    @Input() public overlayOffsetY = 0;
    /** Nom de classe du backdrop */
    @Input() public overlayBackdropClass: string;
    /** Nom de classe du container de la liste */
    @Input() public overlayContainerClass: string;
    /** Permet de définir un template de ligne par binding */
    @Input() public itemTemplateExternal: any;
    /** Permet de définir un template de ligne parente par binding. */
    @Input() public parentItemTemplateExternal: any;
    /** Permet de définir un template pour le loader par binding. */
    @Input() public loaderTemplateExternal: any;
    /** Exécuté lorsque le calcul du viewPort est terminé. */
    @Output() public viewPortChanged = new EventEmitter<IViewPort>();
    /** Exécuté lorsque l'utilisateur sélectionne ou désélectionne une ligne. */
    @Output() public selectedChange = new EventEmitter<DejaItemsEvent | DejaItemEvent>();
    /** For test only. */
    @Output() public dropDownVisibleChange = new EventEmitter<boolean>();

    @ContentChild('itemTemplate') public itemTemplateInternal: any;
    @ContentChild('parentItemTemplate') public parentItemTemplateInternal: any;
    @ContentChild('selectedTemplate') public selectedTemplate: any;
    @ContentChild('loaderTemplate') private loaderTemplateInternal: any;

    /** Internal use */
    public overlayOwnerElement: HTMLElement;
    public dropDownMaxHeight: number = null;

    protected _keyboardNavigation = false;
    @HostBinding('attr.wait') public _waiter = false;
    protected isMobile = false;

    private mouseUp$sub: Subscription;

    @ViewChild('inputElement') public inputElement: ElementRef;

    @ViewChild(MatInput) protected input: MatInput;

    @HostBinding('attr.disabled') public _disabled: boolean = null;
    private _type = 'select';
    private selectingItemIndex: number;
    private dropDownQuery = '';
    private filterExpression = '';
    private _dropdownVisible = false;
    private lastScrollPosition = 0;
    private _selectionClearable = false;
    private _dropDownWidth: string;
    private _query = '';
    private _required = false;
    private _placeholder: string;
    private _focused = false;

    @HostBinding('attr.readonly') public _readonly: boolean = null;

    /** Overlay pane containing the options. */
    @ViewChild(DejaOverlayComponent, { static: true }) private overlay: DejaOverlayComponent;

    private clearFilterExpression$ = new BehaviorSubject<void>(null);
    private filterListComplete$ = new Subject();
    private storeScrollPosition$ = new Subject<number>();
    private hideDropDown$ = new Subject<number>();
    private showDropDown$ = new Subject();
    private filter$ = new Subject<Event>();
    private query$ = new BehaviorSubject<string>('');
    private writeValue$ = new Subject<any>();
    private contentInitialized$ = new Subject();

    private keyboardNavigation$ = new Subject();

    private delaySearchTrigger$ = new BehaviorSubject<number>(250);

    private _modelIsValue: boolean;

    /** Définit une valeur indiquant si en reactive form le model renvoyé doit être un object ou une valeur */
    @Input()
    public set modelIsValue(value: boolean | string) {
        this._modelIsValue = coerceBooleanProperty(value);
    }

    public get modelIsValue() {
        return this._modelIsValue;
    }

    private _positions = DejaConnectionPositionPair.default;

    @Input()
    public set positions(value: DejaConnectionPositionPair[] | string) {
        this._positions = typeof value === 'string' ? DejaConnectionPositionPair.parse(value) : value;
    }

    public get positions() {
        return this._positions;
    }

    @Input()
    public set dropDownWidth(value: number | string) {
        this._dropDownWidth = value && (typeof value === 'string' ? value : `${value}px`);
    }

    public get dropDownWidth() {
        const element = this.elementRef?.nativeElement as HTMLElement;
        return this._dropDownWidth || element.clientWidth;
    }

    public get keyboardNavigation() {
        return this._keyboardNavigation;
    }

    @Input() public get required() {
        return this._required;
    }

    public set required(req) {
        this._required = coerceBooleanProperty(req);
        this.stateChanges.next();
    }

    /**
     * Placeholder of the input
     */
    @Input() public get placeholder() {
        return this._placeholder;
    }

    public set placeholder(plh) {
        this._placeholder = plh;
        this.stateChanges.next();
    }

    public get empty() {
        return !this.value;
    }

    public get focused() {
        return this._focused;
    }

    @ContentChildren(DejaItemComponent)
    public set options(options: DejaItemComponent[]) {
        if (!this.items && options?.length) {
            const selectedModels = [] as any[];
            this.valueField = 'value';
            this.textField = 'text';
            const models = options.map((option) => {
                const model = {
                    text: option.text,
                    value: option.value,
                };
                if (option.selected) {
                    selectedModels.push(model);
                }
                return model;
            });
            this.models = models;
            if (selectedModels.length) {
                this.selectedModels = selectedModels;
            }
            if (models.length > 100) {
                // tslint:disable-next-line:no-debugger
                console.error('Select options with more than 100 items can have performance options. Please bind directly the items in code behind with items or models input.');
            }
        }
    }

    // NgModel implementation
    public onTouchedCallback = (_a?: any) => { };
    public onChangeCallback = (_a?: any) => { };
    public onValidatorChangeCallback = (_a?: any) => { };

    constructor(changeDetectorRef: ChangeDetectorRef,
        public viewPort: ViewPortService,
        private fm: FocusMonitor,
        private elementRef: ElementRef,
        @Self() @Optional() public ngControl: NgControl,
        @Optional() private _parentForm: NgForm,
        @Optional() private _parentFormGroup: FormGroupDirective,
        mediaService: MediaService,
        private _defaultErrorStateMatcher: ErrorStateMatcher) {
        super(changeDetectorRef, viewPort);

        this.overlayOwnerElement = this.elementRef.nativeElement;

        if (this.ngControl) {
            this.ngControl.valueAccessor = this;
        }

        this.fm.monitor(elementRef.nativeElement, true).pipe(
            takeUntil(this.destroyed$)
        ).subscribe(origin => {
            this._focused = !!origin;
            this.stateChanges.next();
        });

        const setDropDownVisible = (state: boolean) => {
            if (state !== this._dropdownVisible) {
                this._dropdownVisible = state;
                this.changeDetectorRef.markForCheck();
                this.dropDownVisibleChange.emit(state);
            }
        };

        mediaService.isMobile$.pipe(
            takeUntil(this.destroyed$)
        ).subscribe(value => {
            this.isMobile = value;
            this.changeDetectorRef.markForCheck();
        });

        if (this._parentForm) {
            this._parentForm.ngSubmit.pipe(
                takeUntil(this.destroyed$)
            ).subscribe(() => {
                this.changeDetectorRef.markForCheck();
            });
        }

        if (this._parentFormGroup) {
            this._parentFormGroup.ngSubmit.pipe(
                takeUntil(this.destroyed$)
            ).subscribe(() => {
                this.changeDetectorRef.markForCheck();
            });
        }

        from(this.clearFilterExpression$).pipe(
            debounceTime(750),
            takeUntil(this.destroyed$)
        ).subscribe(() => this.filterExpression = '');

        combineLatest(this.delaySearchTrigger$, this.filterListComplete$).pipe(
            debounce(([delaySearchTrigger]) => timer(delaySearchTrigger)),
            takeUntil(this.destroyed$)
        ).subscribe(() => {
            this._itemList = [];
            this.reshowDropDown();
        });

        from(this.storeScrollPosition$).pipe(
            takeUntil(this.destroyed$)
        ).subscribe(scrollPos => {
            this.viewPort.scrollPosition$.next(scrollPos);
            this.lastScrollPosition = scrollPos;
        });

        from(this.hideDropDown$).pipe(
            filter(() => this.dropdownVisible),
            delayWhen(time => timer(time || 0)),
            takeUntil(this.destroyed$)
        ).subscribe(() => {
            delete this.selectingItemIndex;
            setDropDownVisible(false);
            this.viewPort.element$.next(null);
            this.changeDetectorRef.markForCheck();
        });

        from(this.showDropDown$).pipe(
            debounceTime(50),
            filter(() => (this.query || '').length >= this.minSearchlength && !this._readonly),
            tap(() => {
                // Set overlay origin element
                const originElement: HTMLElement = (this.isMobile && document.body) || this.htmlInputElement || this.elementRef.nativeElement;

                // Calc max height
                if (this.isMobile) {
                    this.dropDownMaxHeight = document.body.clientHeight;
                } else if (this.maxHeight) {
                    this.dropDownMaxHeight = this.maxHeight;
                } else {
                    const originRect = originElement.getBoundingClientRect();
                    const maxHeight = document.body.clientHeight;
                    this.dropDownMaxHeight = Math.max(originRect.top, maxHeight - originRect.bottom, 25) - 25;
                }

                // Ensure dropDowsQuery if autocomplete and minSearchLength
                if (!this.dropDownQuery && this.isModeAutocomplete && this.minSearchlength > 0 && this.query && this.query.length > this.minSearchlength) {
                    this.dropDownQuery = this.query;
                }

                // Display overlay
                setDropDownVisible(true);
                this.changeDetectorRef.markForCheck();
            }),
            delay(1),
            filter(() => this.dropdownVisible),  // Show canceled by the hide$ observable if !dropdownVisible
            switchMap(() => this.calcViewList$()),
            tap(() => {
                const selectedItems = this.getSelectedItems();
                const firstItem = selectedItems && selectedItems[0];
                const index = firstItem ? this.getItemIndex(firstItem) : -1;
                if (index >= 0) {
                    // Ensure selection
                    this.setSelectedItems(selectedItems);
                    this.currentItemIndex = index;
                    this.ensureItemVisible(index);
                } else if (this.listElement) {
                    // Restore scroll Position
                    this.ensureItemVisible(null);
                    this.listElement.scrollTop = this.lastScrollPosition;
                }
            }),
            delay(1),
            filter(() => this.dropdownVisible),  // Show canceled by the hide$ observable if !dropdownVisible
            tap(() => {
                this.viewPort.element$.next(this.listElement);
            }),
            delay(1),
            takeUntil(this.destroyed$)
        ).subscribe(() => {
            // View port calculated
            this.overlay.updatePosition();
        });

        from(this.keyboardNavigation$).pipe(
            tap(() => this._keyboardNavigation = true),
            debounceTime(1000),
            takeUntil(this.destroyed$)
        ).subscribe(() => {
            this._keyboardNavigation = false;
            this.changeDetectorRef.markForCheck();
        });

        from(this.query$).pipe(
            tap((query) => this._query = query),
            filter(() => !!this.input),
            delay(1),
            takeUntil(this.destroyed$)
        ).subscribe(() => {
            // **** Force place holder to refresh to escape input angular material issue ****
            this.changeDetectorRef.markForCheck();
        });

        combineLatest(this.writeValue$, this.contentInitialized$).pipe(
            map(([value]) => value),
            tap((value) => {
                if (this.modelIsValue === undefined) {
                    if (value instanceof Array) {
                        const av = value || [];
                        const modelType = av.length && typeof av[0];
                        this.modelIsValue = modelType === 'string' || modelType === 'number';
                    } else {
                        const modelType = typeof value;
                        this.modelIsValue = value === '' || modelType === 'string' || modelType === 'number';
                    }
                }
                if (this.modelIsValue) {
                    this.query = '';
                }
                return value;
            }),
            map((value) => this.getVirtualSelectedEntities(value)),
            switchMap(value => {
                if (!value) {
                    if (this.selectedItems?.length) {
                        this.removeSelection();
                    }
                } else if (this._multiSelect) {
                    this.query = '';
                    super.setSelectedModels(value);
                    super.getItemListService().ensureSelection();
                } else {
                    const v = value instanceof Array ? [value[0]] : [value];
                    const item = super.mapToIItemBase(v)[0];
                    return this.unselectAll$().pipe(
                        switchMap(() => item ? this.toggleSelect$([item], true) : []),
                        map(() => super.getItemListService().ensureSelection()),
                        tap(() => this.ensureSelection()),
                        take(1),
                    );
                }

                return of(null);
            }),
            takeUntil(this.destroyed$)
        ).subscribe(() => this.changeDetectorRef.markForCheck());

        this._viewPortChanged = this.viewPortChanged;

        this.maxHeight = 0;
    }

    /** Correspond au model du champ de filtrage ou recherche */
    @Input()
    public set query(value: string) {
        this.query$.next(value);
    }

    public get query() {
        return this._query;
    }

    /** Temps d'attente en ms avant que la recherche dans la liste soit lancée lorsque l'utilisateur tape dans le select */
    @Input('delay-search-trigger')
    public set delaySearchTrigger(value: number) {
        this.delaySearchTrigger$.next(value);
    }

    /** Définit la longueur minimale de caractères dans le champ de recherche avant que la recherche ou le filtrage soient effectués */
    @Input('min-search-length')
    public set minSearchlength(value: number) {
        this._minSearchLength = value;
    }

    public get minSearchlength() {
        return this._minSearchLength;
    }

    /** Permet de désactiver le select */
    @Input()
    public set disabled(value: boolean) {
        const disabled = coerceBooleanProperty(value);
        this._disabled = disabled || null;
        this.changeDetectorRef.markForCheck();
    }

    public get disabled() {
        return this.ngControl ? this.ngControl.disabled : this._disabled;
    }

    /** Indique ou détermine si le bouton pour effacer la selection doit être affiché */
    @Input()
    public set selectionClearable(value: boolean | string) {
        this._selectionClearable = coerceBooleanProperty(value);
    }

    public get selectionClearable() {
        return this._selectionClearable;
    }

    @Input()
    /** Définit une valeur indiquant si les éléments selectionés doivent être masqué de la liste déroulante. */
    public set hideSelected(value: any) {
        this.setHideSelected(coerceBooleanProperty(value));
    }

    /** Renvoie une valeur indiquant si les éléments selectionés doivent être masqué de la liste déroulante. */
    public get hideSelected() {
        return this._hideSelected;
    }

    /** Définit la ligne courant ou ligne active */
    @Input()
    public set currentItem(item: IItemBase) {
        super.setCurrentItem(item);
        if (item) {
            this.ensureItemVisible(item);
        }
    }

    /** Définit le nombre de lignes à sauter en cas de pression sur les touches PageUp ou PageDown */
    @Input()
    public set pageSize(value: number | string) {
        this._pageSize = coerceNumberProperty(value);
    }

    /** Retourne le nombre de lignes à sauter en cas de pression sur les touches PageUp ou PageDown */
    public get pageSize() {
        if (this._pageSize === 0) {
            const vpRowHeight = this.getViewPortRowHeight();
            const containerElement = this.listElement;
            const containerHeight = containerElement?.clientHeight || this.dropDownMaxHeight;
            return Math.floor(containerHeight / vpRowHeight);
        }

        return this._pageSize;
    }

    /** Définit un texte de conseil en cas d'erreur de validation ou autre */
    @Input()
    public set hintLabel(value: string) {
        this.setHintLabel(value);
    }

    /** Retourne un texte de conseil en cas d'erreur de validation ou autre */
    public get hintLabel(): string {
        return this._hintLabel;
    }

    /** Définit la hauteur d'une ligne pour le calcul du viewport en pixels (la valeur par défaut sera utilisée si aucune valeur n'est définie). */
    @Input()
    public set viewPortRowHeight(value: number | string) {
        this.setViewPortRowHeight(value);
    }

    /**
     * Les trois valeurs acceptés en paramètre se trouvent dans l'enum ViewportMode (disabled, fixed, variable, auto)
     * Attention, une désactivation du viewport dégrade considérablement les performances de la liste et ne doit pas être activée si la liste
     * est suceptible de contenir beaucoup d'éléments.
     */
    @Input()
    public set viewportMode(mode: ViewportMode | string) {
        this.setViewportMode(mode);
    }

    /** Retourne le champ utilisé pour la liste des enfants d'un parent */
    @Input()
    public set childrenField(value: string) {
        super.setChildrenField(value);
    }

    /** Définit le champ utilisé pour la liste des enfants d'un parent */
    public get childrenField() {
        return this._childrenField;
    }

    /** Définit le champ à utiliser comme valeur d'affichage. */
    @Input()
    public set textField(value: string) {
        super.setTextField(value);
    }

    /** Retourne le champ à utiliser comme valeur d'affichage. */
    public get textField() {
        return super.getTextField();
    }

    /** Définit le champ à utiliser comme valeur de comparaison. */
    @Input()
    public set valueField(value: string) {
        super.setValueField(value);
    }

    /** Retourne le champ à utiliser comme valeur de comparaison. */
    public get valueField() {
        return super.getValueField();
    }

    /** Définit le champ à utiliser comme champ de recherche.
     * Ce champ peut indiquer, un champ contenant une valeur, un texte indexé, ou une fonction.
     */
    @Input()
    public set searchField(value: string) {
        super.setSearchField(value);
    }

    /** Retourne le champ à utiliser comme champ de recherche.
     * Ce champ peut indiquer, un champ contenant une valeur, un texte indexé, ou une fonction.
     */
    public get searchField() {
        return this._searchField;
    }

    @Input()
    public set type(type: any) {
        if (type !== 'autocomplete' && type !== 'multiselect' && type !== 'select') {
            throw new Error('Invalid type property for DejaSelectComponent. Type can be select, autocomplete or multiselect.');
        }
        this._type = type;
        this.setMultiSelect(this._type === 'multiselect');
        this.changeDetectorRef.markForCheck();
    }

    public get type() {
        return this._type;
    }

    /**
     * Set an observable called before the list will be displayed
     */
    @Input()
    public set loadingItems(fn: (query: string | RegExp, selectedItems: IItemBase[]) => Observable<IItemBase[]>) {
        super.setLoadingItems(fn);
    }

    /**
     * Set a promise or an observable called before an item selection
     */
    @Input()
    public set selectingItem(fn: (item: IItemBase) => Promise<IItemBase> | Observable<IItemBase>) {
        super.setSelectingItem(fn);
    }

    /**
     * Set a promise or an observable called before an item deselection
     */
    @Input()
    public set unselectingItem(fn: (item: IItemBase) => Promise<IItemBase> | Observable<IItemBase>) {
        super.setUnselectingItem(fn);
    }

    /**
     * Set a promise or an observable called before an item expand
     */
    @Input()
    public set expandingItem(fn: (item: IItemTree) => Promise<IItemTree> | Observable<IItemTree>) {
        super.setExpandingItem(fn);
    }

    /**
     * Set a promise or an observable called before an item collapse
     */
    @Input()
    public set collapsingItem(fn: (item: IItemTree) => Promise<IItemTree> | Observable<IItemTree>) {
        super.setCollapsingItem(fn);
    }

    /** Retourne si le select est en mode select, donc en lecture seule. */
    public get isModeSelect() {
        return this._type === 'select';
    }

    /** Retourne si le select est en mode autocomplete */
    public get isModeAutocomplete() {
        return this._type === 'autocomplete';
    }

    /** Définit la liste des éléments selectionés en mode multiselect */
    @Input()
    public set selectedItems(value: IItemBase[]) {
        this.setSelectedItems(value);
    }

    /** Retourne la liste des éléments selectionés en mode multiselect */
    public get selectedItems() {
        return super.getSelectedItems();
    }

    /** Définit l'éléments selectioné en mode single select */
    @Input()
    public set selectedItem(value: IItemBase) {
        this.setSelectedItems(value !== undefined && value !== null ? [value] : []);
    }

    /** Retourne l'élément selectioné en mode single select */
    public get selectedItem() {
        const selectedItem = super.getSelectedItems();
        return selectedItem && selectedItem[0];
    }

    /** Définit le model selectioné en mode single select */
    @Input()
    public set selectedModel(value: any) {
        this.writeValue(value);
    }

    /** Retourne le model selectioné en mode single select */
    public get selectedModel() {
        const selectedModel = super.getSelectedModels();
        return selectedModel && selectedModel[0];
    }

    /** Définit la liste des models selectionés en mode multiselect */
    @Input()
    public set selectedModels(value: any[]) {
        this.writeValue(value);
    }

    /** Retourne la liste des models selectionés en mode multiselect */
    public get selectedModels() {
        return super.getSelectedModels();
    }

    /** Definit le service de liste utilisé par ce composant. Ce service permet de controller dynamiquement la liste, ou de faire du lazyloading. */
    @Input()
    public set itemListService(itemListService: ItemListService) {
        this.setItemListService(itemListService);
        if (itemListService?.lastQuery) {
            this.query = itemListService.lastQuery.toString();
        }
    }

    /** Retourne le service de liste utilisé par ce composant. Ce service permet de controller dynamiquement la liste, ou de faire du lazyloading. */
    public get itemListService() {
        return this.getItemListService();
    }

    /** Definit le service utilisé pour le tri de la liste */
    @Input()
    public set sortingService(value: SortingService) {
        this.setSortingService(value);
    }

    /** Definit le service utilisé pour le regroupement de la liste */
    @Input()
    public set groupingService(value: GroupingService) {
        this.setGroupingService(value);
    }

    /** Definit si le waiter doit être affiché dans le select. */
    @Input()
    public set waiter(value: boolean) {
        this._waiter = value;
    }

    /** Retourne si le waiter doit être affiché dans le select. */
    public get waiter() { return this._waiter; }

    /** Définit la liste des éléments au format IItemBase */
    @Input()
    public set items(items: IItemBase[] | Promise<IItemBase[]> | Observable<IItemBase[]>) {
        super.setItems$(items).pipe(
            first(),
            tap(() => this.ensureSelection()),
            switchMap(() => this.calcViewList$()),
            takeUntil(this.destroyed$)
        ).subscribe();
    }

    /** Définit la liste des éléments (tout type d'objet métier) */
    @Input()
    public set models(items: any[] | Observable<any[]>) {
        super.setModels$(items).pipe(
            first(),
            tap(() => this.ensureSelection()),
            switchMap(() => this.calcViewList$()),
            takeUntil(this.destroyed$)
        ).subscribe();
    }

    /** Retourne le nombre de niveau pour une liste hierarchique */
    public get depthMax() { return this._depthMax; }

    /** Définit la hauteur maximum avant que le composant affiche une scrollbar
     * spécifier une grande valeur pour ne jamais afficher de scrollbar
     * Spécifier 0 pour que le composant determine sa hauteur à partir du container
     */
    @Input()
    public set maxHeight(value: number) {
        super.setMaxHeight(value);
    }

    /** Retourne la hauteur maximum avant que le composant affiche une scrollbar
     * spécifier une grande valeur pour ne jamais afficher de scrollbar
     * Spécifier 0 pour que le composant determine sa hauteur à partir du container
     */
    public get maxHeight() {
        return this.getMaxHeight();
    }

    @Input()
    /** Définit une valeur indiquant si le composant est en lecture seule */
    public set readonly(value: boolean) {
        const readonly = coerceBooleanProperty(value);
        this._readonly = readonly || null;
        this.changeDetectorRef.markForCheck();
    }

    /** Retourne une valeur indiquant si le composant est en lecture seule */
    public get readonly() {
        return this._readonly;
    }

    @ViewChild(DejaChildValidatorDirective)
    protected set inputValidatorDirective(value: DejaChildValidatorDirective) {
        if (value) {
            value.parentControl = this.ngControl;
        }
    }

    private set currentItemIndex(value: number) {
        super.setCurrentItemIndex(value);
        this.changeDetectorRef.markForCheck();
    }

    private get currentItemIndex() {
        return this.getCurrentItemIndex();
    }

    public get itemTemplate() {
        return this.itemTemplateExternal || this.itemTemplateInternal;
    }

    public get parentItemTemplate() {
        return this.parentItemTemplateExternal || this.parentItemTemplateInternal;
    }

    private get htmlInputElement() {
        return this.inputElement?.nativeElement as HTMLInputElement;
    }

    public get loaderTemplate() {
        return this.loaderTemplateExternal || this.loaderTemplateInternal;
    }

    public get dropdownVisible() {
        return this._dropdownVisible;
    }

    // ************* ControlValueAccessor Implementation **************
    public get value() {
        return this._multiSelect ? this.selectedItems : this.selectedItem;
    }

    public set value(val) {
        this.writeValue(val);
        this.onChangeCallback(val);
        this.onTouchedCallback();
        this.stateChanges.next();
    }

    public writeValue(value: any) {
        this.writeValue$.next(value);
    }

    public registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    public registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }

    public setDisabledState(isDisabled: boolean) {
        this.disabled = isDisabled;
    }
    // ************* End of ControlValueAccessor Implementation **************

    public ngDoCheck() {
        if (this.ngControl) {
            this.updateErrorState();
        }
    }

    public ngOnDestroy() {
        this.stateChanges.complete();
        this.fm.stopMonitoring(this.elementRef.nativeElement);
    }

    public ngAfterContentInit() {
        this.contentInitialized$.next(true);

        if (this.ngControl) {
            this.ngControl.valueChanges.pipe(
                filter(() => !!this.input),
                takeUntil(this.destroyed$)
            ).subscribe(() => {
                if (this.ngControl.touched) {
                    this.input.ngControl.control.markAsTouched();
                }
                this.input.ngControl.control.updateValueAndValidity();
            });
        }

        this.overlayOwnerElement = this.elementRef.nativeElement as HTMLElement;
        if (this.overlayOwnerElement.parentElement.className.indexOf('mat-form-field-infix') >= 0) {
            this.overlayOwnerElement = this.overlayOwnerElement.parentElement;
        }
    }

    public ngAfterViewInit() {
        fromEvent(this.htmlInputElement, 'click').pipe(
            filter(() => !this.dropdownVisible && !this.disabled),
            takeUntil(this.destroyed$)
        ).subscribe(event => {
            if (this.isModeSelect) {
                this.showDropDown();
            } else {
                this.htmlInputElement.select();
                this.filter$.next(event);
            }
        });

        fromEvent(this.htmlInputElement, 'focus').pipe(
            filter(() => !this.dropdownVisible && !this.disabled),
            delay(10),
            filter(() => this.htmlInputElement === document.activeElement),
            takeUntil(this.destroyed$)
        ).subscribe(event => {
            if (this.isModeSelect) {
                this.showDropDown();
            } else {
                // Autocomplete
                this.filter$.next(event);
            }
        });

        fromEvent(this.htmlInputElement, 'blur').pipe(
            filter(() => this.selectingItemIndex === undefined),
            takeUntil(this.destroyed$)
        ).subscribe(() => {
            this.onTouchedCallback();
            this.hideDropDown$.next(10);
        });

        merge(fromEvent(this.htmlInputElement, 'keydown'), fromEvent(this.elementRef.nativeElement, 'keydown')).pipe(
            filter((event: KeyboardEvent) => {
                if (event.defaultPrevented) {
                    return false;
                }

                const keyCode = event.code;
                return keyCode === KeyCodes.Home ||
                    keyCode === KeyCodes.End ||
                    keyCode === KeyCodes.PageUp ||
                    keyCode === KeyCodes.PageDown ||
                    keyCode === KeyCodes.UpArrow ||
                    keyCode === KeyCodes.DownArrow ||
                    keyCode === KeyCodes.Space ||
                    keyCode === KeyCodes.Enter;
            }),
            switchMap((event) => this.ensureListCaches$().pipe(map(() => event))),
            switchMap((event: KeyboardEvent) => {
                // Set and get current index for keyboard features only
                const setCurrentIndex = (index: number, item?: IItemBase) => {
                    this.currentItemIndex = index;
                    if (this.dropdownVisible) {
                        this.ensureItemVisible(this.currentItemIndex);
                        this.viewPort.refresh();
                    }

                    if (!this._multiSelect) {
                        item = item || super.getCurrentItem();
                        this.select(item, false);
                    }
                };

                switch (event.code) {
                    case KeyCodes.Home:
                        if (event.altKey || this._multiSelect && !this.dropdownVisible) {
                            this.toggleDropDown();
                        } else {
                            setCurrentIndex(0);
                        }
                        return of(false);

                    case KeyCodes.End:
                        if (event.altKey || this._multiSelect && !this.dropdownVisible) {
                            this.toggleDropDown();
                        } else {
                            setCurrentIndex(Math.max(0, this.rowsCount - 1));
                        }
                        return of(false);

                    case KeyCodes.PageUp:
                        if (event.altKey || this._multiSelect && !this.dropdownVisible) {
                            this.toggleDropDown();
                        } else {
                            const index = Math.max(0, this.currentItemIndex - this._pageSize);
                            setCurrentIndex(index);
                        }
                        return of(false);

                    case KeyCodes.PageDown:
                        if (event.altKey || this._multiSelect && !this.dropdownVisible) {
                            this.toggleDropDown();
                        } else {
                            const index = Math.min(this.rowsCount - 1, this.currentItemIndex + this._pageSize);
                            setCurrentIndex(index);
                        }
                        return of(false);

                    case KeyCodes.UpArrow:
                        if (event.altKey || this._multiSelect && !this.dropdownVisible) {
                            this.toggleDropDown();
                        } else {
                            const index = Math.max(0, this.currentItemIndex - 1);
                            setCurrentIndex(index);
                        }
                        return of(false);

                    case KeyCodes.DownArrow:
                        if (event.altKey || this._multiSelect && !this.dropdownVisible) {
                            this.toggleDropDown();
                        } else {
                            const index = Math.min(this.rowsCount - 1, this.currentItemIndex + 1);
                            setCurrentIndex(index);
                        }
                        return of(false);

                    case KeyCodes.Space:
                        if (this.dropdownVisible) {
                            const item = this._itemList[this.currentItemIndex - this.vpStartRow] as IItemTree;
                            if (this.isCollapsible(item)) {
                                this.keyboardNavigation$.next();
                                return this.toggleCollapse$(this.currentItemIndex, !item.collapsed).pipe(
                                    map(() => false)
                                );
                            }
                        }
                        return of(!this.isModeSelect);

                    // Do not break or return here
                    // tslint:disable-next-line:no-switch-case-fall-through
                    case KeyCodes.Enter:
                        if (this.dropdownVisible) {
                            const item = this._itemList[this.currentItemIndex - this.vpStartRow];
                            this.select(item);
                        }
                        return of(false);

                    default:
                        return of(true);
                }
            }),
            filter(continuePropagation => !continuePropagation),
            takeUntil(this.destroyed$)
        ).subscribe(() => {
            this.keyboardNavigation$.next();
            this.changeDetectorRef.markForCheck();
            event.preventDefault();
            return false;
        });

        const keyUp$ = fromEvent(this.htmlInputElement, 'keyup').pipe(
            filter((event: KeyboardEvent) => {
                const keyCode = event.code;
                return keyCode >= KeyCodes.Key0 ||
                    keyCode === KeyCodes.Backspace ||
                    keyCode === KeyCodes.Space ||
                    keyCode === KeyCodes.Delete;
            }));

        merge(keyUp$, this.filter$).pipe(
            tap(() => {
                if ((this.query || '').length < this.minSearchlength) {
                    this._itemList = [];
                    this.hideDropDown();
                    return;
                }
            }),
            switchMap((event: KeyboardEvent) => {
                // console.log('select.component, keycode:' + event.code);
                this.keyboardNavigation$.next();
                if (this.isModeSelect) {
                    // Select, search on the list
                    if ((/[a-zA-Z0-9]/).test(event.key)) {
                        // Valid char
                        this.clearFilterExpression$.next(null);

                        // Search next
                        this.filterExpression += event.key;
                        const rg = new RegExp(`^${this.filterExpression}`, 'i');
                        return this.findNextMatch$((item) => {
                            if (item && this.isSelectable(item)) {
                                const label = this.getTextValue(item);
                                if (rg.test(label)) {
                                    return true;
                                }
                            }
                            return false;
                        }, this.currentItemIndex).pipe(
                            first(),
                        );
                    }
                } else {
                    // Autocomplete, filter the list
                    this.filterListComplete$.next();
                }

                return of(null);
            }),
            filter(result => result?.index >= 0),
            takeUntil(this.destroyed$)
        ).subscribe(result => {
            // Set and get current index for keyboard features only
            this.currentItemIndex = result.index;
            if (this.dropdownVisible) {
                this.ensureItemVisible(this.currentItemIndex);
            }

            if (!this._multiSelect) {
                const item = result.item || super.getCurrentItem();
                this.select(item, false);
            }
        });
    }

    public setDescribedByIds(ids: string[]) {
        this.describedBy = ids.join(' ');
    }

    public onContainerClick(event: MouseEvent) {
        if ((event.target as Element).tagName.toLowerCase() !== 'input') {
            this.elementRef.nativeElement.querySelector('input').focus();
        }
    }

    /** Change l'état d'expansion de toute les lignes parentes */
    public toggleAll$(collapsed?: boolean): Observable<IItemTree[]> {
        return super.toggleAll$(collapsed).pipe(
            switchMap((items) => this.calcViewList$().pipe(first(), map(() => items))));
    }

    /** Change l'état d'expansion de toute les lignes parentes */
    public toggleAll(collapsed?: boolean) {
        this.toggleAll$(collapsed).pipe(
            first(),
            takeUntil(this.destroyed$)
        ).subscribe();
    }

    /** Change l'état d'expansion de la ligne spécifiée
     * @param index  Index sur la liste des éléments visibles de l'élément à changer.
     * @param collapse  Etat de l'élément. True pour réduire l'élément.
     * @return Observable résolu par la fonction.
     */
    public toggleCollapse$(index: number, collapsed: boolean): Observable<IItemTree> {
        return super.toggleCollapse$(index, collapsed).pipe(
            tap(() => {
                if (this.dropdownVisible) {
                    this.reshowDropDown();
                }
            }));
    }

    /** Change l'état d'expansion de la ligne spécifiée
     * @param index  Index sur la liste des éléments visibles de l'élément à changer.
     * @param collapse  Etat de l'élément. True pour réduire l'élément.
     */
    public toggleCollapse(index: number, collapsed: boolean) {
        this.toggleCollapse$(index, collapsed).pipe(
            first(),
            takeUntil(this.destroyed$)
        ).subscribe();
    }

    public queryChanged(value: string) {
        this.query = value;
        if (!this.isModeSelect) {
            // Autocomplete or multiselect only
            this.dropDownQuery = this.query;
            if (this.isModeAutocomplete) {
                this.unselectAll$().pipe(
                    first(),
                    takeUntil(this.destroyed$)
                ).subscribe(() => this.onModelChange());
            }
        }
    }

    public hideDropDown() {
        this.hideDropDown$.next();
    }

    public scroll(event: Event) {
        const element = event.target as HTMLElement;
        this.storeScrollPosition$.next(element.scrollTop);
    }
    public mousedown(e: MouseEvent) {
        if (this.mouseUp$sub) {
            this.mouseUp$sub.unsubscribe();
            this.mouseUp$sub = undefined;
        }

        this.selectingItemIndex = this.getItemIndexFromHTMLElement(e.target as HTMLElement);

        this.mouseUp$sub = fromEvent(this.listElement, 'mouseup').pipe(
            switchMap((upEvent: MouseEvent) => {
                const itemIndex = this.getItemIndexFromHTMLElement(upEvent.target as HTMLElement);
                if (itemIndex === undefined || this.selectingItemIndex === undefined || itemIndex !== this.selectingItemIndex) {
                    return of(null);
                }

                const item = this._itemList[itemIndex - this.vpStartRow] as IItemTree;
                if (!item || upEvent.button !== 0) {
                    // Right click menu
                    return of(null);
                }

                const isExpandButton = (target: HTMLElement) => {
                    return target.id === 'expandbtn' || target.parentElement.id === 'expandbtn';
                };

                if (this.isCollapsible(item) && (isExpandButton(e.target as HTMLElement) || !this.isSelectable(item))) {
                    if (upEvent.button === 0) {
                        return this.toggleCollapse$(itemIndex, !item.collapsed);
                    }
                } else if (!item.selected) {
                    this.select(item);
                }

                return of(null);
            }),
            takeUntil(this.destroyed$)
        ).subscribe();
    }

    public getItemClass(item: IItemTree) {
        const classNames = ['listitem'] as string[];
        if (item.className) {
            classNames.push(item.className);
        }
        if (item.collapsing || item.expanding) {
            classNames.push('hide');
        }
        if (item.depth < this.depthMax) {
            classNames.push('parent');
        }
        if (item.collapsed) {
            classNames.push('collapsed');
        }
        if (item.selected) {
            classNames.push('selected');
        }
        if (item.selectable === false) {
            classNames.push('unselectable');
        }
        if (item.depth === this._depthMax && item.odd) {
            classNames.push('odd');
        }
        return classNames.join(' ');
    }

    public updateErrorState() {
        const oldState = this.errorState;
        const parent = this._parentFormGroup || this._parentForm;
        const matcher = this.errorStateMatcher || this._defaultErrorStateMatcher;
        const control = this.ngControl ? this.ngControl.control as FormControl : null;
        const newState = matcher.isErrorState(control, parent);

        if (newState !== oldState) {
            this.errorState = newState;
            this.stateChanges.next();
        }
    }

    public clearSelection() {
        this.removeSelection();
    }

    public onCloseClicked(event?: IDejaChipsComponentCloseEvent) {
        if (this.ngControl) {
            this.ngControl.control.markAsTouched();
        }
        this.removeSelection(event?.item);
        if (event) {
            event.stopPropagation();
        }
        return false;
    }

    public onOpenClicked() {
        if (this.dropdownVisible || this.disabled) {
            return;
        }

        if (this.isModeSelect) {
            this.showDropDown();
        } else {
            this.htmlInputElement.select();
            this.filter$.next(event);
        }
    }

    protected removeSelection(item?: IItemBase) {
        if (!this._multiSelect) {
            this.query = '';
            this.dropDownQuery = '';
            this.setSelectedItems(null);
            this.onModelChange();
            delete this.selectingItemIndex;
        } else if (item) {
            this.toggleSelect$([item], false).pipe(
                first(),
                takeUntil(this.destroyed$)
            ).subscribe(selectedItems => {
                const selected = [...selectedItems];
                this.setSelectedItems(selected);
                this.onModelChange(selected);
            });
        } else {
            this.unselectAll$().pipe(
                first(),
                takeUntil(this.destroyed$)
            ).subscribe(() => this.onModelChange());
        }
    }

    protected calcViewList$(): Observable<IViewListResult> {
        return super.calcViewList$(this.dropDownQuery).pipe(
            tap(() => this.changeDetectorRef.markForCheck()));
    }

    protected ensureItemVisible(item: IItemBase | number) {
        super.ensureItemVisible(item);
    }

    private onModelChange(items?: IItemBase[] | IItemBase) {
        let outputEmitter = null;

        let output = null;

        if (items) {
            if (Array.isArray(items)) {
                const models = items.map((itm) => itm.model !== undefined ? itm.model : itm);
                outputEmitter = {
                    items: items,
                    models: models,
                } as DejaItemsEvent;

                if (this.modelIsValue) {
                    const valueField = this.getValueField();
                    if (models.find((m) => !!m[valueField])) {
                        output = models.map((m) => m[valueField] !== undefined ? m[valueField] : m);
                    }
                } else {
                    output = models;
                }
            } else {
                const model = items.model;
                outputEmitter = {
                    item: items,
                    model: model,
                } as DejaItemEvent;

                if (this.modelIsValue) {
                    const valueField = this.getValueField();
                    output = model[valueField] !== undefined ? model[valueField] : model;
                } else {
                    output = items.model !== undefined ? items.model : items;
                }
            }
        }

        this.onChangeCallback(output);

        if (outputEmitter) {
            this.selectedChange.emit(outputEmitter);
        }
    }

    private select(item: IItemBase, hideDropDown?: boolean) {
        if (!this.isSelectable(item)) {
            return;
        }

        if (!item) {
            // this.query = '';
            // this.dropDownQuery = '';
            // this.setSelectedItems(null);
            // this.onModelChange();
            return;
        }

        if (this._multiSelect) {
            this.toggleSelect$([item], true).pipe(
                first(),
                takeUntil(this.destroyed$)
            ).subscribe(selectedItems => {
                const selected = selectedItems ? [...selectedItems] : [];
                this.setSelectedItems(selected);
                this.onModelChange(selected);
                this.query = '';
                this.dropDownQuery = '';
            });
        } else {
            this.query = this.getTextValue(item);
            this.setSelectedItems([item]);
            this.onModelChange(item);
        }

        this.htmlInputElement.focus();
        if (hideDropDown !== false) {
            this.hideDropDown();
        }
    }

    public toggleDropDown() {
        if (this.dropdownVisible) {
            this.hideDropDown();
        } else {
            this.showDropDown();
        }
    }

    public showDropDown() {
        this.showDropDown$.next();
    }

    private reshowDropDown() {
        if (!this.dropdownVisible) {
            return this.showDropDown();
        }

        delete this.selectingItemIndex;

        // Restore scroll Position
        const listElement = this.listElement;
        if (listElement) {
            listElement.scrollTop = this.lastScrollPosition;
        }

        this.calcViewList$().pipe(
            tap(() => this.refreshViewPort()),
            combineLatestOp(this.viewPortChanged), // Wait for viewport calculation
            first(),
            delay(1),
            takeUntil(this.destroyed$)
        ).subscribe(() => {
            // View port calculated
            this.overlay.updatePosition();

            // Ensure selection
            const item = this.getSelectedItems()[0];
            const index = item && this.getItemIndex(item);
            if (index >= 0) {
                this.currentItemIndex = index;
                this.ensureItemVisible(index);
            }
        });
    }

    private ensureSelection() {
        if (this._multiSelect) {
            // Do nothing yet
        } else {
            this.query = this.selectedItems.length ? this.getTextValue(this.selectedItems[0]) : '';
        }
    }
}
