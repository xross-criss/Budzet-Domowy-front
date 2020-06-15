import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {

  baseUrl = 'http://localhost:8080/api';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) {
  }

  public authorize(username: string, password: string): Promise<string> {
    return this.httpClient.post<string>(this.baseUrl + '/authenticate', {username, password}, this.httpOptions).toPromise();
  }

}
