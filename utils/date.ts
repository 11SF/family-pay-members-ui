export function stringToDateType(strDate: string): Date {
  return new Date(strDate);
}

export function getDateFormat(date: Date): string {
  return date.toLocaleDateString('th-TH')
}