import {Observable} from 'rxjs';
import {Balance} from '../model/Balance';
import {Injectable} from '@angular/core';
import {ApiService} from './api.service';

@Injectable({providedIn: 'root'})
export class BalanceService {

  constructor(private apiService: ApiService) {
  }

  public getBalances(): Observable<Balance[]> {
    return this.apiService.get<Balance[]>('balance');
  }

  public generate(): Observable<Balance> {
    return this.apiService.get<Balance>('balance/generate');
  }

}
