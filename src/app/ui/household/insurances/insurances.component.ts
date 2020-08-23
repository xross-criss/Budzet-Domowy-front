import {Component, Injector, OnInit} from '@angular/core';
import {Insurance} from '../../../model/Insurance';
import {InsuranceService} from '../../../services/insurance.service';
import {HouseholdLoadableComponent} from '../household-loadable-component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CacheService} from '../../../services/cache.service';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {EditInsuranceModalComponent} from '../misc/edit-insurance-modal/edit-insurance-modal.component';

@Component({
    selector: 'app-insurances',
    templateUrl: './insurances.component.html',
    styleUrls: ['./insurances.component.scss']
})
export class InsurancesComponent extends HouseholdLoadableComponent implements OnInit {

    public lifeInsurancesList: Insurance[];
    public carInsurancesList: Insurance[];
    public houseInsurancesList: Insurance[];
    public otherInsurancesList: Insurance[];

    constructor(
        public insuranceService: InsuranceService,
        private modalService: NgbModal,
        private injector: Injector,
        private cacheService: CacheService,
    ) {
        super();
        this.lifeInsurancesList = [];
        this.carInsurancesList = [];
        this.houseInsurancesList = [];
        this.otherInsurancesList = [];
    }

    public ngOnInit(): void {
        super.ngOnInit();
    }

    public loadPage(): Observable<any> {
        return this.insuranceService.getInsurances().pipe(tap((insuranceList: Insurance[]) => {
            for (let insurance of insuranceList) {
                if (insurance.type == 'LIFE') {
                    this.lifeInsurancesList.push(insurance);
                } else if (insurance.type == 'CAR') {
                    this.carInsurancesList.push(insurance);
                } else if (insurance.type == 'HOUSE') {
                    this.houseInsurancesList.push(insurance);
                } else {
                    this.otherInsurancesList.push(insurance);
                }
            }
        }));
    }

    public edit(flow: Insurance): void {
        this.modalService.open(EditInsuranceModalComponent, {
            injector: Injector.create({
                providers: [{
                    provide: Insurance,
                    useValue: flow
                }],
                parent: this.injector
            })
        }).result.then((result: Insurance) => {
            result.household = this.cacheService.get('household');
            this.insuranceService.updateInsurance(result).subscribe(() => this.ngOnInit());
        }, () => {
        });
    }

}
