import React from 'react';
import { differenceInDays } from 'date-fns';
import { Contact } from '../../types/Contact';
import { WithId } from '../../types/utils';

type Props = {
  contact: WithId<Contact>;
};

export default function ContactSummary({ contact }: Props) {
  const createdDayText = `Contacted at ${differenceInDays(contact.contactedAt, Date.now())}`;

  return (
    <div className="flex flex-row rounded-lg shadow-lg bg-font bg-opacity-20">
      <div className="flex flex-col gap-2">
        <span className="text-xs text-font text-opacity-80">{createdDayText}</span>
        <span className="text-lg font-bold">{contact.adTitle}</span>
        <span className="text-xs">
          {contact.landlord.firstName} {contact.landlord.lastName}
          |
          {contact.address}
        </span>
      </div>
    </div>
  );
}