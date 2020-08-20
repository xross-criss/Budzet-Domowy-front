import {OnInit} from '@angular/core';
import {Observable} from 'rxjs';

export abstract class HouseholdLoadableComponent implements OnInit {

    public loading: boolean;

    public ngOnInit(): void {
        this.loading = true;
        this.loadPage().subscribe(() => this.loading = false);
    }

    public abstract loadPage(): Observable<any>;

}
