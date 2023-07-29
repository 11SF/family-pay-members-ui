export function stringToDateType(strDate: string): Date {
  return new Date(strDate);
}

export function getDateFormat(date: Date): string {
  return date.toLocaleDateString('th-TH')
}

export function getDateThaiFormat(date: Date): string {
  return date.toLocaleDateString('th-TH', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export const getCountdownExpire = (memberExpire: Date) => {
  const now = new Date();

  const diffTime = memberExpire.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
};