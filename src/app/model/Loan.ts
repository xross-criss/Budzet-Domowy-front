import {Household} from './Household';

export interface Loan {
  id: number,
  household: Household,
  bankName: string,
  annualLoanPercentage: number,
  startDate: Date,
  endDate: Date,
  amount: number,
  installmentAmount: number,
}
