import {Component, OnInit} from '@angular/core';
import {Balance} from '../../../model/Balance';
import {User} from '../../../model/User';
import {BalanceService} from '../../../services/balance.service';
import {UserService} from '../../../services/user.service';
import {CacheService} from '../../../services/cache.service';
import {HouseholdLoadableComponent} from '../../household/household-loadable-component';
import {forkJoin, Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {ChartOptions, ChartType} from 'chart.js';
import {Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, SingleDataSet} from 'ng2-charts';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent extends HouseholdLoadableComponent implements OnInit {

    public summary: Balance;
    public users: User[];
    public username: string = localStorage.getItem('token').split(':')[0];
    public loggedInUser: User;

    // Pie
    public pieChartOptions: ChartOptions = {
        responsive: true,
    };
    public pieChartLabels: Label[] = ['Wydatki', 'Przychody'];
    public pieChartData: SingleDataSet;
    public pieChartType: ChartType = 'pie';
    public pieChartLegend = true;
    public pieChartPlugins = [];

    constructor(
        private balanceService: BalanceService,
        private userService: UserService,
        private cacheService: CacheService,
    ) {
        super();
        monkeyPatchChartJsTooltip();
        monkeyPatchChartJsLegend();
    }

    public ngOnInit(): void {
        super.ngOnInit();
    }

    public loadPage(): Observable<any> {
        this.loggedInUser = this.cacheService.get('user');
        return forkJoin([
            this.balanceService.getBalances().pipe(tap(balances => {
                this.pieChartData = [];
                this.summary = balances.find(balance => balance.type === 'SUMMARY');
                this.pieChartData.push(this.summary.burden);
                this.pieChartData.push(this.summary.income);
            })),
            this.userService.getAllUsersForHousehold().pipe(tap(users => this.users = users)),
        ]);
    }

    public hasHousehold(): any {
        if (this.summary.type === null || this.summary.type === undefined) {
            return false;
        }

        return true;
    }

    public createHousehold(): void {
        // this.createHousehold(); //fixme - service create household
        this.ngOnInit();
    }

    public removeUser(user: User): void {
        this.userService.removeUserFromHousehold(user).subscribe(() => this.ngOnInit());
        this.ngOnInit();
    }
}
