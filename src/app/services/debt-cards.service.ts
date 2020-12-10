import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Report} from '../model/Report';
import {DebtCard} from '../model/DebtCard';
import {Cashflow} from '../model/Cashflow';
import {map} from 'rxjs/operators';

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

    public updateDebtCard(debtCard: DebtCard): Observable<DebtCard> {
        return this.apiService.post<DebtCard>('debtcard', debtCard);
    }

    public deleteDebtCard(debtCardId: number): Observable<any> {
        return this.apiService.delete<any>('cashflow', {'id': debtCardId.toString()}).pipe(map(Cashflow.fromList));

    }

}
