import { eachDayOfInterval, startOfMonth, endOfMonth } from 'date-fns';

export const eachDaysOfMonth = (day: Date | number) => {
  return eachDayOfInterval({
    start: startOfMonth(day),
    end: endOfMonth(day),
  });
};

