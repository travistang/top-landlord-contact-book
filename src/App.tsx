import React, { useState } from "react";
import { startOfMonth, endOfMonth } from 'date-fns';
import { useLiveQuery } from 'dexie-react-hooks';
import { Toaster } from 'react-hot-toast';
import Calendar from "./components/Calendar";
import Header from "./components/Header";
import SectionHeader from "./components/SectionHeader";
import FlatVisitList from "./components/FlatVisitList";
import CreateEditContactModal from "./components/Modal/CreateEditContactModal";
import ContactDomain from "./domain/contact";
import { distinct } from "./utils/Array";

export default function App() {
  const [selectedDate, setSelectedDate] = useState(Date.now());
  const datesWithAppointments = useLiveQuery(async () => {
    const contacts = await ContactDomain.contacts.where('contactedAt').between(
      startOfMonth(selectedDate),
      endOfMonth(selectedDate),
    ).toArray();
    return distinct(contacts.map(con => con.contactedAt));
  }, [selectedDate]);
  console.log({ datesWithAppointments, selectedDate });
  return (
    <div className="bg-background fixed inset-0 flex flex-col items-stretch">
      <Header />
      <Toaster />
      <div className="flex flex-col items-stretch px-2">
        <SectionHeader title="Flat visit Calendar" />
        <Calendar
          markedDates={datesWithAppointments ?? []}
          onSelectDate={setSelectedDate}
          date={selectedDate}
        />
        <SectionHeader title="Flat visit of the day" />
        <FlatVisitList date={selectedDate} />
        <CreateEditContactModal />
      </div>
    </div>
  );
}
