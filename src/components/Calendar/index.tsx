import classNames from "classnames";
import {
  format,
  addDays,
  startOfWeek,
  startOfMonth,
  getDay,
  isSameDay,
} from "date-fns";
import React from "react";
import { range } from "../../utils/Array";
import  { eachDaysOfMonth } from "../../utils/Date";
import DayCell from "./DayCell";

type Props = {
  date: Date | number;
  selectedDate?: Date;
  onSelectDate?: (date: number) => void;
  className?: string;
};

export default function Calendar({
  date,
  className,
  selectedDate,
  onSelectDate,
}: Props) {
  const now = Date.now();
  const monthStart = startOfMonth(date);
  const monthStartsAtWeekday = getDay(monthStart);
  const daysInMonth = eachDaysOfMonth(date);
  return (
    <div
      className={classNames(
        "grid grid-cols-7 text-center justify-evenly gap-x-7",
        className
      )}
    >
      {range(7).map((i) => (
        <span
          key={i}
          className={classNames("text-xs", i === 0 && "font-bold text-red-500")}
        >
          {format(addDays(startOfWeek(now), i), "EEEEEE")}
        </span>
      ))}
      {monthStartsAtWeekday > 0 &&
        range(monthStartsAtWeekday).map((i) => <span key={i} />)}
      {daysInMonth.map((day) => (
        <DayCell
          key={day.getTime()}
          date={day}
          onSelect={() => onSelectDate?.(day.getTime())}
          selected={selectedDate && isSameDay(selectedDate, day)}
        />
      ))}
    </div>
  );
}