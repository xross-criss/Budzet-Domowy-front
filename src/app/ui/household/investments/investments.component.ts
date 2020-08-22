import {Component, Injector, OnInit} from '@angular/core';
import {Investment} from '../../../model/Investment';
import {InvestmentService} from '../../../services/investment.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CacheService} from '../../../services/cache.service';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {HouseholdLoadableComponent} from '../household-loadable-component';
import {EditInvestmentModalComponent} from '../misc/edit-investment-modal/edit-investment-modal.component';

@Component({
    selector: 'app-investments',
    templateUrl: './investments.component.html',
    styleUrls: ['./investments.component.scss']
})
export class InvestmentsComponent extends HouseholdLoadableComponent implements OnInit {

    public investmentsList: Investment[];

    constructor(
        public investmentService: InvestmentService,
        private modalService: NgbModal,
        private injector: Injector,
        private cacheService: CacheService,
    ) {
        super();
        this.investmentsList = [];
    }

    public ngOnInit(): void {
        super.ngOnInit();
    }

    public loadPage(): Observable<any> {
        return this.investmentService.getInvestments().pipe(tap((investments: Investment[]) => this.investmentsList = investments
        ));
    }

    public edit(flow: Investment): void {
        this.modalService.open(EditInvestmentModalComponent, {
            injector: Injector.create({
                providers: [{
                    provide: Investment,
                    useValue: flow
                }],
                parent: this.injector
            })
        }).result.then((result: Investment) => {
            result.household = this.cacheService.get('household');

            this.investmentService.updateInvestment(result).subscribe(() => this.ngOnInit());
        }, () => {
        });
    }

}
