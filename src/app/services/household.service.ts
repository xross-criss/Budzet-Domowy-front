import {Observable} from 'rxjs';
import {Household} from '../model/Household';
import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {CacheService} from './cache.service';

@Injectable({providedIn: 'root'})
export class HouseholdService {

    constructor(
        private apiService: ApiService,
        private cacheService: CacheService,
    ) {
    }

    public getHousehold(): Observable<Household> {
        return this.cacheService.getCachedObservable(
            'household',
            () => this.apiService.get<Household>('household'),
            this
        );
    }

    public updateHousehold(household: Household): Observable<Household> {
        return this.apiService.post<Household>('household', household);
    }

}
