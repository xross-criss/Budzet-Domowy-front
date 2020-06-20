import {Observable} from 'rxjs';
import {Household} from '../model/Household';
import {Injectable} from '@angular/core';
import {ApiService} from './api.service';

@Injectable({providedIn: 'root'})
export class HouseholdService {

  constructor(private apiService: ApiService) {
  }

  public getHousehold(): Observable<Household> {
    return this.apiService.get<Household>('household');
  }

  public updateHousehold(household:Household): Observable<Household> {
    return this.apiService.post<Household>('household', household);
  }

}
