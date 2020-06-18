import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Cashflow} from "../model/Cashflow";
import {User} from "../model/User";
import {AuthService} from './auth.service';
import {Injectable} from '@angular/core';

@Injectable()
export class UserService {

  baseurl = "http://localhost:8080/api";

  constructor(private httpClient: HttpClient, private authService: AuthService) {
  }

  public getAllUsersForHousehold(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.baseurl + "/user/household", this.authService.httpOptions());
  }

}
