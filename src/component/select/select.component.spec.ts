/*
 *  @license
 *  Copyright Hôpitaux Universitaires de Genève. All Rights Reserved.
 *
 *  Use of this source code is governed by an Apache-2.0 license that can be
 *  found in the LICENSE file at https://github.com/DSI-HUG/dejajs-components/blob/master/LICENSE
 */

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoConflictStyleCompatibilityMode } from '@angular/material';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Observable } from 'rxjs/Observable';
import { GroupingService } from '../../common/core/grouping/grouping.service';
import { DejaItemModule } from '../../common/core/item-list/index';
import { IItemTree } from '../../common/core/item-list/item-tree';
import { ViewPortService } from '../../common/core/item-list/viewport.service';
import { DejaConnectionPositionPair } from '../../common/core/overlay/connection-position-pair';
import { DejaSelectModule } from './index';
import { DejaSelectComponent } from './select.component';

@Component({
    template: `<deja-select style="width: 1000px;" [items]="itemList" multiSelect viewportMode="variable" searchArea sortable itemsDraggable pageSize="10">
                    <ng-template #itemTemplate let-item>
                        Item {{ item.displayName }}
                    </ng-template>
                </deja-select>`,
    providers: [
        GroupingService
    ],
})
class DejaSelectContainerComponent {
    public itemList = [] as IItemTree[];

    constructor(groupingService: GroupingService) {
        const itemList = Array.apply(null, { length: 2000 }).map((_n, i) => {
            const rand = Math.floor(Math.random() * (70 - 33 + 1)) + 33; // random de 33 à 70
            return {
                size: rand,
                displayName: `${i} - Une ligne de test avec une taille de : ${rand}`,
            } as IItemTree;
        });

        groupingService.group$(itemList, [{ groupByField: 'size' }])
            .first()
            .subscribe((groupedResult) => {
                this.itemList = groupedResult;
            });
    }
}

// @Component({
//     template: `<deja-select style="height: 500px;width: 1000px;" [(ngModel)]="selectedModels" [models]="modelsList$" multiSelect viewportMode="fixed" searchArea pageSize="10" valueField="id">
//                     <ng-template #itemTemplate let-item>
//                         <span [style.background-color]="backgroundColor(item)">
//                             Item {{ item.model.displayName }}
//                         </span>
//                     </ng-template>
//                 </deja-select>`,
//     providers: [
//         SortingService,
//     ],
// })
// class DejaSelectByModelContainerComponent {
//     public modelsList$: Observable<any[]>;
//     public selectedModels: any[];

//     constructor(sortingService: SortingService) {
//         const modelsList = Array.apply(null, { length: 2000 }).map((_n, i) => {
//             const rand = Math.floor(Math.random() * (70 - 33 + 1)) + 33; // random de 33 à 70;
//             return {
//                 id: i,
//                 value: rand,
//                 displayName: `${i} - Une ligne de test avec une valeur de : ${rand}`,
//             };
//         });

//         this.selectedModels = [0, 1, 2];
//         this.modelsList$ = sortingService.sort$(modelsList, { name: 'value' } as ISortInfos);
//     }

//     public backgroundColor(item: IItemBase) {
//         return item.selected ? '#888' : null;
//     }
// }

@Component({
    template: `<deja-select style="width: 1000px;" viewportMode="fixed" multiSelect sortable itemsDraggable>
                    <deja-item value="Apricots" text="Apricots"></deja-item>
                    <deja-item value="Banana" text="Banana"></deja-item>
                    <deja-item value="Cantaloupe" text="Cantaloupe"></deja-item>
                    <deja-item value="Cherries" text="Cherries"></deja-item>
                    <deja-item value="Coconut" text="Coconut"></deja-item>
                    <deja-item value="Cranberries" text="Cranberries"></deja-item>
                    <deja-item value="Durian" text="Durian"></deja-item>
                    <deja-item value="Grapes" text="Grapes"></deja-item>
                    <deja-item value="Lemon" text="Lemon"></deja-item>
                    <deja-item value="Mango" text="Mango"></deja-item>
                    <deja-item value="Pineapple" text="Pineapple"></deja-item>
                    <deja-item value="Watermelon" text="Watermelon"></deja-item>
                </deja-select>`,
})
class DejaSelectByOptionsContainerComponent {
    constructor() { }
}

