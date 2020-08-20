import {Household} from './Household';
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

    public static fromList(entries: any[]): User[] {
        return entries.map(user => User.fromObject(user));
    }

    public static fromObject(obj: any): User {
        return new User(
            obj.id,
            obj.household,
            obj.userRole,
            obj.login,
            obj.password,
            obj.name,
            obj.email,
            obj.registrationDate,
            obj.lastFailedLogin,
        );
    }
}
