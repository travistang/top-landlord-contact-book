import React from "react";
import { useSetRecoilState } from 'recoil';
import { format } from "date-fns";
import { Contact } from "../../types/Contact";
import { WithId } from "../../types/utils";
import { createEditContactAtom } from "../../atoms/createEditContactAtom";

type Props = {
  contact: WithId<Contact>;
};

export default function ContactSummary({ contact }: Props) {
  const setCreateEditContact = useSetRecoilState(createEditContactAtom);
  const { offer, adTitle, landlord, contactedAt } = contact;
  const createdDayText = `Contacted at ${format(contactedAt, 'MM-dd')}`;

  const editRecord = () => {
    setCreateEditContact(contact);
  }
  return (
    <div
      onClick={editRecord}
      className="flex flex-row rounded-lg shadow-lg bg-font bg-opacity-5 p-2">
      <div className="flex flex-col">
        <span className="text-xs text-font text-opacity-80">
          {createdDayText}
        </span>
        <span className="text-lg font-bold">{adTitle}</span>
        <span className="text-xs">
          {landlord.firstName} {landlord.lastName}|{offer.address}
        </span>
      </div>
    </div>
  );
}
