import {Household} from "./Household";

export class Loan {
  constructor(
    public id: number,
    public household: Household,
    public bankName: string,
    public annualLoanPercentage: number,
    public startDate: Date,
    public endDate: Date,
    public amount: number,
    public installmentAmount: number,
  ) {

  }
}
