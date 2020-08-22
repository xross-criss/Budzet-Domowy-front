import {Household} from './Household';
import {InsuranceType} from './dictionary/InsuranceType';

export class Insurance {

    constructor(
        public id: number,
        public household: Household,
        public type: InsuranceType,
        public description: string,
        public period: number,
        public cost: number,
        public endDate: Date,
        public name: string,
        public vehicleTID: string,
        public vehicleLP: string,
    ) {
    }

    public static fromList(entries: any[]): Insurance[] {
        return entries.map(insurance => Insurance.fromObject(insurance));
    }

    public static fromObject(obj: any): Insurance {
        return new Insurance(
            obj.id,
            obj.household,
            obj.type,
            obj.description,
            obj.period,
            obj.cost,
            obj.endDate,
            obj.name,
            obj.vehicleTID,
            obj.vehicleLP,
        );
    }
}
