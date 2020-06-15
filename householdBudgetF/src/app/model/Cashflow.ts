import {Household} from "./Household";
import {CashflowCategory} from "./dictionary/CashflowCategory";

export class Cashflow {
  constructor(
    public id: number,
    public household: Household,
    public category: CashflowCategory,
    public startDate: Date,
    public endDate: Date,
    public interval: number,
    public amount: number,
    public description: string
  ) {

  }
}
