/*
 *  @license
 *  Copyright Hôpitaux Universitaires de Genève. All Rights Reserved.
 *
 *  Use of this source code is governed by an Apache-2.0 license that can be
 *  found in the LICENSE file at https://github.com/DSI-HUG/dejajs-components/blob/master/LICENSE
 */
import { EventEmitter, Injectable } from '@angular/core';
import { IDejaComboListAction } from '../model/combo-list-action.interface';
import { noop } from '../model/combo-list.accessor';

@Injectable()
export class DejaComboListService<T> {

    public selectable: T[] = [];
    public selectableBuffer: T[] = [];
    public selected: T[] = [];
    public selectedBuffer: T[] = [];

    public labelFieldName = 'label';
    public sortDirection: string;

    public action = new EventEmitter<IDejaComboListAction<T>>();

    public onChangeCallback: (_: any) => void = noop;

    public toggleSelectable(item: T, add = true) {
        const index = this.selectableBuffer.indexOf(item, 0);
        if (index > -1) {
            this.selectableBuffer = this.selectableBuffer.filter((_, idx) => idx !== index);
            this.emit('selectable_selected', item);
        } else if (add) {
            this.selectableBuffer = this.selectableBuffer.concat([item]);
            this.emit('selectable_deselected', item);
        }
    }

    public toggleSelected(item: T, add = true) {
        const index = this.selectedBuffer.indexOf(item, 0);
        if (index > -1) {
            this.selectedBuffer = this.selectedBuffer.filter((_, idx) => idx !== index);
            this.emit('selected_selected', item);
        } else if (add) {
            this.selectedBuffer = this.selectedBuffer.concat([item]);
            this.emit('selected_deselected', item);
        }
    }

    public raiseBuffer() {
        this.selectable = this.selectable.filter((i: T) => this.selectableBuffer.indexOf(i, 0) === -1);
        this.selected = this.selectableBuffer.concat(this.selected);
        this.selectableBuffer = [];
        this.sortAll();
        this.emit('selectable_raised');
    }

    public dropBuffer() {
        this.selected = this.selected.filter((i: T) => this.selectedBuffer.indexOf(i, 0) === -1);
        this.selectable = this.selectedBuffer.concat(this.selectable);
        this.selectedBuffer = [];
        this.sortAll();
        this.emit('selected_dropped');
    }

    public raiseOne(item: T) {
        this.selectable = this.selectable.filter((i: T) => i !== item);
        this.selectableBuffer = this.selectableBuffer.filter((i: T) => i !== item);
        if (this.selected.indexOf(item, 0) === -1) {
            this.selected = [item].concat(this.selected);
        }
        this.sortAll();
        this.emit('raised_one', item);
    }

    public dropOne(item: T) {
        this.selected = this.selected.filter((i: T) => i !== item);
        this.selectedBuffer = this.selectedBuffer.filter((i: T) => i !== item);
        if (this.selectable.indexOf(item, 0) === -1) {
            this.selectable = [item].concat(this.selectable);
        }
        this.sortAll();
        this.emit('dropped_one', item);
    }

    public raiseAll() {
        this.selected = this.selectable.concat(this.selected);
        this.selectable = [];
        this.selectableBuffer = [];
        this.sortAll();
        this.emit('raised_all');
    }

    public dropAll() {
        this.selectable = this.selected.concat(this.selectable);
        this.selected = [];
        this.selectedBuffer = [];
        this.sortAll();
        this.emit('dropped_all');
    }

    public sortAll() {
        this.sort(this.selectable);
        this.sort(this.selected);
        this.onChangeCallback(this.selected);
    }

    private sort(aItem: T[]): T[] {
        if (!this.sortDirection) {
            return aItem;
        }
        const fieldname = this.labelFieldName;
        const coeff = this.sortDirection === 'asc' ? 1 : -1;
        return aItem.sort((a, b) => {
            if (a[fieldname] < b[fieldname]) { return -1 * coeff; }
            if (a[fieldname] > b[fieldname]) { return 1 * coeff; }
            return 0;
        });
    }

    private emit(type: string, currentItem: T = null, selectedItems = this.selected) {
        const action: IDejaComboListAction<T> = {
            type,
            payload: {
                currentItem,
                selectedItems,
            }
        };
        this.action.emit(action);
    }

}
