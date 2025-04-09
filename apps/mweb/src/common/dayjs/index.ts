import dayjs from 'dayjs';

export const formatDate = (date: any, format: string) => {
  if (process.env.NODE_ENV === 'production') {
    return dayjs.unix(date)?.format(format);
  }
  return dayjs(date).format(format);
};

export default formatDate;
