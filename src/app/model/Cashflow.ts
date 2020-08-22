import {Household} from './Household';
import {CashflowCategory} from './dictionary/CashflowCategory';

export class Cashflow {

    constructor(
        public amount: number,
        public category: string,
        public description: string,
        public endDate: Date,
        public household: Household,
        public id: number,
        public period: number,
        public startDate: Date,
    ) {
    }

    public static fromList(entries: any[]): Cashflow[] {
        return entries.map(cashflow => Cashflow.fromObject(cashflow));
    }

    public static fromObject(obj: any): Cashflow {
        return new Cashflow(
            obj.amount,
            obj.category,
            obj.description,
            obj.endDate,
            obj.household,
            obj.id,
            obj.period,
            obj.startDate,
        );
    }

}
