import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Report} from '../model/Report';
import {Investment} from '../model/Investment';

@Injectable({providedIn: 'root'})
export class InvestmentService {

    constructor(private apiService: ApiService) {
    }

    public getInvestments(): Observable<Investment[]> {
        return this.apiService.get<Investment[]>('investment');
    }

    public getInvestmentForCurrentMonth(): Observable<Investment[]> {
        return this.apiService.get<Investment[]>('investment/currmonth');
    }

    public geCurrentMonthBalanceReport(): Observable<Report> {
        return this.apiService.get<Report>('investment/report');
    }

}
