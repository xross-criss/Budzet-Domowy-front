import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Token} from '../model/Token';

@Injectable({providedIn: 'root'})
export class AuthService {

  baseUrl = 'http://localhost:8080/api';

  constructor(private httpClient: HttpClient) {
  }

  public authorize(username: string, password: string): Promise<Token> {
    return this.httpClient.post<Token>(this.baseUrl + '/authenticate', {login: username, password})
      .toPromise();
  }

  public httpHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'x-auth-token': localStorage.getItem('token')
    });
  }

}
