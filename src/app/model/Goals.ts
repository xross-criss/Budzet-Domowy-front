import {Household} from './Household';
import {GoalCategory} from './dictionary/GoalCategory';

export interface Goals {
  id: number,
  household: Household,
  category: GoalCategory,
  amount: number,
  name: string,
  description: string,
  priority: number,
}
