import {Household} from './Household';

export interface DebtCard {
  id: number,
  household: Household,
  limit: number,
  balance: number,
  renewalPercentage: number,
  annualPercentage: number,
  bank: string,
  name: string,
}
