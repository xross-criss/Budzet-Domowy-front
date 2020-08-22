import {Component, OnInit} from '@angular/core';
import {Balance} from '../../../model/Balance';
import {BalanceService} from '../../../services/balance.service';
import {forkJoin, Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {HouseholdLoadableComponent} from '../household-loadable-component';

@Component({
    selector: 'app-balances',
    templateUrl: './balances.component.html',
    styleUrls: ['./balances.component.scss']
})
export class BalancesComponent extends HouseholdLoadableComponent implements OnInit {

    public months: Balance[][];

    public monthsOrder: string[];
    public currentMonth: number;

    constructor(
        public balanceService: BalanceService,
    ) {
        super();
        this.monthsOrder = ['STYCZEN', 'LUTY', 'MARZEC', 'KWIECIEN', 'MAJ', 'CZERWIEC', 'LIPIEC', 'SIERPIEN', 'WRZESIEN', 'PAZDZIERNIK', 'LISTOPAD', 'GRUDZIEN'];
        this.currentMonth = (new Date().getMonth() + 1);
    }

    public ngOnInit(): void {
        this.months = [];
        super.ngOnInit();
    }

    public generate() {
        this.balanceService.generate();

        this.ngOnInit();
    }

    public getTitle(i: number): string {
        return '';
    }

    public loadPage(): Observable<any> {
        const observables: Observable<Balance[]>[] = [];
        for (let i = 0; i < 6; i++) {
            this.months.push([]);
            observables.push(
                this.balanceService.getBalancesForMonth(i + '').pipe(tap(balances => this.months[i] = balances))
            );
        }
        return forkJoin(observables);
    }
}
