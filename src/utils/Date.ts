import { eachDayOfInterval, startOfMonth, endOfMonth, format } from 'date-fns';

export const eachDaysOfMonth = (day: Date | number) => {
  return eachDayOfInterval({
    start: startOfMonth(day),
    end: endOfMonth(day),
  });
};

export const toDateInputFormat = (date: number) => {
  return format(date, "yyyy-MM-dd");
}