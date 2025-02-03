export class Date {
 private day: number;
 private month: number;
 private year: number;

 public constructor(day: number, month: number, year: number) {
  this.day = day;
  this.month = month;
  this.year = year;
 }

 public getDay(): number {
  return this.day;
 }
 public getMonth(): number {
  return this.month;
 }
 public getYear(): number {
  return this.year;
 }

 public printFormat(): string {
  const day = this.addPadding(this.day);
  const month = this.addPadding(this.month)
  return `${day}/${month}/${this.year}`;
 }
 public add(amount: number, type: 'day' | 'month' | 'year'): Date {
  let newDay = this.day;
  let newMonth = this.month;
  let newYear = this.year;

  if (type === 'day') {
   newDay += amount;
  }
  if (type === 'month') {
   newMonth += amount;
  }
  if (type === 'year') {
   newYear += amount;
  }

  const newDate = new Date(newDay, newMonth, newYear);
  return newDate;
 }

 public addDays(days: number): Date {
  const newDate = new Date(this.day + days, this.month, this.year);
  return newDate;
 }

 private addPadding(value: number): string {
  if (value < 10) {
   return `0${value}`;
  }
  return `${value}`;
 }
}

const myDate = new Date(21, 7, 2024);

console.log('El mes es: ', myDate.getMonth());
console.log('La fecha es: ', myDate.printFormat());
console.log('La fecha es: ', myDate.add(5, 'day').printFormat());
console.log('La fecha es: ', myDate.add(5, 'month').printFormat());
console.log('El dia es: ', myDate.getDay());

