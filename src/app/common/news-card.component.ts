/*
 *  @license
 *  Copyright Hôpitaux Universitaires de Genève. All Rights Reserved.
 *
 *  Use of this source code is governed by an Apache-2.0 license that can be
 *  found in the LICENSE file at https://github.com/DSI-HUG/dejajs-components/blob/master/LICENSE
 */

import { Component, EventEmitter, Input, Output } from '@angular/core';

import { News } from './news.model';

@Component({
    selector: 'news-card',
    styleUrls: ['./news-card.component.scss'],
    templateUrl: 'news-card.component.html'
})
export class NewsCardComponent {
    @Input()
    public item: News;

    @Output()
    public readonly imageLoaded = new EventEmitter();
}
