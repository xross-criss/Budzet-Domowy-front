import {Component, OnInit} from '@angular/core';

@Component({
    selector:    'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls:   ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    public logout(): void {
        localStorage.removeItem('token');
        localStorage.removeItem('x-auth-token');
    }
}
