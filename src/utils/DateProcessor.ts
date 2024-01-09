import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  getDay,
  addDays,
} from "date-fns";

enum WeekDay {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

function generateDates(
  year: number,
  month: number,
  weekStartIndex: WeekDay
): Date[] {
  const start = startOfMonth(new Date(year, month - 1));
  const end = endOfMonth(new Date(year, month - 1));
  const adjustedStart = addDays(start, weekStartIndex - getDay(start));
  const adjustedEnd = addDays(end, 6 + weekStartIndex - getDay(end));
  const dates = eachDayOfInterval({ start: adjustedStart, end: adjustedEnd });

  return dates;
}

export default generateDates;
