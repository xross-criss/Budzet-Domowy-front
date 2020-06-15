import {Component} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Observable} from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';

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

  constructor(private authService: AuthService) {
  }

  public login(): void {
    this.loading = true;
    this.error = false;
    this.authService.authorize(this.loginForm.value.username, this.loginForm.value.password)
      .then(() => {
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
        this.error = true;
      });
  }

}
