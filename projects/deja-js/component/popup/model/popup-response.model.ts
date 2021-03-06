/*
 *  @license
 *  Copyright Hôpitaux Universitaires de Genève. All Rights Reserved.
 *
 *  Use of this source code is governed by an Apache-2.0 license that can be
 *  found in the LICENSE file at https://github.com/DSI-HUG/dejajs-components/blob/master/LICENSE
 */
import { DejaPopupAction } from './popup-action.model';
import { DejaPopupBase } from './popup-base.class';

export class DejaPopupReponse {

    public acceptedActionNames = ['check', 'ok', 'yes', 'confirm', 'save'];
    public lastAction: DejaPopupAction | string;

    public constructor(
        public resp: unknown,
        public componentInstance: DejaPopupBase
    ) {
        if (componentInstance?.actionSelected) {
            this.lastAction = this.componentInstance.actionSelected;
        } else {
            this.lastAction = new DejaPopupAction('cancel');
        }
    }

    public get accepted(): boolean {
        return this.acceptedActionNames.some((nameOk: string) => typeof this.lastAction === 'string' ? nameOk === this.lastAction : nameOk === this.lastAction.name);
    }
}
