import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Report} from '../model/Report';
import {Loan} from '../model/Loan';

@Injectable({providedIn: 'root'})
export class LoanService {

    constructor(private apiService: ApiService) {
    }

    public getLoans(): Observable<Loan[]> {
        return this.apiService.get<Loan[]>('loan');
    }

    public getCurrentMonthBalanceReport(): Observable<Report> {
        return this.apiService.get<Report>('loan/report');
    }

    public updateLoan(loan: Loan): Observable<Loan> {
        return this.apiService.post<Loan>('loan', loan);
    }
}
