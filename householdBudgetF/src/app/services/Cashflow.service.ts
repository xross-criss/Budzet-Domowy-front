import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Cashflow} from "../model/Cashflow";

export class AuthService {

  baseurl = "http://localhost:8080/api";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) {
  }

  public getCashflowList(): Observable<Cashflow> {
    return this.httpClient.get<Cashflow>(this.baseurl + "/cashflow");
  }

}
