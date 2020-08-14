import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {ApiController} from './api.controller';
import {Report} from '../model/Report';
import {Investment} from '../model/Investment';
import {Loan} from '../model/Loan';

@Injectable({providedIn: 'root'})
export class LoanController {

    constructor(private apiController: ApiController) {
    }

    public getLoans(): Observable<Loan[]> {
        return this.apiController.get<Loan[]>('loan');
    }

    public getCurrentMonthBalanceReport(): Observable<Report> {
        return this.apiController.get<Report>('loan/report');
    }

}
