import {Household} from "./Household";

export class Insurance {
  constructor(
    public id: number,
    public household: Household,
    public type: InsuranceType,
    public description: string,
    public interval: number,
    public cost: number,
    public endDate: Date,
    public name: string,
    public vehicleTID: string,
    public vehicleLP: string,
  ) {

  }
}
