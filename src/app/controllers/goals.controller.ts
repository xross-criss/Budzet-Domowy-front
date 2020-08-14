import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {ApiController} from './api.controller';
import {Report} from '../model/Report';
import {Investment} from '../model/Investment';
import {Loan} from '../model/Loan';
import {Goals} from '../model/Goals';

@Injectable({providedIn: 'root'})
export class GoalsController {

    constructor(private apiController: ApiController) {
    }

    public getGoals(): Observable<Goals[]> {
        return this.apiController.get<Goals[]>('goals');
    }

}