describe('DejaSelectComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                DejaSelectContainerComponent,
            ],
            imports: [
                BrowserAnimationsModule,
                CommonModule,
                FormsModule,
                NoConflictStyleCompatibilityMode,
                DejaSelectModule,
            ],
        }).compileComponents();
    }));

    const observeViewPort$ = (fixture: ComponentFixture<DejaSelectContainerComponent>) => {
        const selectDebugElement = fixture.debugElement.query(By.directive(DejaSelectComponent));
        const viewPortService = selectDebugElement.injector.get(ViewPortService) as ViewPortService;
        const selectInstance = selectDebugElement.componentInstance as DejaSelectComponent;

        Observable.from(selectInstance.dropDownVisibleChange)
            .subscribe(() => fixture.detectChanges());

        return Observable.from(viewPortService.viewPortResult$)
            .filter((result) => result.viewPortSize > 0);
    };

    it('should create the component', async(() => {
        const fixture = TestBed.createComponent(DejaSelectContainerComponent);
        fixture.detectChanges();
        const selectDebugElement = fixture.debugElement.query(By.directive(DejaSelectComponent));
        const selectInstance = selectDebugElement.componentInstance as DejaSelectComponent;
        expect(selectInstance).toBeTruthy();
    }));

    it('should return the write property', (() => {
        const fixture = TestBed.createComponent(DejaSelectContainerComponent);
        const selectDebugElement = fixture.debugElement.query(By.directive(DejaSelectComponent));
        const selectInstance = selectDebugElement.componentInstance as DejaSelectComponent;
        const sl = selectInstance as any;

        fixture.detectChanges();

        expect(selectInstance.positions).toEqual(DejaConnectionPositionPair.default);
        selectInstance.positions = 'start top start bottom';
        expect(sl.positions).toEqual(DejaConnectionPositionPair.parse('start top start bottom'));

        selectInstance.dropDownWidth = 100;
        expect(sl.dropDownWidth).toEqual('100px');

        expect(selectInstance.readonly).toBeNull();
        sl.readonly = 'true';
        expect(selectInstance.readonly).toBeTruthy();

        //     expect(selectInstance.sortable).toBeTruthy();
        //     selectInstance.sortable = 'false';
        //     expect(selectInstance.sortable).toBeFalsy();

        //     expect(selectInstance.itemsDraggable).toBeTruthy();
        //     selectInstance.itemsDraggable = 'false';
        //     expect(selectInstance.itemsDraggable).toBeFalsy();

        //     expect(selectInstance.pageSize).toBe(10);
        //     selectInstance.pageSize = '5';
        //     expect(tl.pageSize).toBe(5);
        //     selectInstance.pageSize = 0;
        //     expect(selectInstance.pageSize).toBe(10);

        //     expect(selectInstance.hintLabel).toBeUndefined();
        //     selectInstance.hintLabel = 'I am a hint label';
        //     expect(selectInstance.hintLabel).toEqual(`I am a hint label`);

        //     expect(tl._viewPortRowHeight).toBe(ViewPortService.itemDefaultSize);
        //     selectInstance.viewPortRowHeight = 100;
        //     expect(tl._viewPortRowHeight).toBe(100);

        //     expect(selectInstance.childrenField).toBeUndefined();
        //     expect(itemListService.childrenField).toEqual(ItemListService.defaultChildrenField);
        //     selectInstance.childrenField = 'children';
        //     expect(selectInstance.childrenField).toEqual('children');
        //     expect(itemListService.childrenField).toEqual('children');

        //     expect(tl.getTextField()).toEqual(ItemListService.defaultTextField);
        //     selectInstance.textField = 'text';
        //     expect(tl.getTextField()).toEqual('text');

        //     expect(tl.getValueField()).toEqual(ItemListService.defaultValueField);
        //     selectInstance.valueField = 'my value field';
        //     expect(tl.getValueField()).toEqual('my value field');
        //     expect(itemListService.valueField).toEqual('my value field');

        //     expect(selectInstance.searchField).toBeUndefined();
        //     selectInstance.searchField = 'my search field';
        //     expect(selectInstance.searchField).toEqual('my search field');

        //     expect(selectInstance.multiSelect).toBeTruthy();
        //     selectInstance.multiSelect = 'false';
        //     expect(selectInstance.multiSelect).toBeFalsy();

        //     const myItemListService = new ItemListService();
        //     expect(selectInstance.itemListService).toBeDefined();
        //     selectInstance.itemListService = myItemListService;
        //     expect(selectInstance.itemListService).toBe(myItemListService);

        //     const sortingService = new SortingService();
        //     expect(myItemListService.getSortingService()).toBeDefined();
        //     selectInstance.sortingService = sortingService;
        //     expect(myItemListService.getSortingService()).toBe(sortingService);

        //     const groupingService = new GroupingService();
        //     expect(myItemListService.getGroupingService()).toBeDefined();
        //     selectInstance.groupingService = groupingService;
        //     expect(myItemListService.getGroupingService()).toBe(groupingService);

        //     expect(selectInstance.minSearchlength).toBe(0);
        //     selectInstance.minSearchlength = '3';
        //     expect(tl.minSearchlength).toBe(3);

        //     expect(selectInstance.disabled).toBeNull();
        //     selectInstance.disabled = 'true';
        //     expect(selectInstance.disabled).toBeTruthy();
        //     selectInstance.setDisabledState(false);
        //     expect(selectInstance.disabled).toBeFalsy();

        //     expect(selectInstance.waiter).toBeFalsy();
        //     selectInstance.waiter = true;
        //     expect(selectInstance.waiter).toBeTruthy();
    }));

    it('should open and close the dropdown programatically', async(() => {
        let pass = 0;
        const fixture = TestBed.createComponent(DejaSelectContainerComponent);
        const selectDebugElement = fixture.debugElement.query(By.directive(DejaSelectComponent));
        const selectInstance = selectDebugElement.componentInstance as DejaSelectComponent;
        const viewPortService = selectDebugElement.injector.get(ViewPortService) as ViewPortService;
        const sl = selectInstance as any;

        Observable.from(selectInstance.dropDownVisibleChange)
            .do((state) => {
                fixture.detectChanges()
                switch (++pass) {
                    case 1:
                        expect(state).toBeTruthy();                        
                        break;
                    case 2:
                        expect(state).toBeFalsy();
                        break;
                    case 3:
                        expect(state).toBeTruthy()
                        break;
                    default:
                        expect(state).toBeFalsy();
                }
            })
            .delay(10)
            .subscribe(() => { 
                switch (pass) {
                    case 2:
                    case 3:
                        sl.toggleDropDown();
                        break;
                }
            });

        Observable.from(viewPortService.viewPortResult$)
            .debounceTime(100)
            .first()
            .subscribe((vp) => {
                // Bind view port
                fixture.detectChanges();
                expect(vp.items.length).toBeGreaterThan(0);
                expect(vp.visibleItems.length).toBeGreaterThan(0);
                sl.hideDropDown();
            });

        Observable.timer(3000).first().subscribe(() => expect(pass).toBe(4));

        sl.showDropDown();
        fixture.detectChanges();
    }));

    it('should toggle and collapse parent items', async(() => {
        let pass = 0;
        const fixture = TestBed.createComponent(DejaSelectContainerComponent);
        const selectDebugElement = fixture.debugElement.query(By.directive(DejaSelectComponent));
        const selectInstance = selectDebugElement.componentInstance as DejaSelectComponent;
        const sl = selectInstance as any;

        observeViewPort$(fixture)
            .debounceTime(10)
            .subscribe((vp) => {
                // Bind view port
                fixture.detectChanges();
                debugger;
                const collapsed = fixture.debugElement.queryAll(By.css('.deja-overlay-container > .cdk-overlay-pane > .deja-listcontainer > .listitem.parent.collapsed'));
                const collapsedItems = vp.items.filter((item: IItemTree) => item.collapsed);
                const parentItems = vp.items.filter((item: IItemTree) => item.depth === 0);
                switch (++pass) {
                    case 1:
                        expect(collapsed.length).toBe(0);
                        expect(collapsedItems.length).toBe(0);
                        // Toggle all items
                        selectInstance.toggleAll();
                        selectInstance.refreshViewPort();
                        fixture.detectChanges();
                        break;

                    case 2:
                        // Check collapsed items
                        expect(collapsed.length).toBeGreaterThan(0);
                        expect(collapsedItems.length).toBe(parentItems.length);
                        // Clear toogle
                        selectInstance.toggleAll(false);
                        selectInstance.refreshViewPort();
                        fixture.detectChanges();
                        break;

                    default:
                        // Check no collapsed
                        expect(collapsed.length).toBe(0);
                        expect(collapsedItems.length).toBe(0);
                }
            });

        Observable.timer(3000).first().subscribe(() => expect(pass).toBe(3));
        
        sl.showDropDown();
        fixture.detectChanges();
    }));

    it('should not load items if minSearchlength is defined', async(() => {
        let pass = 0;
        const fixture = TestBed.createComponent(DejaSelectContainerComponent);
        const selectDebugElement = fixture.debugElement.query(By.directive(DejaSelectComponent));
        const selectInstance = selectDebugElement.componentInstance as DejaSelectComponent;
        const viewPortService = selectDebugElement.injector.get(ViewPortService) as ViewPortService;
        const sl = selectInstance as any;

        Observable.from(selectInstance.dropDownVisibleChange)
            .subscribe(() => fixture.detectChanges());

        Observable.from(viewPortService.viewPortResult$)
            .debounceTime(100)
            .subscribe((_vp) => {
                // Bind view port
                fixture.detectChanges();
                const listItems = fixture.debugElement.queryAll(By.css('.deja-overlay-container > .cdk-overlay-pane > .deja-listcontainer > .listitem'));
                switch (++pass) {
                    case 1:
                        expect(listItems.length).toBe(0);
                        sl.queryChanged('33');
                        fixture.detectChanges();
                        sl.filterListComplete$.next();
                        break;

                    case 2:
                        expect(listItems.length).toBeGreaterThan(0);
                        sl.queryChanged('44');
                        fixture.detectChanges();
                        sl.filterListComplete$.next();
                        break;

                    default:
                        expect(listItems.length).toBeGreaterThan(0);
                }
            });

        selectInstance.minSearchlength = 2;
        selectInstance.type = 'autocomplete';
        sl.showDropDown();
        fixture.detectChanges();
    }));
});

