import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";

export class AuthService {

  baseurl = "http://localhost:8080/api";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) {
  }

  public authorize(): Observable<string> {
    return this.httpClient.get<string>(this.baseurl + "/authenticate");
  }

}
