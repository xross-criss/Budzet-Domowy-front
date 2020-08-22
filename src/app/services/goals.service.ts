import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Goal} from '../model/Goal';

@Injectable({providedIn: 'root'})
export class GoalsService {

    constructor(private apiService: ApiService) {
    }

    public getGoals(): Observable<Goal[]> {
        return this.apiService.get<Goal[]>('goals');
    }

    public updateGoal(goal: Goal): Observable<Goal> {
        return this.apiService.post<Goal>('goals', goal);
    }

}