// it('should return the write item class', (() => {
//     const fixture = TestBed.createComponent(DejaSelectContainerComponent);
//     fixture.detectChanges();
//     const selectDebugElement = fixture.debugElement.query(By.directive(DejaSelectComponent));
//     const selectInstance = selectDebugElement.componentInstance as DejaSelectComponent;
//     const tl = selectInstance as any;

//     const item = {
//         className: null,
//         collapsing: false,
//         expanding: false,
//         depth: 0,
//         collapsed: false,
//         selected: false,
//         odd: false,
//     } as IItemTree;
//     expect(tl.getItemClass(item)).toEqual('listitem parent');

//     item.className = 'test';
//     expect(tl.getItemClass(item)).toEqual('listitem test parent');

//     item.collapsing = true;
//     expect(tl.getItemClass(item)).toEqual('listitem test hide parent');

//     item.collapsing = false;
//     expect(tl.getItemClass(item)).toEqual('listitem test parent');

//     item.expanding = true;
//     expect(tl.getItemClass(item)).toEqual('listitem test hide parent');

//     item.expanding = false;
//     expect(tl.getItemClass(item)).toEqual('listitem test parent');

//     item.collapsed = true;
//     expect(tl.getItemClass(item)).toEqual('listitem test parent collapsed');

//     item.selected = true;
//     expect(tl.getItemClass(item)).toEqual('listitem test parent collapsed selected');

//     item.selectable = true;
//     expect(tl.getItemClass(item)).toEqual('listitem test parent collapsed selected');

//     item.selectable = false;
//     expect(tl.getItemClass(item)).toEqual('listitem test parent collapsed selected unselectable');

//     item.odd = true;
//     item.depth = 1;
//     expect(tl.getItemClass(item)).toEqual('listitem test collapsed selected unselectable odd');
// }));

// it('should set and ensure the current item', async(() => {
//     const fixture = TestBed.createComponent(DejaSelectContainerComponent);
//     const selectDebugElement = fixture.debugElement.query(By.directive(DejaSelectComponent));
//     const selectInstance = selectDebugElement.componentInstance as DejaSelectComponent;
//     const tl = selectInstance as any;
//     let pass = 0;

//     observeViewPort$(fixture)
//         .debounceTime(100) // Debounce here, because ensureVisible move the scroll and more than one viewPort can be raised
//         .subscribe((vp) => {
//             fixture.detectChanges();
//             const currentItems = fixture.debugElement.queryAll(By.css('deja-select > .deja-listcontainer > .listitem[current="true"]'));

//             switch (++pass) {
//                 case 1:
//                     expect(currentItems.length).toBe(0);
//                     // Set current item by index
//                     tl.currentItemIndex = 20;
//                     expect(tl.currentItemIndex).toBe(20);
//                     selectInstance.ensureItemVisible(tl.currentItemIndex);
//                     fixture.detectChanges();
//                     break;

//                 case 2:
//                     // Check currentItem by index
//                     expect(currentItems.length).toBe(1);
//                     expect(currentItems[0] && currentItems[0].attributes.flat).toBe('20');
//                     expect(vp.endIndex).toBe(20);
//                     expect(selectInstance.currentItem).toBe(vp.items[20]);
//                     // Set current item by item
//                     selectInstance.currentItem = vp.items[1];
//                     fixture.detectChanges();
//                     break;

//                 default:
//                     // Check currentItem by item
//                     expect(currentItems.length).toBe(1);
//                     expect(currentItems[0] && currentItems[0].attributes.flat).toBe('1');
//                     expect(vp.startIndex).toBe(1);
//                     expect(selectInstance.currentItem).toBe(vp.items[1]);
//             }
//         });

//     fixture.detectChanges();
// }));

// it('should set the selected items', async(() => {
//     let pass = 0;
//     const fixture = TestBed.createComponent(DejaSelectContainerComponent);
//     const selectDebugElement = fixture.debugElement.query(By.directive(DejaSelectComponent));
//     const selectInstance = selectDebugElement.componentInstance as DejaSelectComponent;

