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

export const classnames = (...args: any[]) => {
  const classes = args.map((arg) => {
    if (typeof arg === 'string') return arg;
    if (Array.isArray(arg)) return arg.flat();
    if (typeof arg === 'object') {
      return Object.entries(arg).map(([key, value]) => {
        if (value) return key;
        return '';
      });
    }
    return '';
  });
  return classes.flat().filter(Boolean).join(' ');
};

export const randomInRange = (start: number, end: number) =>
  Math.random() * (end - start) + start;

export const randomIntegerInRange = (start: number, end: number) =>
  Math.floor(randomInRange(start, end));
