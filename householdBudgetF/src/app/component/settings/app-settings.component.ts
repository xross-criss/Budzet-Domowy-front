import {Component, OnInit} from '@angular/core';
import {User} from "../../model/User";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-settings',
  templateUrl: './app-settings.component.html',
  styleUrls: ['./app-settings.component.css']
})
export class AppSettingsComponent implements OnInit {

  public user: User;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getUser().toPromise()
      .then(user => {
        this.user = user;
        console.log(this.user);
      })
      .catch(err => {
        console.log(err);
      });
  }

}
