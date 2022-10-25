import React, { useState } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import Calendar from "./components/Calendar";
import Header from "./components/Header";
import SectionHeader from "./components/SectionHeader";
import FlatVisitList from "./components/FlatVisitList";
import ContactDomain from "./domain/contact";
import CreateEditContactModal from "./components/Modal/CreateEditContactModal";

export default function App() {
  const [selectedDate, setSelectedDate] = useState(Date.now());
  const contacts = useLiveQuery(() => ContactDomain.getContacts, []);
  return (
    <div className="bg-background fixed inset-0 flex flex-col items-stretch">
      <Header />
      <div className="flex flex-col items-stretch px-2">
        <SectionHeader title="Flat visit Calendar" />
        <Calendar onSelectDate={setSelectedDate} date={selectedDate} />
        <SectionHeader title="Flat visit of the day" />
        <FlatVisitList date={selectedDate} />
        <CreateEditContactModal />
      </div>
    </div>
  );
}
