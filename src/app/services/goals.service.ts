import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Report} from '../model/Report';
import {Investment} from '../model/Investment';
import {Loan} from '../model/Loan';
import {Goals} from '../model/Goals';

@Injectable({providedIn: 'root'})
export class GoalsService {

    constructor(private apiService: ApiService) {
    }

    public getGoals(): Observable<Goals[]> {
        return this.apiService.get<Goals[]>('goals');
    }

}
