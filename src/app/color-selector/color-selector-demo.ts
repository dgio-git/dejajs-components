/*
 *  @license
 *  Copyright Hôpitaux Universitaires de Genève. All Rights Reserved.
 *
 *  Use of this source code is governed by an Apache-2.0 license that can be
 *  found in the LICENSE file at https://github.com/DSI-HUG/dejajs-components/blob/master/LICENSE
 */

import { Component } from '@angular/core';
import { IColorEvent } from '@deja-js/component/color-selector';
import { Color, MaterialColors } from '@deja-js/core';

@Component({
    selector: 'deja-color-selector-demo',
    styleUrls: ['./color-selector-demo.scss'],
    templateUrl: './color-selector-demo.html',
})
export class DejaColorSelectorDemoComponent {
    public tabIndex = 1;

    public selectedColor = new Color(233, 30, 99);
    public invalidColor = Color.fromHex('#D02D06');
    public hoveredColor: Color;

    constructor(public materialColors: MaterialColors) { }

    public onColorPickerHover(event: IColorEvent) {
        this.hoveredColor = event.color;
    }

    public onColorPickerChange(event: IColorEvent) {
        this.hoveredColor = event.color;
    }
}
