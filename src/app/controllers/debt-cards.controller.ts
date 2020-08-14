import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {ApiController} from './api.controller';
import {Report} from '../model/Report';
import {Investment} from '../model/Investment';
import {Loan} from '../model/Loan';
import {Insurance} from '../model/Insurance';
import {DebtCard} from '../model/DebtCard';

@Injectable({providedIn: 'root'})
export class DebtCardsController {

    constructor(private apiController: ApiController) {
    }

    public getDebtsCards(): Observable<DebtCard[]> {
        return this.apiController.get<DebtCard[]>('debtcard');
    }

    public getCurrentMonthBalanceReport(): Observable<Report> {
        return this.apiController.get<Report>('debtcard/report');
    }

}
