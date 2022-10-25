export type Offer = {
  address: string;
  coldRent?: number;
  warmRent?: number;
  expectedMoveInTime?: number;
  size: number;
  coordinates?: [number, number];
  hasParkingSlot?: boolean;
  hasBuildInKitchen?: boolean;
};
