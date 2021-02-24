export const getCurrentWeekDates = () => {
  const today = new Date();

  // Start from Mon instead of Sun
  const firstDay = today.getDate() - today.getDay() + 1;

  return new Array(7).fill(undefined).map((_, index) => {
    return new Date(new Date().setDate(firstDay + index));
  });
};

export const getDate2Digits = (date: Date) =>
  date.toLocaleString('en-us', { day: '2-digit' });

export const getWeekDay = (date: Date) =>
  date.toLocaleString('en-us', { weekday: 'short' });

export const isToday = (date: Date) => {
  const today = new Date();
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};
