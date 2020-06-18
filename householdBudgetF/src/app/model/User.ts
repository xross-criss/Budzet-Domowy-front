import {Household} from "./Household";
import {UserRole} from './dictionary/UserRole';

export class User {
  constructor(
    public id: number,
    public household: Household,
    public userRole: UserRole,
    public login: string,
    public password: string,
    public name: string,
    public email: string,
    public registrationDate: Date,
    public lastFailedLogin: Date,
  ) {

  }
}