//     observeViewPort$(fixture)
//         .debounceTime(10)
//         .subscribe((vp) => {
//             // Bind view port
//             fixture.detectChanges();
//             const selectedElements = fixture.debugElement.queryAll(By.css('deja-select > .deja-listcontainer > .listitem.selected'));
//             const selectedItems = vp.items.filter((item: IItemBase) => item.selected);

//             switch (++pass) {
//                 case 1:
//                     expect(selectedElements.length).toBe(0);
//                     // Set selected items
//                     selectInstance.selectedItems = [vp.items[vp.startIndex], vp.items[vp.endIndex], vp.items[vp.items.length - 1]];
//                     expect(selectInstance.selectedItems).toBeDefined();
//                     expect(selectInstance.selectedItems.length).toBe(3);
//                     selectInstance.refreshViewPort();
//                     fixture.detectChanges();
//                     break;

//                 case 2:
//                     // Check selected items
//                     expect(selectedElements.length).toBe(2);
//                     expect(selectedElements[0] && selectedElements[0].attributes.flat).toBe(`${vp.startIndex}`);
//                     expect(selectedElements[1] && selectedElements[1].attributes.flat).toBe(`${vp.endIndex}`);
//                     expect(selectedItems.length).toBe(3);
//                     // Clear selection
//                     selectInstance.selectedItems = null;
//                     selectInstance.refreshViewPort();
//                     fixture.detectChanges();
//                     break;

//                 case 3:
//                     // Check no selected
//                     expect(selectedElements.length).toBe(0);
//                     expect(selectedItems.length).toBe(0);
//                     // Set selected item
//                     selectInstance.selectedItem = vp.items[5];
//                     expect(selectInstance.selectedItem).toBe(vp.items[5]);
//                     selectInstance.refreshViewPort();
//                     fixture.detectChanges();
//                     break;

//                 case 4:
//                     // Check selected item
//                     expect(selectedElements.length).toBe(1);
//                     expect(selectedElements[0] && selectedElements[0].attributes.flat).toBe(`5`);
//                     expect(selectedItems.length).toBe(1);
//                     // Clear selection
//                     selectInstance.selectedItem = null;
//                     selectInstance.refreshViewPort();
//                     fixture.detectChanges();
//                     break;

//                 default:
//                     // Check no selected
//                     expect(selectedElements.length).toBe(0);
//                     expect(selectedItems.length).toBe(0);
//             }
//         });

//     fixture.detectChanges();
// }));

// it('should toggle and collapse all the items', async(() => {
//     let pass = 0;
//     const fixture = TestBed.createComponent(DejaSelectContainerComponent);
//     const selectDebugElement = fixture.debugElement.query(By.directive(DejaSelectComponent));
//     const selectInstance = selectDebugElement.componentInstance as DejaSelectComponent;

//     observeViewPort$(fixture)
//         .debounceTime(10)
//         .subscribe((vp) => {
//             // Bind view port
//             fixture.detectChanges();
//             const collapsed = fixture.debugElement.queryAll(By.css('deja-select > .deja-listcontainer > .listitem.parent.collapsed'));
//             const collapsedItems = vp.items.filter((item: IItemTree) => item.collapsed);
//             const parentItems = vp.items.filter((item: IItemTree) => item.depth === 0);
//             switch (++pass) {
//                 case 1:
//                     expect(collapsed.length).toBe(0);
//                     expect(collapsedItems.length).toBe(0);
//                     // Toggle all items
//                     selectInstance.toggleAll();
//                     selectInstance.refreshViewPort();
//                     fixture.detectChanges();
//                     break;

//                 case 2:
//                     // Check collapsed items
//                     expect(collapsed.length).toBeGreaterThan(0);
//                     expect(collapsedItems.length).toBe(parentItems.length);
//                     // Clear toogle
//                     selectInstance.toggleAll(false);
//                     selectInstance.refreshViewPort();
//                     fixture.detectChanges();
//                     break;

//                 default:
//                     // Check no collapsed
//                     expect(collapsed.length).toBe(0);
//                     expect(collapsedItems.length).toBe(0);
//             }
//         });

//     fixture.detectChanges();
// }));
// });

// describe('DejaSelectByModelContainerComponent', () => {
//     beforeEach(async(() => {
//         TestBed.configureTestingModule({
//             declarations: [
//                 DejaSelectByModelContainerComponent,
//             ],
//             imports: [
//                 BrowserAnimationsModule,
//                 CommonModule,
//                 FormsModule,
//                 NoConflictStyleCompatibilityMode,
//                 DejaSelectModule,
//             ],
//         }).compileComponents();
//     }));

//     const observeModelViewPort$ = (fixture: ComponentFixture<DejaSelectByModelContainerComponent>) => {
//         const selectDebugElement = fixture.debugElement.query(By.directive(DejaSelectComponent));
//         const viewPortService = selectDebugElement.injector.get(ViewPortService) as ViewPortService;

//         return Observable.from(viewPortService.viewPortResult$)
//             .filter((result) => result.viewPortSize > 0);
//     };

//     it('should create the component', async(() => {
//         const fixture = TestBed.createComponent(DejaSelectByModelContainerComponent);
//         fixture.detectChanges();
//         const selectDebugElement = fixture.debugElement.query(By.directive(DejaSelectComponent));
//         const selectInstance = selectDebugElement.componentInstance as DejaSelectComponent;
//         expect(selectInstance).toBeTruthy();
//     }));

//     it('should set the selected models', async(() => {
//         let pass = 0;
//         const fixture = TestBed.createComponent(DejaSelectByModelContainerComponent);
//         const selectDebugElement = fixture.debugElement.query(By.directive(DejaSelectComponent));
//         const selectInstance = selectDebugElement.componentInstance as DejaSelectComponent;

//         observeModelViewPort$(fixture)
//             .debounceTime(10)
//             .subscribe((vp) => {
//                 // Bind view port
//                 fixture.detectChanges();
//                 const selectedModels = fixture.debugElement.queryAll(By.css('deja-select > .deja-listcontainer > .listitem.selected'));
//                 const models = vp.visibleItems.map((item: IItemBase) => item.model);
//                 const selectedItems = vp.items.filter((item: IItemBase) => item.selected);

