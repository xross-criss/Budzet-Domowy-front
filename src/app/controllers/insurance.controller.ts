import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {ApiController} from './api.controller';
import {Report} from '../model/Report';
import {Investment} from '../model/Investment';
import {Loan} from '../model/Loan';
import {Insurance} from '../model/Insurance';

@Injectable({providedIn: 'root'})
export class InsuranceController {

    constructor(private apiController: ApiController) {
    }

    public getInsuranceForCurrentMonth(): Observable<Insurance[]> {
        return this.apiController.get<Insurance[]>('insurance/currmonth');
    }

    public getCurrentMonthBalanceReport(): Observable<Report> {
        return this.apiController.get<Report>('insurance/report');
    }

}
