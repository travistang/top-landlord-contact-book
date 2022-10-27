import React from "react";
import { useSetRecoilState } from "recoil";
import { format } from "date-fns";
import { Contact } from "../../types/Contact";
import { WithId } from "../../types/utils";
import { createEditContactAtom } from "../../atoms/createEditContactAtom";
import LandlordNameTag from "./LandlordNameTag";
import StatusTag from "./StatusTag";

type Props = {
  contact: WithId<Contact>;
};

export default function ContactSummary({ contact }: Props) {
  const setCreateEditContact = useSetRecoilState(createEditContactAtom);
  const { offer, adTitle, landlord, contactedAt, status } = contact;
  const createdDayText = `Contacted at ${format(contactedAt, "MM-dd")}`;

  const editRecord = () => {
    setCreateEditContact(contact);
  };
  return (
    <div
      onClick={editRecord}
      className="h-20 overflow-hidden flex flex-row items-center justify-between rounded-lg shadow-lg bg-font bg-opacity-5 p-2"
    >
      <div className="flex w-[50%] overflow-hidden flex-col overflow-ellipsis">
        <span className="text-xs text-font text-opacity-80">
          {createdDayText}
        </span>
        <span className="text-lg font-bold overflow-ellipsis whitespace-nowrap">
          {adTitle}
        </span>
        <span className="text-xs">
          <LandlordNameTag landlord={landlord} /> {offer.address}
        </span>
      </div>
      <StatusTag
        status={status}
        className="max-w-[50%] overflow-ellipsis overflow-hidden"
      />
    </div>
  );
}
