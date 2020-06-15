import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Balance} from "../model/Balance";
import {Injectable} from '@angular/core';

@Injectable()
export class BalanceService {

  baseUrl = 'http://localhost:8080/api';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) {
  }

  public getBalances(): Observable<Balance> {
    return this.httpClient.get<Balance>(this.baseUrl + '/balance');
  }

  public generate(): Observable<Balance> {
    return this.httpClient.get<Balance>(this.baseUrl + '/balance/generate');
  }

}
