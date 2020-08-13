import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {AuthController} from "../controllers/auth.controller";
import {Observable, of} from "rxjs";
import {catchError, tap} from "rxjs/operators";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class TokenInterceptor implements HttpInterceptor {
  constructor(public authService: AuthController) {
  }

  private readonly _key = 'x-auth-token';

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(res => {
        if (res instanceof HttpResponse) {
          localStorage.removeItem(this._key);
          localStorage.setItem(this._key, res.headers.get(this._key));
        }
      }),
      catchError((err: any) => {
        console.log(err);
        return of(err);
      }));

  }
}
