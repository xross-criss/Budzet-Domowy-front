import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Cashflow} from "../model/Cashflow";
import {User} from "../model/User";

export class UserService {

  baseurl = "http://localhost:8080/api";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) {
  }

  public getAllUsersForHousehold(): Observable<User> {
    return this.httpClient.get<User>(this.baseurl + "/user/household");
  }

}
