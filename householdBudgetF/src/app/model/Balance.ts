import {Household} from './Household';
import {BalanceType} from './dictionary/BalanceType';

export interface Balance {
  id: number,
  household: Household,
  type: BalanceType,
  generationDate: Date,
  burden: number,
  income: number,
  balance: number,
}
