import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Landlord } from "../../types/Landlord";

type Props = {
  landlord: Landlord;
};
export default function LandlordNameTag({ landlord }: Props) {
  const { firstName, lastName } = landlord;
  if (!firstName && !lastName) {
    return null;
  }

  return (
    <span className="text-xs gap-2 text-font text-opacity-70">
      <FontAwesomeIcon icon="user" className="text-xs" />
      {firstName} {lastName}
    </span>
  );
}
