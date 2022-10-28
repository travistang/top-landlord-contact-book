import React from "react";
import { useLiveQuery } from "dexie-react-hooks";
import ContactSummary from "../../components/ContactSummary";
import ContactDomain from "../../domain/contact";
import { isSameDay } from "date-fns";

type Props = {
  date: number;
};
export default function FlatVisitList({ date }: Props) {
  const appointmentsOfDay = useLiveQuery(async () => {
    return (await ContactDomain.getContacts())
      .filter((contact) => {
        return !!contact.appointment?.time &&
          isSameDay(contact.appointment.time, date)
      } )
  }, [date]);

  return (
    <div className="p-4 flex-1 flex flex-col overflow-y-auto items-stretch">
      {appointmentsOfDay?.length === 0 && (
        <span className="w-full h-full flex items-center justify-center text-xs">
          You have no appointments on this day.
        </span>
      )}
      {appointmentsOfDay?.map((contact) => (
        <ContactSummary key={contact.id} contact={contact} />
      ))}
    </div>
  );
}
