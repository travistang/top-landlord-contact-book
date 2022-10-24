import React, { useState } from 'react';
import Calendar from './components/Calendar';
import Header from './components/Header';
import SectionHeader from './components/SectionHeader';
import FlatVisitList from './components/FlatVisitList';

export default function App() {
  const [selectedDate, setSelectedDate] = useState(Date.now());
  return (
    <div className="bg-background fixed inset-0 flex flex-col items-stretch">
      <Header />
      <div className="flex flex-col items-stretch px-2">
        <SectionHeader title="Flat visit Calendar" />
        <Calendar onSelectDate={setSelectedDate} date={selectedDate} />
        <SectionHeader title="Flat visit of the day" />
        <FlatVisitList date={selectedDate} />
      </div>
    </div>
  );
}
