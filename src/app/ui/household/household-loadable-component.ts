import {OnInit} from '@angular/core';
import {Observable} from 'rxjs';

export abstract class HouseholdLoadableComponent implements OnInit {

    public loading: boolean;

    public ngOnInit(): void {
        this.loading = true;
        console.log('ngOnInit');
        this.loadPage().subscribe(() => this.loading = false);
    }

    public abstract loadPage(): Observable<any>;

}
