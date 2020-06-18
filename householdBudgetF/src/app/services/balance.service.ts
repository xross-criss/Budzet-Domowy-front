import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Balance} from "../model/Balance";
import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';

@Injectable()
export class BalanceService {

  baseUrl = 'http://localhost:8080/api';

  constructor(private httpClient: HttpClient, private authService: AuthService) {
  }

  public getBalances(): Observable<Balance[]> {
    return this.httpClient.get<Balance[]>(this.baseUrl + '/balance', this.authService.httpOptions());
  }

  public generate(): Observable<Balance> {
    return this.httpClient.get<Balance>(this.baseUrl + '/balance/generate', this.authService.httpOptions());
  }

}
