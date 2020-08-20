import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Report} from '../model/Report';
import {Investment} from '../model/Investment';
import {Loan} from '../model/Loan';
import {Insurance} from '../model/Insurance';
import {DebtCard} from '../model/DebtCard';

@Injectable({providedIn: 'root'})
export class DebtCardsService {

    constructor(private apiService: ApiService) {
    }

    public getDebtsCards(): Observable<DebtCard[]> {
        return this.apiService.get<DebtCard[]>('debtcard');
    }

    public getCurrentMonthBalanceReport(): Observable<Report> {
        return this.apiService.get<Report>('debtcard/report');
    }

}
