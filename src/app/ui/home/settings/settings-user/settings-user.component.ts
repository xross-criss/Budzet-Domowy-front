import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {SettingsHouseholdComponent} from '../settings-household/settings-household.component';

@Component({
    selector:    'app-settings-user',
    templateUrl: './settings-user.component.html',
    styleUrls:   ['./settings-user.component.scss']
})
export class SettingsUserComponent implements OnInit {

    constructor(
        private ngbModal: NgbModal
    ) { }

    public ngOnInit(): void {
        this.ngbModal.open(SettingsHouseholdComponent);
    }

}
