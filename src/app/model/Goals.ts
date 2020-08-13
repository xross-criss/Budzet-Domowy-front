import {Household} from './Household';

export interface Goals {
  id: number,
  household: Household,
  category: GoalCategory,
  amount: number,
  name: string,
  description: string,
  priority: number,
}
