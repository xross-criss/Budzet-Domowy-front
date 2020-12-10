import {Component, Injector, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {User} from '../../../model/User';
import {UserService} from '../../../services/user.service';
import {Observable} from 'rxjs';
import {HouseholdLoadableComponent} from '../../household/household-loadable-component';
import {tap} from 'rxjs/operators';
import {CacheService} from '../../../services/cache.service';
import {SettingsUserPasswordModalComponent} from '../misc/settings-user-password-modal/settings-user-password-modal.component';
import {SettingsUserModalComponent} from '../misc/settings-user-modal/settings-user-modal.component';

@Component({
    selector: 'app-settings-user',
    templateUrl: './settings-user.component.html',
    styleUrls: ['./settings-user.component.scss']
})
export class SettingsUserComponent extends HouseholdLoadableComponent implements OnInit {

    public user: User;

    constructor(
        private userService: UserService,
        private modalService: NgbModal,
        private userDataInjector: Injector,
        private passwordInjector: Injector,
        private cacheService: CacheService,
    ) {
        super();
    }

    public ngOnInit(): void {
        super.ngOnInit();
    }

    loadPage(): Observable<any> {
        return this.userService.getUser().pipe(tap(user => {
            this.user = user;
        }));
    }

    public editUserData(flow: User): void {
        this.modalService.open(SettingsUserModalComponent, {
            injector: Injector.create({
                providers: [{
                    provide: User,
                    useValue: flow
                }],
                parent: this.userDataInjector
            })
        }).result.then((result: User) => {
            result.household = this.cacheService.get('household');

            this.userService.updateUser(result).subscribe(() => this.ngOnInit());
        }, () => {
        });
    }

    public changeUserPassword(flow: User): void {
        this.modalService.open(SettingsUserPasswordModalComponent, {
            injector: Injector.create({
                providers: [{
                    provide: User,
                    useValue: flow
                }],
                parent: this.passwordInjector
            })
        }).result.then((result: User) => {
            result.household = this.cacheService.get('household');

            this.userService.updateUser(result).subscribe(() => this.ngOnInit());
        }, () => {
        });
    }

}

