import { eachDayOfInterval, startOfMonth, endOfMonth, format } from "date-fns";

export const eachDaysOfMonth = (day: Date | number) => {
  return eachDayOfInterval({
    start: startOfMonth(day),
    end: endOfMonth(day),
  }).map((date) => date.getTime());
};

export const toDateInputFormat = (date: number) => {
  return format(date, "yyyy-MM-dd");
};
