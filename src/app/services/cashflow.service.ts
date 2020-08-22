import {Observable} from 'rxjs';
import {Cashflow} from '../model/Cashflow';
import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Report} from '../model/Report';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class CashflowService {

    constructor(private apiService: ApiService) {
    }

    public getCashflowList(): Observable<Cashflow[]> {
        return this.apiService.get<Cashflow[]>('cashflow').pipe(map(Cashflow.fromList));
    }

    public getCashflowListWithCategory(category: any): Observable<Cashflow[]> {
        return this.apiService.get<Cashflow[]>('cashflow', {cat: 'category'}).pipe(map(Cashflow.fromList));
    }

    public getCashflowForCurrentMonth(): Observable<Cashflow[]> {
        return this.apiService.get<Cashflow[]>('cashflow/currmonth').pipe(map(Cashflow.fromList));
    }

    public getCurrentMonthBalanceReport(): Observable<Report> {
        return this.apiService.get<Report>('cashflow/report');
    }

    public updateCashflow(cashflow:Cashflow): Observable<Cashflow> {
        return this.apiService.post('cashflow', cashflow);
    }

}
