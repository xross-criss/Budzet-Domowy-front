import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {ApiController} from './api.controller';
import {Report} from '../model/Report';
import {Investment} from '../model/Investment';

@Injectable({providedIn: 'root'})
export class InvestmentController {

    constructor(private apiController: ApiController) {
    }

    public getInvestments(): Observable<Investment> {
        return this.apiController.get<Investment>('investment');
    }

    public getInvestmentForCurrentMonth(): Observable<Investment[]> {
        return this.apiController.get<Investment[]>('investment/currmonth');
    }

    public geCurrentMonthBalanceReport(): Observable<Report> {
        return this.apiController.get<Report>('investment/report');
    }

}
