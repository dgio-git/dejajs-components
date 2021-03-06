/*
 *  @license
 *  Copyright Hôpitaux Universitaires de Genève. All Rights Reserved.
 *
 *  Use of this source code is governed by an Apache-2.0 license that can be
 *  found in the LICENSE file at https://github.com/DSI-HUG/dejajs-components/blob/master/LICENSE
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DejaCircularPickerComponent } from './circular-picker.component';

@NgModule({
    declarations: [DejaCircularPickerComponent],
    exports: [DejaCircularPickerComponent],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class DejaCircularPickerModule { }

export * from './circular-picker.component';
