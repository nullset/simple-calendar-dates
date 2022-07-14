import dayjs from "dayjs";

function monthToDays(date, type = 0) {
  const month = date.format("MM");
  const year = date.format("YYYY");
  return Array.from(Array(date.daysInMonth()), (_, i) => {
    const day = i + 1;
    return {
      iso: `${year}-${month}-${day.toString().length === 1 ? `0${day}` : day}`,
      date: day,
      type,
    };
  });
}

export function getDates(date) {
  date = dayjs(`${date}-01`).endOf("day");
  const startOfMonth = date.day();
  const endOfMonth = date.endOf("month").day();

  let previousFillDates = [];
  let currentMonthDates = monthToDays(date);
  let nextMonthDates = [];

  if (startOfMonth) {
    const previousMonth = date.subtract(1, "month");
    const previousDates = monthToDays(previousMonth, -1);
    previousFillDates = previousDates.slice(
      previousDates.length - startOfMonth
    );
  }

  if (endOfMonth) {
    const nextMonth = date.add(1, "month");
    const nextDates = monthToDays(nextMonth, 1);

    nextMonthDates = nextDates.slice(0, 6 - endOfMonth);
  }

  return [previousFillDates, currentMonthDates, nextMonthDates].flat(Infinity);
}

export function getMatrix(date) {
  const days = getDates(date);
  return days.reduce((acc) => {
    const result = days.splice(0, 7);
    if (result) acc.push(result);
    return acc;
  }, []);
}
