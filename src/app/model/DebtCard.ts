import {Household} from './Household';

export class DebtCard {
    constructor(
        public id: number,
        public household: Household,
        public limit: number,
        public balance: number,
        public renewalPercentage: number,
        public annualPercentage: number,
        public bank: string,
        public name: string,
    ) {
    }

    public static fromList(entries: any[]): DebtCard[] {
        return entries.map(debtCard => DebtCard.fromObject(debtCard));
    }

    public static fromObject(obj: any): DebtCard {
        return new DebtCard(
            obj.id,
            obj.household,
            obj.limit,
            obj.balance,
            obj.renewalPercentage,
            obj.annualPercentage,
            obj.bank,
            obj.name,
        );
    }
}
