import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Report} from '../model/Report';
import {Insurance} from '../model/Insurance';

@Injectable({providedIn: 'root'})
export class InsuranceService {

    constructor(private apiService: ApiService) {
    }

    public getInsurances(): Observable<Insurance[]> {
        return this.apiService.get<Insurance[]>('insurance');
    }

    public getInsuranceForCurrentMonth(): Observable<Insurance[]> {
        return this.apiService.get<Insurance[]>('insurance/currmonth');
    }

    public getCurrentMonthBalanceReport(): Observable<Report> {
        return this.apiService.get<Report>('insurance/report');
    }

    public updateInsurance(insurance: Insurance): Observable<Insurance> {
        return this.apiService.post<Insurance>('insurance', insurance);
    }

}
