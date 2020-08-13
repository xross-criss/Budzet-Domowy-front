import {Observable} from 'rxjs';
import {Household} from '../model/Household';
import {Injectable} from '@angular/core';
import {ApiController} from './api.controller';

@Injectable({providedIn: 'root'})
export class HouseholdController {

  constructor(private apiController: ApiController) {
  }

  public getHousehold(): Observable<Household> {
    return this.apiController.get<Household>('household');
  }

  public updateHousehold(household:Household): Observable<Household> {
    return this.apiController.post<Household>('household', household);
  }

}
