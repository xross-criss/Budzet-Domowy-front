import {Household} from "./Household";

export class Goals {

  constructor(
    public id: number,
    public household: Household,
    public category: GoalCategory,
    public amount: number,
    public name: string,
    public description: string,
    public priority: number,
  ) {

  }
}
