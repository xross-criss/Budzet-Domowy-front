import {Observable} from 'rxjs';
import {Cashflow} from '../model/Cashflow';
import {Injectable} from '@angular/core';
import {ApiService} from './api.service';

@Injectable({providedIn: 'root'})
export class CashflowService {

  constructor(private apiService: ApiService) {
  }

  public getCashflowList(): Observable<Cashflow> {
    return this.apiService.get<Cashflow>('cashflow');
  }

  public getCashflowListWithCategory(category: any):Observable<Cashflow[]> {
    return this.apiService.get<Cashflow[]>('cashflow', {cat: 'category'});
  }

}
