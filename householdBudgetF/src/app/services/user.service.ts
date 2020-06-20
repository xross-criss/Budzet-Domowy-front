import {Observable} from 'rxjs';
import {User} from '../model/User';
import {Injectable} from '@angular/core';
import {ApiService} from './api.service';

@Injectable({providedIn: 'root'})
export class UserService {

  constructor(private apiService: ApiService) {
  }

  public getAllUsersForHousehold(): Observable<User[]> {
    return this.apiService.get<User[]>('user/household');
  }

  public getUser(): Observable<User> {
    return this.apiService.get<User>('user/details');
  }

}
