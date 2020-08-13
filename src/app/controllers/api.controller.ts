import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthController} from './auth.controller';

@Injectable({providedIn: 'root'})
export class ApiController {

  constructor(
    private httpClient: HttpClient,
    private authController: AuthController,
  ) {

  }

  public get<T>(
    urlSuffix: string,
    params?: HttpParams | {
      [param: string]: string | string[];
    }
  ): Observable<T> {
    return this.httpClient.get<T>('/api/' + urlSuffix, {
      headers: this.authController.httpHeaders(),
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
    return this.httpClient.post<T>('/api/' + urlSuffix, body, {
      headers: this.authController.httpHeaders(),
      params
    });
  }

  public delete<T>(
    urlSuffix: string,
    params?: HttpParams | {
      [param: string]: string | string[];
    }
  ): Observable<T> {
    return this.httpClient.delete<T>('/api/' + urlSuffix, {
      headers: this.authController.httpHeaders(),
      params
    });
  }


}
