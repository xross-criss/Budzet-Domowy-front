import {Household} from "./Household";

export class DebtCard {

  constructor(
    public id: number,
    public household: Household,
    public limit: number,
    public balance: number,
    public renewalPercentage: number,
    public annualPercentage: number,
    public bank: string,
    public name: string
  ) {

  }
}