//                 switch (++pass) {
//                     case 1:
//                         // Selection from HTML
//                         expect(selectedItems.length).toBe(3);
//                         // Set selected models
//                         selectInstance.selectedModels = [models[vp.startIndex], models[vp.endIndex]];
//                         expect(selectInstance.selectedModels).toBeDefined();
//                         expect(selectInstance.selectedModels.length).toBe(2);
//                         selectInstance.refreshViewPort();
//                         fixture.detectChanges();
//                         break;

//                     case 2:
//                         // Check selected models
//                         expect(selectedModels.length).toBe(2);
//                         expect(selectedItems.length).toBe(2);
//                         // Clear selection
//                         selectInstance.selectedModels = null;
//                         selectInstance.refreshViewPort();
//                         fixture.detectChanges();
//                         break;

//                     case 3:
//                         // Check no selected
//                         expect(selectedModels.length).toBe(0);
//                         expect(selectedItems.length).toBe(0);
//                         // Single select list
//                         selectInstance.multiSelect = false;
//                         fixture.detectChanges();
//                         // Set selected model
//                         selectInstance.selectedModel = models[5];
//                         expect(selectInstance.selectedModel).toBe(models[5]);
//                         selectInstance.refreshViewPort();
//                         fixture.detectChanges();
//                         break;

//                     case 4:
//                         // Check selected item
//                         expect(selectedModels.length).toBe(1);
//                         expect(selectedItems.length).toBe(1);
//                         // Clear selection
//                         selectInstance.selectedModel = null;
//                         selectInstance.refreshViewPort();
//                         fixture.detectChanges();
//                         break;

//                     case 5:
//                         // Check no selected
//                         expect(selectedModels.length).toBe(0);
//                         expect(selectedItems.length).toBe(0);
//                         // Set selection by value
//                         selectInstance.value = models[4];
//                         expect((selectInstance.value as IItemBase).model).toBe(models[4]);
//                         selectInstance.refreshViewPort();
//                         fixture.detectChanges();
//                         break;

//                     case 6:
//                         // Check selected item
//                         expect(selectedModels.length).toBe(1);
//                         expect(selectedItems.length).toBe(1);
//                         // Clear selection
//                         selectInstance.selectedModel = null;
//                         selectInstance.refreshViewPort();
//                         fixture.detectChanges();
//                         break;

//                     default:
//                         // Check no selected
//                         expect(selectedModels.length).toBe(0);
//                         expect(selectedItems.length).toBe(0);
//                 }
//             });

//         fixture.detectChanges();
//     }));

//     it('should flag pending keyboard navigation', async(() => {
//         const fixture = TestBed.createComponent(DejaSelectByModelContainerComponent);
//         const selectDebugElement = fixture.debugElement.query(By.directive(DejaSelectComponent));
//         const selectInstance = selectDebugElement.componentInstance as DejaSelectComponent;
//         let listElement: HTMLElement;

//         observeModelViewPort$(fixture)
//             .debounceTime(100)
//             .do(() => expect(selectInstance.keyboardNavigation()).toBeTruthy())
//             .delay(1000)
//             .subscribe(() => expect(selectInstance.keyboardNavigation()).toBeFalsy());

//         const sendKeyDown = (code: string, shiftKey?: boolean, ctrlKey?: boolean) => {
//             const event = new KeyboardEvent('keydown', {
//                 code: code,
//                 shiftKey: shiftKey,
//                 ctrlKey: ctrlKey
//             } as KeyboardEventInit);
//             listElement.dispatchEvent(event);
//         };

//         fixture.detectChanges();
//         listElement = selectInstance.listElement;
//         sendKeyDown('DownArrow');
//     }));

//     it('should navigate with the keyboard', async(() => {
//         let pass = 0;
//         const fixture = TestBed.createComponent(DejaSelectByModelContainerComponent);
//         const selectDebugElement = fixture.debugElement.query(By.directive(DejaSelectComponent));
//         const selectInstance = selectDebugElement.componentInstance as DejaSelectComponent;
//         let listElement: HTMLElement;

//         const sendKeyDown = (code: string, shiftKey?: boolean, ctrlKey?: boolean) => {
//             const event = new KeyboardEvent('keydown', {
//                 code: code,
//                 shiftKey: shiftKey,
//                 ctrlKey: ctrlKey
//             } as KeyboardEventInit);
//             listElement.dispatchEvent(event);
//             selectInstance.refreshViewPort();
//             fixture.detectChanges();
//         };

//         observeModelViewPort$(fixture)
//             .debounceTime(100)
//             .subscribe((vp) => {
//                 fixture.detectChanges();
//                 const selectedElements = fixture.debugElement.queryAll(By.css('deja-select > .deja-listcontainer > .listitem.selected'));
//                 const currentElement = fixture.debugElement.query(By.css('deja-select > .deja-listcontainer > .listitem[current="true"]'));
//                 const selectedItems = vp.items.filter((item: IItemBase) => item.selected);

//                 switch (++pass) {
//                     case 1:
//                         // Selection from HTML
//                         expect(vp.items.filter((item: IItemBase) => item.selected).length).toBe(3);
//                         // Clear selection
//                         selectInstance.selectedModel = null;
//                         selectInstance.refreshViewPort();
//                         fixture.detectChanges();
//                         break;

//                     case 2:
//                         // Check no selected
//                         expect(selectedElements.length).toBe(0);
//                         expect(selectedItems.length).toBe(0);
//                         // Select first line by keydown
//                         sendKeyDown('DownArrow');
//                         break;

//                     case 3:
//                         // Check selection
//                         expect(selectedElements.length).toBe(1);
//                         expect(selectedItems.length).toBe(1);
//                         expect(selectedElements[0] && selectedElements[0].attributes.flat).toBe('0');
//                         // Select second line by keydown
//                         sendKeyDown('DownArrow');
//                         break;

//                     case 4:
//                         // Check selection
//                         expect(selectedElements.length).toBe(1);
//                         expect(selectedItems.length).toBe(1);
//                         expect(selectedElements[0] && selectedElements[0].attributes.flat).toBe('1');
//                         // Select first line by keyup
//                         sendKeyDown('UpArrow');
//                         break;

