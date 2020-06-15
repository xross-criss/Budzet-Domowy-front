import {Household} from './Household';

export class Balance {
  constructor(
    public id: number,
    public household: Household,
    public type: BalanceType,
    public generationDate: Date,
    public burden: number,
    public income: number,
    public balance: number
  ) {

  }

}
