import {Household} from './Household';
import {InvestmentCategory} from './dictionary/InvestmentCategory';

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
