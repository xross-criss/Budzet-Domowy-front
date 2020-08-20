export class Household {

    constructor(
        public id: number,
        public population: number,
        public cost: number,
    ) {
    }

    public static fromList(entries: any[]): Household[] {
        return entries.map(household => Household.fromObject(household));
    }

    public static fromObject(obj: any): Household {
        return new Household(
            obj.id,
            obj.population,
            obj.cost,
        );
    }
}
