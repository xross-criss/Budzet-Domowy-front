import {Household} from './Household';
import {GoalCategory} from './dictionary/GoalCategory';

export class Goal {

    constructor(
        public id: number,
        public household: Household,
        public category: GoalCategory,
        public amount: number,
        public percent: number,
        public name: string,
        public description: string,
        public priority: number,
    ) {
    }

    public static fromList(entries: any[]): Goal[] {
        return entries.map(goals => Goal.fromObject(goals));
    }

    public static fromObject(obj: any): Goal {
        return new Goal(
            obj.id,
            obj.household,
            obj.category,
            obj.amount,
            obj.percent,
            obj.name,
            obj.description,
            obj.priority,
        );
    }
}
