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
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DejaOverlayModule } from '@deja-js/component/overlay';
import { DejaMarkdownModule } from '../../component/markdown/index';
import { DejaOverlayDemoComponent } from './overlay-demo';
import { routing } from './overlay-demo.routes';

@NgModule({
    declarations: [DejaOverlayDemoComponent],
    exports: [DejaOverlayDemoComponent],
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatTabsModule,
        MatToolbarModule,
        DejaOverlayModule,
        DejaMarkdownModule,
        routing,
    ],
    providers: [
    ],
})
export class DejaOverlayDemoModule { }
