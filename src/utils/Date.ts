import { eachDayOfInterval, startOfMonth, endOfMonth, format } from "date-fns";
import de from 'date-fns/locale/de';

export const eachDaysOfMonth = (day: Date | number) => {
  return eachDayOfInterval({
    start: startOfMonth(day),
    end: endOfMonth(day),
  }).map((date) => date.getTime());
};

export const toDateInputFormat = (date: number | null, withTime?: boolean) => {
  if (!date) {
    return '';
  }
  const formatString = withTime ? "yyyy-MM-dd'T'HH:mm" : "yyyy-MM-dd";
  return format(date, formatString, { locale: de });
};
