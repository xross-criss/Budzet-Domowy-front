import {Household} from './Household';
import {UserRole} from './dictionary/UserRole';

export interface User {
  id: number,
  household: Household,
  userRole: UserRole,
  login: string,
  password: string,
  name: string,
  email: string,
  registrationDate: Date,
  lastFailedLogin: Date,
}
