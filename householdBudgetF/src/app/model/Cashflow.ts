import {Household} from './Household';
import {CashflowCategory} from './dictionary/CashflowCategory';

export interface Cashflow {
  id: number,
  household: Household,
  category: CashflowCategory,
  startDate: Date,
  endDate: Date,
  interval: number,
  amount: number,
  description: string,
}
