import {Observable} from 'rxjs';
import {User} from '../model/User';
import {Injectable} from '@angular/core';
import {ApiController} from './api.controller';

@Injectable({providedIn: 'root'})
export class UserController {

  constructor(private apiController: ApiController) {
  }

  public getAllUsersForHousehold(): Observable<User[]> {
    return this.apiController.get<User[]>('user/household');
  }

  public getUser(): Observable<User> {
    return this.apiController.get<User>('user/details');
  }

}
