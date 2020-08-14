import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Token} from '../model/Token';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthController {

  constructor(private httpClient: HttpClient) {
  }

  public authorize(username: string, password: string): Observable<Token> {
    return this.httpClient.post<Token>('/api/authenticate', {login: username, password});
  }

  public httpHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'x-auth-token': localStorage.getItem('token')
    });
  }

}
