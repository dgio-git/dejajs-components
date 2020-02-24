/*
 *  @license
 *  Copyright Hôpitaux Universitaires de Genève. All Rights Reserved.
 *
 *  Use of this source code is governed by an Apache-2.0 license that can be
 *  found in the LICENSE file at https://github.com/DSI-HUG/dejajs-components/blob/master/LICENSE
 */

import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { ChangeDetectorRef, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { Destroy, MediaService } from '@deja-js/core';
import { from } from 'rxjs';
import { filter, map, mergeMap, takeUntil } from 'rxjs/operators';
import { DejaSidenavService } from './sidenav.service';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'deja-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss']
})
export class DejaSidenavComponent extends Destroy implements OnInit {
    @Input()
    public set showToolbar(value: boolean | string) {
        this._showToolbar = coerceBooleanProperty(value);
    }

    @Input()
    public headerText = 'TITLE';

    @Input()
    public headerIcon = 'face';

    public title: string;
    public mode = 'side';
    public _showToolbar = false;

    constructor(
        public sidenavService: DejaSidenavService,
        private mediaService: MediaService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private changeDetectorRef: ChangeDetectorRef,
    ) {
        super();

        from(this.mediaService.mediaChanged$).pipe(
            takeUntil(this.destroyed$)
        ).subscribe(alias => {
            this.sidenavService.hidden = alias === 'xs';
            this.sidenavService.opened = alias === 'lg';
            this.sidenavService.mode = alias === 'xs' ? 'over' : 'side';
            this.changeDetectorRef.markForCheck();
        });
    }

    public ngOnInit() {
        // Initialize
        this.title = this.getActivatedRouteLastChild().data[`title`];

        // Listen for future route changes
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd),
            map(() => this.activatedRoute),
            map(route => {
                while (route.firstChild) {
                    route = route.firstChild;
                }
                return route;
            }),
            filter(route => route.outlet === 'primary'),
            mergeMap(route => route.data),
            takeUntil(this.destroyed$)
        ).subscribe(event => this.title = event[`title`]);
    }

    private getActivatedRouteLastChild(): ActivatedRouteSnapshot {
        let route: ActivatedRouteSnapshot = this.activatedRoute.snapshot.root;
        while (route.firstChild) {
            route = route.firstChild;
        }
        return route;
    }
}
