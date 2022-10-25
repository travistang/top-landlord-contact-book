import { Landlord } from "./Landlord";
import { Offer } from "./Offer";

export enum ContactStatus {
  Pending = "pending",
  ResponseRequired = "response-required",
  WaitingTillAppointment = "waiting-till-appointment",
  Rejected = "rejected",
  GivenUp = "given-up",
}

export enum ContactRating {
  VeryLike = "very-like",
  Like = "like",
  Neutral = "neutral",
  Dislike = "dislike",
}

export type Contact = {
  landlord: Landlord;
  url: string;
  adTitle: string;
  offer: Offer;
  contactedAt: number;
  visitingAppointment?: number;
  remarks?: string;
  requiredDocuments: string[];
  status: ContactStatus;
  myRating?: ContactRating;
};
