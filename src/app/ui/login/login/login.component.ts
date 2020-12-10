import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../../services/auth.service';
import {delay} from 'rxjs/operators';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    public loginForm: FormGroup;

    public loading = false;
    public error = false;

    constructor(private authService: AuthService, private router: Router) {
    }

    public ngOnInit(): void {
        this.loginForm = new FormGroup({
            username: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required])
        });
    }

    public login(): void {
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.error = false;
        this.authService.authorize(this.loginForm.value.username, this.loginForm.value.password).pipe(
            delay(2000),
        ).subscribe(token => {
            this.loading = false;
            localStorage.setItem('token', token.token);
            this.router.navigate(['/']);
        }, err => {
            this.loading = false;
            this.error = true;
        });
    }

    public register() {
        this.router.navigate(['/signup']);
    }
}
