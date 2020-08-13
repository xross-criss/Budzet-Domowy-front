import {Household} from './Household';

export interface Insurance {
  id: number,
  household: Household,
  type: InsuranceType,
  description: string,
  interval: number,
  cost: number,
  endDate: Date,
  name: string,
  vehicleTID: string,
  vehicleLP: string,
}
