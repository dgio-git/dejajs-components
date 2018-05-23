/*
 *  @license
 *  Copyright Hôpitaux Universitaires de Genève. All Rights Reserved.
 *
 *  Use of this source code is governed by an Apache-2.0 license that can be
 *  found in the LICENSE file at https://github.com/DSI-HUG/dejajs-components/blob/master/LICENSE
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DejaAccordionModule } from '@deja-js/component';
import { DejaMarkdownModule } from '../../component/markdown/index';
import { DejaAccordionDemoComponent } from './accordion-demo.component';
import { routing } from './accordion-demo.routes';

@NgModule({
    declarations: [DejaAccordionDemoComponent],
    exports: [DejaAccordionDemoComponent],
    imports: [
        CommonModule,
        MatCardModule,
        MatTabsModule,
        MatToolbarModule,
        DejaAccordionModule,
        DejaMarkdownModule,
        routing,
    ],
    providers: [
    ],
})
export class DejaAccordionDemoModule { }
