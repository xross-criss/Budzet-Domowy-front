import {Household} from './Household';

export class Loan {

    constructor(
        public id: number,
        public household: Household,
        public bankName: string,
        public annualLoanPercentage: number,
        public startDate: string,
        public endDate: string,
        public amount: number,
        public installmentAmount: number,
    ) {
    }

    public static fromList(entries: any[]): Loan[] {
        return entries.map(loan => Loan.fromObject(loan));
    }

    public static fromObject(obj: any): Loan {
        return new Loan(
            obj.id,
            obj.household,
            obj.bankName,
            obj.annualLoanPercentage,
            obj.startDate,
            obj.endDate,
            obj.amount,
            obj.installmentAmount,
        );
    }
}