//                     case 5:
//                         // Check selection
//                         expect(selectedElements.length).toBe(1);
//                         expect(selectedItems.length).toBe(1);
//                         expect(selectedElements[0] && selectedElements[0].attributes.flat).toBe('0');
//                         // Select first and second lines by shift+keydown
//                         sendKeyDown('DownArrow', true);
//                         break;

//                     case 6:
//                         // Check selection
//                         expect(selectedElements.length).toBe(2);
//                         expect(selectedItems.length).toBe(2);
//                         expect(selectedElements[0] && selectedElements[0].attributes.flat).toBe('0');
//                         expect(selectedElements[1] && selectedElements[1].attributes.flat).toBe('1');
//                         // Keep selection, but pass current line to the third line
//                         sendKeyDown('DownArrow', false, true);
//                         break;

//                     case 7:
//                         // Check selection
//                         expect(selectedElements.length).toBe(2);
//                         expect(selectedItems.length).toBe(2);
//                         expect(selectedElements[0] && selectedElements[0].attributes.flat).toBe('0');
//                         expect(selectedElements[1] && selectedElements[1].attributes.flat).toBe('1');
//                         // Check current item
//                         expect(currentElement.attributes.flat).toBe('2');
//                         // Select third line only
//                         sendKeyDown('Space');
//                         break;

//                     case 8:
//                         // Check selection
//                         expect(selectedElements.length).toBe(1);
//                         expect(selectedItems.length).toBe(1);
//                         expect(selectedElements[0] && selectedElements[0].attributes.flat).toBe('2');
//                         // Select first line with Home
//                         sendKeyDown('Home', true);
//                         break;

//                     case 9:
//                         // Check selection
//                         expect(selectedElements.length).toBe(1);
//                         expect(selectedItems.length).toBe(1);
//                         expect(selectedElements[0] && selectedElements[0].attributes.flat).toBe('0');
//                         // Select last line with End
//                         sendKeyDown('End');
//                         break;

//                     case 10:
//                         // Check selection
//                         expect(selectedElements.length).toBe(1);
//                         expect(selectedItems.length).toBe(1);
//                         expect(selectedElements[0] && selectedElements[0].attributes.flat).toBe('1999');
//                         // Select the two last lines with Shift+PageUp
//                         sendKeyDown('UpArrow', true);
//                         break;

//                     case 11:
//                         // Check selection
//                         expect(selectedElements.length).toBe(2);
//                         expect(selectedItems.length).toBe(2);
//                         expect(selectedElements[0] && selectedElements[0].attributes.flat).toBe('1998');
//                         expect(selectedElements[1] && selectedElements[1].attributes.flat).toBe('1999');
//                         // Keep selection, but pass current line to the first line
//                         sendKeyDown('Home', false, true);
//                         break;

//                     case 12:
//                         // Check selection
//                         expect(selectedElements.length).toBe(0);
//                         expect(selectedItems.length).toBe(2);
//                         // Check current item
//                         expect(currentElement && currentElement.attributes.flat).toBe('0');
//                         // Select line 11 (PageSize=10)
//                         sendKeyDown('PageDown');
//                         break;

//                     case 13:
//                         // Check selection
//                         expect(selectedElements.length).toBe(1);
//                         expect(selectedItems.length).toBe(1);
//                         expect(selectedElements[0] && selectedElements[0].attributes.flat).toBe('10');
//                         // Check current item
//                         expect(currentElement && currentElement.attributes.flat).toBe('10');
//                         // Select from line 11 to last line
//                         sendKeyDown('End', true);
//                         break;

//                     case 14:
//                         // Check selection
//                         expect(selectedElements.length).toBe(vp.visibleItems.length);
//                         expect(selectedItems.length).toBe(vp.items.length - 10);
//                         // Check current item
//                         expect(currentElement && currentElement.attributes.flat).toBe('1999');
//                         // Select first line with Home
//                         sendKeyDown('Home');
//                         break;

//                     case 15:
//                         // Check selection
//                         expect(selectedElements.length).toBe(1);
//                         expect(selectedItems.length).toBe(1);
//                         // Check current item
//                         expect(currentElement && currentElement.attributes.flat).toBe('0');
//                         // Select until line 11
//                         sendKeyDown('PageDown', true);
//                         break;

//                     case 16:
//                         // Check selection
//                         expect(selectedElements.length).toBe(11);
//                         expect(selectedItems.length).toBe(11);
//                         // Check current item
//                         expect(currentElement && currentElement.attributes.flat).toBe('10');
//                         // Select next line only
//                         sendKeyDown('DownArrow');
//                         break;

//                     case 17:
//                         // Check selection
//                         expect(selectedElements.length).toBe(1);
//                         expect(selectedItems.length).toBe(1);
//                         // Check current item
//                         expect(currentElement && currentElement.attributes.flat).toBe('11');
//                         // Select second line with PageUp
//                         sendKeyDown('PageUp');
//                         break;

//                     case 18:
//                         // Check selection
//                         expect(selectedElements.length).toBe(1);
//                         expect(selectedItems.length).toBe(1);
//                         // Check current item
//                         expect(currentElement && currentElement.attributes.flat).toBe('1');
//                         // Select last line
//                         sendKeyDown('End');
//                         break;

//                     case 19:
//                         // Check selection
//                         expect(selectedElements.length).toBe(1);
//                         expect(selectedItems.length).toBe(1);
//                         expect(selectedElements[0] && selectedElements[0].attributes.flat).toBe('1999');
//                         // Check current item
//                         expect(currentElement && currentElement.attributes.flat).toBe('1999');
//                         // Select from line 11 to last line
//                         sendKeyDown('PageUp', true);
//                         break;

//                     case 20:
//                         // Check selection
//                         expect(selectedElements.length).toBe(11);
//                         expect(selectedItems.length).toBe(11);
//                         // Select first line
//                         sendKeyDown('Home');
//                         break;

//                     case 21:
//                         // Check selection
//                         expect(selectedElements.length).toBe(1);
//                         expect(selectedItems.length).toBe(1);
//                         expect(selectedElements[0] && selectedElements[0].attributes.flat).toBe('0');
//                         // Check current item
//                         expect(currentElement && currentElement.attributes.flat).toBe('0');
//                         // Toggle first line selection with ctrl
//                         sendKeyDown('Space', false, true);
//                         break;

