import {Observable} from 'rxjs';
import {User} from '../model/User';
import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {CacheService} from './cache.service';

@Injectable({providedIn: 'root'})
export class UserService {

    constructor(
        private apiService: ApiService,
        private cacheService: CacheService,
    ) {
    }

    public getAllUsersForHousehold(): Observable<User[]> {
        return this.apiService.get<User[]>('user/household');
    }

    public getUser(): Observable<User> {
        return this.cacheService.getCachedObservable(
            'user',
            () => this.apiService.get<User>('user/details'),
            this
        );
    }

    public registerUser(user: User): Observable<User> {
        return this.apiService.put<User>('user', user);
    }

    public updateUser(user: User): Observable<User> {
        return this.apiService.post<User>('user', user);
    }

    public removeUserFromHousehold(user: User): Observable<User> {
        return this.apiService.get<User>('user/removeUser', {'login': user.login});


    }
}
