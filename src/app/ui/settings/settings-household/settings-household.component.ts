import {Component, Injector, OnInit} from '@angular/core';
import {User} from '../../../model/User';
import {UserService} from '../../../services/user.service';
import {Household} from '../../../model/Household';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CacheService} from '../../../services/cache.service';
import {forkJoin, Observable} from 'rxjs';
import {SettingsUserPasswordModalComponent} from '../misc/settings-user-password-modal/settings-user-password-modal.component';
import {HouseholdLoadableComponent} from '../../household/household-loadable-component';
import {HouseholdService} from '../../../services/household.service';
import {tap} from 'rxjs/operators';

@Component({
    selector: 'app-settings-household',
    templateUrl: './settings-household.component.html',
    styleUrls: ['./settings-household.component.scss']
})
export class SettingsHouseholdComponent extends HouseholdLoadableComponent implements OnInit {

    public userList: User[];
    public household: Household;

    constructor(
        private userService: UserService,
        private householdService: HouseholdService,
        private modalService: NgbModal,
        private householdInjector: Injector,
        private userInjector: Injector,
        private cacheService: CacheService,
    ) {
        super();
    }

    public ngOnInit(): void {
        super.ngOnInit();
    }

    public loadPage(): Observable<any> {
        return forkJoin([
            this.householdService.getHousehold().pipe(tap(household => {
                this.household = household;
            })),
            this.userService.getAllUsersForHousehold().pipe(tap(users => {
                this.userList = users;
            })),
        ]);
    }

    public edit(flow: Household): void {
        this.modalService.open(SettingsUserPasswordModalComponent, {
            injector: Injector.create({
                providers: [{
                    provide: Household,
                    useValue: flow
                }],
                parent: this.householdInjector
            })
        }).result.then((result: Household) => {
            this.householdService.updateHousehold(result).subscribe(() => this.ngOnInit());
        }, () => {
        });
    }

    public removeUser(flow: User): void {
        this.userService.removeUserFromHousehold(flow).subscribe(() => this.ngOnInit());
        this.ngOnInit();
    }

}
