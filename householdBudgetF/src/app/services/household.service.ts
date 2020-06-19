import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Household} from "../model/Household";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class HouseholdService {

  baseurl = "http://localhost:8080/api/household";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) {
  }

  public getHousehold(): Observable<Household> {
    return this.httpClient.get<Household>(this.baseurl);
  }

}
