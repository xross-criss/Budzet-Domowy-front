import {Component} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Observable} from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BalanceService} from '../../services/balance.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css']
})
export class AppLoginComponent {

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  loading = false;
  error = false;

  constructor(private authService: AuthService, private router: Router) {
  }

  public login(): void {
    this.loading = true;
    this.error = false;
    this.authService.authorize(this.loginForm.value.username, this.loginForm.value.password)
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

}
