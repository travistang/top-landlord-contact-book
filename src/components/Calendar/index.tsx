import classNames from "classnames";
import {
  format,
  addDays,
  startOfWeek,
  startOfMonth,
  getDay,
  isSameDay,
  startOfDay,
} from "date-fns";
import React from "react";
import { range } from "../../utils/Array";
import { eachDaysOfMonth } from "../../utils/Date";
import DayCell from "./DayCell";

type Props = {
  date: number;
  markedDates: number[];
  onSelectDate?: (date: number) => void;
  className?: string;
};

export default function Calendar({
  date,
  className,
  markedDates,
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
          key={day}
          date={day}
          marked={markedDates.includes(startOfDay(day).getTime())}
          onSelect={() => onSelectDate?.(day)}
          selected={isSameDay(date, day)}
        />
      ))}
    </div>
  );
}
