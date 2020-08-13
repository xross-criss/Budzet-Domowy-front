import {Household} from './Household';

export interface Investment {
  id: number,
  household: Household,
  type: InvestmentCategory,
  isMonthly: boolean,
  period: number,
  endDate: Date,
  investmentPercentage: number,
  amount: number,
  name: string,
}