//                     case 22:
//                         // Check selection
//                         expect(selectedElements.length).toBe(0);
//                         expect(selectedItems.length).toBe(0);
//                         // Check current item
//                         expect(currentElement && currentElement.attributes.flat).toBe('0');
//                         // Select first line with enter in single select
//                         selectInstance.multiSelect = false;
//                         fixture.detectChanges();
//                         sendKeyDown('Enter');
//                         break;

//                     default:
//                         expect(selectedElements.length).toBe(1);
//                         expect(selectedItems.length).toBe(1);
//                         expect(selectedElements[0] && selectedElements[0].attributes.flat).toBe('0');
//                         expect(currentElement && currentElement.attributes.flat).toBe('0');

//                 }
//             });

//         fixture.detectChanges();
//         listElement = selectInstance.listElement;
//     }));

//     it('should refresh view port if windows is resized', async(() => {
//         let pass = 0;
//         const fixture = TestBed.createComponent(DejaSelectByModelContainerComponent);

//         observeModelViewPort$(fixture)
//             .debounceTime(100)
//             .subscribe((vp) => {
//                 fixture.detectChanges();

//                 switch (++pass) {
//                     case 1:
//                         const event = new Event('resize', {});
//                         window.dispatchEvent(event);
//                         break;

//                     default:
//                         expect(vp.visibleItems.length).toBe(12);

//                 }
//             });

//         fixture.detectChanges();
//     }));
// });

describe('DejaSelectByOptionsContainerComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                DejaSelectByOptionsContainerComponent,
            ],
            imports: [
                BrowserAnimationsModule,
                CommonModule,
                FormsModule,
                NoConflictStyleCompatibilityMode,
                DejaSelectModule,
                DejaItemModule,
            ],
        }).compileComponents();
    }));

    const observeOptionsViewPort$ = (fixture: ComponentFixture<DejaSelectByOptionsContainerComponent>) => {
        const selectDebugElement = fixture.debugElement.query(By.directive(DejaSelectComponent));
        const viewPortService = selectDebugElement.injector.get(ViewPortService) as ViewPortService;

        const selectInstance = selectDebugElement.componentInstance as DejaSelectComponent;

        Observable.from(selectInstance.dropDownVisibleChange)
            .first()
            .subscribe(() => fixture.detectChanges());

        return Observable.from(viewPortService.viewPortResult$)
            .filter((result) => result.viewPortSize > 0);
    };

    it('should create the component', async(() => {
        const fixture = TestBed.createComponent(DejaSelectByOptionsContainerComponent);
        const selectDebugElement = fixture.debugElement.query(By.directive(DejaSelectComponent));
        const selectInstance = selectDebugElement.componentInstance as DejaSelectComponent;
        const sl = selectInstance as any;

        observeOptionsViewPort$(fixture)
            .debounceTime(100)
            .subscribe(() => {
                fixture.detectChanges();

                const items = fixture.debugElement.queryAll(By.css('.deja-overlay-container > .cdk-overlay-pane > .deja-listcontainer > .listitem'));
                expect(items.length).toBe(12);
            });

        fixture.detectChanges();
        expect(selectInstance).toBeTruthy();

        sl.showDropDown();
        fixture.detectChanges();
    }));
});

    //     it('should filter and select with the keyboard', async(() => {
    //         let pass = 0;
    //         const fixture = TestBed.createComponent(DejaSelectByOptionsContainerComponent);
    //         const selectDebugElement = fixture.debugElement.query(By.directive(DejaSelectComponent));
    //         const selectInstance = selectDebugElement.componentInstance as DejaSelectComponent;
    //         let listElement: HTMLElement;

    //         const sendKeyUp = (code: string) => {
    //             const event = new KeyboardEvent('keyup', {
    //                 code: `Key${code.toUpperCase()}`,
    //                 key: code,
    //             } as KeyboardEventInit);
    //             listElement.dispatchEvent(event);
    //             selectInstance.refreshViewPort();
    //             fixture.detectChanges();
    //         };

    //         observeOptionsViewPort$(fixture)
    //             .debounceTime(450) // Wait for the clear filter flag
    //             .subscribe((vp) => {
    //                 fixture.detectChanges();
    //                 const selectedElements = fixture.debugElement.queryAll(By.css('deja-select > .deja-listcontainer > .listitem.selected'));
    //                 const currentElement = fixture.debugElement.query(By.css('deja-select > .deja-listcontainer > .listitem[current="true"]'));
    //                 const selectedItems = vp.items.filter((item: IItemBase) => item.selected);

    //                 switch (++pass) {
    //                     case 1:
    //                         // Check selected and current
    //                         expect(selectedElements.length).toBe(0);
    //                         expect(selectedItems.length).toBe(0);
    //                         // Search first started with c
    //                         sendKeyUp('c');
    //                         break;

    //                     case 2:
    //                         // Check selected and current
    //                         expect(selectedElements.length).toBe(0);
    //                         expect(selectedItems.length).toBe(0);
    //                         expect(currentElement && currentElement.attributes.flat).toBe('2');
    //                         // Search next
    //                         sendKeyUp('c');
    //                         break;

    //                     case 3:
    //                         // Check selected and current
    //                         expect(selectedElements.length).toBe(0);
    //                         expect(selectedItems.length).toBe(0);
    //                         expect(currentElement && currentElement.attributes.flat).toBe('3');
    //                         // Search next
    //                         sendKeyUp('c');
    //                         break;

    //                     case 4:
    //                         // Check selected and current
    //                         expect(selectedElements.length).toBe(0);
    //                         expect(selectedItems.length).toBe(0);
    //                         expect(currentElement && currentElement.attributes.flat).toBe('4');
    //                         // Search next
    //                         sendKeyUp('c');
    //                         break;

    //                     case 5:
    //                         // Check selected and current
    //                         expect(selectedElements.length).toBe(0);
    //                         expect(selectedItems.length).toBe(0);
    //                         expect(currentElement && currentElement.attributes.flat).toBe('5');
    //                         // Search next
    //                         sendKeyUp('c');
    //                         break;

    //                     case 6:
    //                         // Check selected and current
    //                         expect(selectedElements.length).toBe(0);
    //                         expect(selectedItems.length).toBe(0);
    //                         expect(currentElement && currentElement.attributes.flat).toBe('2');
    //                         // Enable search area
    //                         selectInstance.searchArea = true;
    //                         fixture.detectChanges();
    //                         // Filter test
    //                         (<any>selectInstance).setQuery$.next('c');
    //                         selectInstance.refreshViewPort();
    //                         fixture.detectChanges();
    //                         break;

    //                     default:
    //                         expect(vp.visibleItems.length).toBe(5);

    //                 }
    //             });

    //         fixture.detectChanges();
    //         listElement = selectInstance.listElement;
    //     }));

    //     it('should select with the mouse', async(() => {
    //         let pass = 0;
    //         const fixture = TestBed.createComponent(DejaSelectByOptionsContainerComponent);
    //         const selectDebugElement = fixture.debugElement.query(By.directive(DejaSelectComponent));
    //         const selectInstance = selectDebugElement.componentInstance as DejaSelectComponent;
    //         let listElement: DebugElement;

    //         const sendMouseClick = (element: DebugElement, shiftKey?: boolean, ctrlKey?: boolean, upElement?: DebugElement) => {
    //             // Simulate a mouse click
    //             const event = document.createEvent('MouseEvents') as MouseEvent;
    //             event.initMouseEvent('mousedown', true, true, document.defaultView, 0, 0, 0, 0, 0, ctrlKey, false, shiftKey, false, 0, listElement.nativeElement);
    //             element.nativeElement.dispatchEvent(event);
    //             fixture.detectChanges();
    //             Observable.timer(100)
    //                 .first()
    //                 .subscribe(() => {
    //                     const upEvent = document.createEvent('MouseEvents') as MouseEvent;
    //                     upEvent.initMouseEvent('mouseup', true, true, document.defaultView, 0, 0, 0, 0, 0, ctrlKey, false, shiftKey, false, 0, listElement.nativeElement);
    //                     (upElement || element).nativeElement.dispatchEvent(upEvent);
    //                     selectInstance.refreshViewPort();
    //                     fixture.detectChanges();
    //                 });
    //         };

    //         observeOptionsViewPort$(fixture)
    //             .debounceTime(10)
    //             .subscribe((vp) => {
    //                 fixture.detectChanges();
    //                 const displayedElements = fixture.debugElement.queryAll(By.css('.deja-overlay-container > .cdk-overlay-pane > .deja-listcontainer > .listitem'));
    //                 const selectedElements = fixture.debugElement.queryAll(By.css('deja-select > .deja-listcontainer > .listitem.selected'));
    //                 const currentElement = fixture.debugElement.query(By.css('deja-select > .deja-listcontainer > .listitem[current="true"]'));
    //                 const selectedItems = vp.items.filter((item: IItemBase) => item.selected);

    //                 switch (++pass) {
    //                     case 1:
    //                         // Check selected and current
    //                         expect(selectedElements.length).toBe(0);
    //                         expect(selectedItems.length).toBe(0);
    //                         // Check flags
    //                         expect(selectInstance.isMultiSelect).toBe(true);
    //                         // Simulate click on first element on disabled
    //                         selectInstance.disabled = true;
    //                         fixture.detectChanges();
    //                         sendMouseClick(displayedElements[1]);
    //                         break;

    //                     case 2:
    //                         // Check selected and current
    //                         expect(selectedElements.length).toBe(0);
    //                         expect(selectedItems.length).toBe(0);
    //                         // Simulate click on first element on disabled
    //                         selectInstance.disabled = false;
    //                         fixture.detectChanges();
    //                         sendMouseClick(displayedElements[1]);
    //                         break;

    //                     case 3:
    //                         // Check selected and current
    //                         expect(selectedElements.length).toBe(1);
    //                         expect(selectedItems.length).toBe(1);
    //                         expect(currentElement && currentElement.attributes.flat).toBe('1');
    //                         // Simulate click with ctrl
    //                         sendMouseClick(displayedElements[4], false, true);
    //                         break;

    //                     case 4:
    //                         // Check selected and current
    //                         expect(selectedElements.length).toBe(2);
    //                         expect(selectedItems.length).toBe(2);
    //                         expect(currentElement && currentElement.attributes.flat).toBe('4');
    //                         // Simulate click with shift
    //                         sendMouseClick(displayedElements[6], true);
    //                         break;

    //                     case 5:
    //                         // Check selected and current
    //                         expect(selectedElements.length).toBe(3);
    //                         expect(selectedItems.length).toBe(3);
    //                         expect(currentElement && currentElement.attributes.flat).toBe('4');
    //                         // Click outside must keep the selection
    //                         sendMouseClick(listElement);
    //                         break;

    //                     case 6:
    //                         // Check selected and current
    //                         expect(selectedElements.length).toBe(3);
    //                         expect(selectedItems.length).toBe(3);
    //                         expect(currentElement && currentElement.attributes.flat).toBe('4');
    //                         // Switch to single select
    //                         selectInstance.multiSelect = false;
    //                         expect(selectInstance.isMultiSelect).toBe(false);
    //                         fixture.detectChanges();
    //                         // Click first line
    //                         sendMouseClick(displayedElements[0]);
    //                         break;

    //                     case 7:
    //                         // Check selected and current
    //                         expect(selectedElements.length).toBe(1);
    //                         expect(selectedItems.length).toBe(1);
    //                         expect(currentElement && currentElement.attributes.flat).toBe('0');
    //                         // Simulate click with ctrl
    //                         sendMouseClick(displayedElements[4], false, true);
    //                         break;

    //                     case 8:
    //                         // Check selected and current
    //                         expect(selectedElements.length).toBe(1);
    //                         expect(selectedItems.length).toBe(1);
    //                         expect(currentElement && currentElement.attributes.flat).toBe('4');
    //                         // Simulate click with shift
    //                         sendMouseClick(displayedElements[6], true);
    //                         break;

    //                     default:
    //                         // Check selected and current
    //                         expect(selectedElements.length).toBe(1);
    //                         expect(selectedItems.length).toBe(1);
    //                         expect(currentElement && currentElement.attributes.flat).toBe('6');

    //                 }
    //             });

    //         fixture.detectChanges();
    //         listElement = fixture.debugElement.query(By.css('deja-select > .deja-listcontainer'));
    //     }));
