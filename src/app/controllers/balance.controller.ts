import {Observable} from 'rxjs';
import {Balance} from '../model/Balance';
import {Injectable} from '@angular/core';
import {ApiController} from './api.controller';

@Injectable({providedIn: 'root'})
export class BalanceController {

  constructor(private apiController: ApiController) {
  }

  public getBalances(): Observable<Balance[]> {
    return this.apiController.get<Balance[]>('balance');
  }

  public generate(): Observable<Balance> {
    return this.apiController.get<Balance>('balance/generate');
  }

}
