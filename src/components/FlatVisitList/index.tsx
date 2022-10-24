import React from 'react';
import { isSameDay } from 'date-fns';
import { useContactDomainFilter } from '../../domain/contact';
import ContactSummary from '../../components/ContactSummary';

type Props = {
  date: number;
};
export default function FlatVisitList({ date }: Props) {
  const appointmentsOfDay = useContactDomainFilter(
    (contact) => !!contact.visitingAppointment && isSameDay(date, contact.visitingAppointment)
  );

  return (
    <div className="p-4 flex-1 flex flex-col overflow-y-auto items-stretch">
      {appointmentsOfDay?.length === 0 && (
        <span className="w-full h-full flex items-center justify-center text-xs">
          You have no appointments on this day.
        </span>
      )}
      {appointmentsOfDay.map(contact => (
        <ContactSummary key={contact.id} contact={contact}  />
      ))}
</div>
 )
}