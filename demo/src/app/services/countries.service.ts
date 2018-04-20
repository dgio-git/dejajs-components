/*
 *  @license
 *  Copyright Hôpitaux Universitaires de Genève. All Rights Reserved.
 *
 *  Use of this source code is governed by an Apache-2.0 license that can be
 *  found in the LICENSE file at https://github.com/DSI-HUG/dejajs-components/blob/master/LICENSE
 */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Color, MaterialColors } from '@deja-js/component';
import { ObjectMapper } from 'json-object-mapper';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishLast';
import 'rxjs/add/operator/reduce';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

export class Country {
    public displayName: string = void 0;
    public naqme: string = void 0;
    public code: string = void 0;
    public color: string = void 0;
    public equals: (item: Country) => boolean;
}

@Injectable()
export class CountriesService {
    private countriesDic = {} as { [code: string]: Country };
    private materialColors: Color[];

    constructor(private httpClient: HttpClient, materialColors: MaterialColors) {
        this.materialColors = materialColors.getPalet('700');
    }

    public getCountryByIndex$(index: number) {
        return this.getCountries$()
            .map((countries) => countries[index % countries.length]);
    }

    public getCountryByCode$(code: string) {
        return Observable.of(this.countriesDic[code]);
    }

    public getCountries$(query?: string, number?: number): Observable<Country[]> {
        let recordCount = number || 0;
        return this.httpClient.get('assets/datas/countries.json', { })
            .switchMap((datas: any) => datas.data as any[])
            .map((json) => ObjectMapper.deserialize(Country, json))
            .reduce((acc, country) => {
                acc.push(country);
                return acc;
            }, [])
            .map((countries) => {
                let colorIndex = 0;
                countries.forEach((country) => {
                    country.displayName = country.naqme;
                    country.color = this.materialColors[colorIndex].toHex();
                    this.countriesDic[country.code] = country;

                    if (++colorIndex >= this.materialColors.length) {
                        colorIndex = 0;
                    }
                });
                return countries;
            })
            .publishLast()
            .refCount()
            .map((countries) => {
                if (query) {
                    const sr = new RegExp(`^${query}`, 'i');
                    const sc = new RegExp(`^(?!${query}).*(${query})`, 'i');
                    const result = countries.filter((z) => sr.test(z.naqme));
                    countries.forEach((z) => {
                        if (sc.test(z.naqme)) {
                            result.push(z);
                        }
                    });
                    return result;
                } else {
                    return countries;
                }
            })
            .map((countries) => {
                let returnCountries = countries;
                if (recordCount) {
                    while (recordCount > 0) {
                        returnCountries = returnCountries.concat(countries);
                        recordCount -= countries.length;
                    }
                }
                return returnCountries;
            });
    }
}
