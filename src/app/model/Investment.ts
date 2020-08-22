import {Household} from './Household';
import {InvestmentCategory} from './dictionary/InvestmentCategory';

export class Investment {

    constructor(
        public id: number,
        public household: Household,
        public type: InvestmentCategory,
        public period: boolean,
        public startDate: number,
        public endDate: Date,
        public investmentPercentage: number,
        public amount: number,
        public name: string,
    ) {
    }

    public static fromList(entries: any[]): Investment[] {
        return entries.map(investment => Investment.fromObject(investment));
    }

    public static fromObject(obj: any): Investment {
        return new Investment(
            obj.id,
            obj.household,
            obj.type,
            obj.period,
            obj.startDate,
            obj.endDate,
            obj.investmentPercentage,
            obj.amount,
            obj.name,
        );
    }
}
