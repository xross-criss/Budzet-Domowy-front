import {Household} from './Household';
import {BalanceType} from './dictionary/BalanceType';

export class Balance {

    constructor(
  public id: number,
  public household: Household,
  public type: BalanceType,
  public generationDate: Date,
  public burden: number,
  public income: number,
  public balance: number,
    ) {
    }

    public static fromList(entries: any[]): Balance[] {
        return entries.map(balance => Balance.fromObject(balance));
    }

    public static fromObject(obj: any): Balance {
        return new Balance(
            obj.id,
            obj.household,
            obj.type,
            obj.generationDate,
            obj.burden,
            obj.income,
            obj.balance,
        );
    }
}
