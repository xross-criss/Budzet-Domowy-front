import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({providedIn: 'root'})
export class ApiService {

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService,
  ) {

  }

  public get<T>(
    urlSuffix: string,
    params?: HttpParams | {
      [param: string]: string | string[];
    }
  ): Observable<T> {
    return this.httpClient.get<T>('http://localhost:8080/api/' + urlSuffix, {
      headers: this.authService.httpHeaders(),
      params
    });
  }

  public post<T>(
    urlSuffix: string,
    body: any,
    params?: HttpParams | {
      [param: string]: string | string[];
    },
  ): Observable<T> {
    return this.httpClient.post<T>('http://localhost:8080/api/' + urlSuffix, body, {
      headers: this.authService.httpHeaders(),
      params
    });
  }

  public delete<T>(
    urlSuffix: string,
    params?: HttpParams | {
      [param: string]: string | string[];
    }
  ): Observable<T> {
    return this.httpClient.delete<T>('http://localhost:8080/api/' + urlSuffix, {
      headers: this.authService.httpHeaders(),
      params
    });
  }


}
