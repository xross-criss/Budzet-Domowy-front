import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthController} from '../../../controllers/auth.controller';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm = new FormGroup({
        username: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required])
    });

    loading = false;
    error = false;

    constructor(private authController: AuthController, private router: Router) {
    }

    public login(): void {
        this.loading = true;
        this.error = false;
        this.authController.authorize(this.loginForm.value.username, this.loginForm.value.password)
            .then(token => {
                this.loading = false;
                localStorage.setItem('token', token.token);
                this.router.navigate(['/']);
            })
            .catch(err => {
                this.loading = false;
                this.error = true;
            });
    }

    ngOnInit(): void {
    }

}
