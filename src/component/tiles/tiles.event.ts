/*
 *  @license
 *  Copyright Hôpitaux Universitaires de Genève. All Rights Reserved.
 *
 *  Use of this source code is governed by an Apache-2.0 license that can be
 *  found in the LICENSE file at https://github.com/DSI-HUG/dejajs-components/blob/master/LICENSE
 */

import { IDejaCancelableEvent } from '../../common/core/events/cancelable-event.interface';
import { DejaTile } from './tile.class';

export interface IDejaTilesEvent extends CustomEvent {
    tiles: DejaTile[];
}

export interface IDejaTilesCancelableEvent extends IDejaCancelableEvent {
    tiles: DejaTile[];
}

export interface IDejaTilesRemoveEvent extends IDejaTilesCancelableEvent {
    removed: DejaTile[];
}

export interface IDejaTilesAddEvent extends IDejaTilesCancelableEvent {
    added: DejaTile[];
}

export interface IDejaTilesModelEvent extends IDejaTilesEvent {
    removed?: DejaTile[];
    added?: DejaTile[];
}
