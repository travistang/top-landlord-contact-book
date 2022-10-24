export type Landlord = {
  firstName: string;
  lastName: string;
  salutation?: string;
}

export enum ContactStatus {
  Pending = 'pending',
  ResponseRequired = 'response-required',
  WaitingTillAppointment = 'waiting-till-appointment',
  Rejected = 'rejected',
  GivenUp = 'given-up',
}

export type Contact = {
  landlord: Landlord;
  url: string;
  address: string;
  adTitle: string;
  coldRent?: number;
  contactedAt: number;
  warmRent: number;
  hasParkingSlot?: boolean;
  visitingAppointment?: number;
  remarks?: string;
  requiredDocuments: string[];
  status: ContactStatus;
  expectedMoveInTime?: number;
}