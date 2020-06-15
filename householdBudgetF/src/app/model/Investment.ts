import {Household} from "./Household";

export class Investment {
  constructor(
    public id: number,
    public household: Household,
    public type: InvestmentCategory,
    public isMonthly: boolean,
    public period: number,
    public endDate: Date,
    public investmentPercentage: number,
    public amount: number,
    public name: string
  ) {

  }
}
