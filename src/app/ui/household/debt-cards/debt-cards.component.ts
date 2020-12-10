import {Component, Injector, OnInit} from '@angular/core';
import {HouseholdLoadableComponent} from '../household-loadable-component';
import {DebtCard} from '../../../model/DebtCard';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CacheService} from '../../../services/cache.service';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {DebtCardsService} from '../../../services/debt-cards.service';
import {EditDebtCardModalComponent} from '../misc/edit-debt-card-modal/edit-debt-card-modal.component';

@Component({
    selector: 'app-debt-cards',
    templateUrl: './debt-cards.component.html',
    styleUrls: ['./debt-cards.component.scss']
})
export class DebtCardsComponent extends HouseholdLoadableComponent implements OnInit {

    public debtCardsList: DebtCard[];

    constructor(
        public debtCardService: DebtCardsService,
        private modalService: NgbModal,
        private injector: Injector,
        private cacheService: CacheService,
    ) {
        super();
        this.debtCardsList = [];
    }

    public ngOnInit(): void {
        super.ngOnInit();
    }

    public loadPage(): Observable<any> {
        return this.debtCardService.getDebtsCards().pipe(tap((debtCardsList: DebtCard[]) => this.debtCardsList = debtCardsList
        ));
    }

    public edit(flow: DebtCard): void {
        this.modalService.open(EditDebtCardModalComponent, {
            injector: Injector.create({
                providers: [{
                    provide: DebtCard,
                    useValue: flow
                }],
                parent: this.injector
            })
        }).result.then((result: DebtCard) => {
            result.household = this.cacheService.get('household');

            this.debtCardService.updateDebtCard(result).subscribe(() => this.ngOnInit());
        }, () => {
        });
    }

}
