import {Observable, of} from 'rxjs';
import {Cashflow} from '../model/Cashflow';
import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Report} from '../model/Report';
import {tap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class CacheService {

    private cache: any;
    // private pending: any;

    constructor() {
        this.clear();
    }

    public get(key: string): any {
        return this.cache[key];
    }

    public put(key: string, data: any): void {
        this.cache[key] = data;
    }

    public clear(): void {
        this.cache = {};
        // this.pending = {};
    }

    // public putPending(key: string, data: Observable<any>): Observable<any> {
    //     return this.pending[key] = data;
    // }

    public getCachedObservable<T>(key: string, supplier: () => Observable<T>, thisThis: any): Observable<T> {
        const cached: T = this.get(key) as T;
        if (cached === null || cached === undefined) {
            return supplier.bind(thisThis)().pipe(tap(data => this.put(key, data)));
        }
        return of(cached);
    }

    // public getCachedObservable<T>(key: string, supplier: () => Observable<T>, thisThis: any, force: boolean = true): Observable<T> {
    //     const cached: T = this.get(key) as T;
    //     if (ObjectUtil.isNullOrUndefined(cached) || force) {
    //         const cachedPending: Observable<T> = this.getPending(key);
    //         if (ObjectUtil.isNullOrUndefined(cachedPending)) {
    //             const ret: Subject<T> = new ReplaySubject<T>(1);
    //             this.putPending(key, ret);
    //             supplier.bind(thisThis)().pipe(tap(data => this.put(key, data))).subscribe(data => {
    //                 ret.next(data);
    //                 ret.complete();
    //             });
    //             return ret;
    //         }
    //         return cachedPending;
    //     } else {
    //         return of(cached);
    //     }
    // }

}
