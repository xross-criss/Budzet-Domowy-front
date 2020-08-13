import {Observable} from 'rxjs';
import {Cashflow} from '../model/Cashflow';
import {Injectable} from '@angular/core';
import {ApiController} from './api.controller';

@Injectable({providedIn: 'root'})
export class CashflowController {

  constructor(private apiController: ApiController) {
  }

  public getCashflowList(): Observable<Cashflow> {
    return this.apiController.get<Cashflow>('cashflow');
  }

  public getCashflowListWithCategory(category: any):Observable<Cashflow[]> {
    return this.apiController.get<Cashflow[]>('cashflow', {cat: 'category'});
  }

}
