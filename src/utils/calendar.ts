import { MAX_MONTH_DAYS, MAX_MONTH_DAYS_LEAP_YEAR } from "../constants/date";
import { isLeapYear } from "./date";

const getMaxDays = (year: number, month: number): number[] => {
  const maxDays = isLeapYear(year) ? MAX_MONTH_DAYS_LEAP_YEAR : MAX_MONTH_DAYS;
  return [maxDays[11], ...maxDays].slice(month, month + 2)
}

export const createCalendarMatrix = (year: number, month: number): number[][] => {
  const matrix: number[][] = []

  const firstDay = new Date(year, month, 1).getDay();
  const [prevMaxDays, currentMaxDays] = getMaxDays(year, month)

  let count = 1;
  for (let row = 1; row < 7; row++) {
    matrix[row] = [];
    for (let col = 0; col < 7; col++) {
      if(row === 1) {
        if(col >= firstDay) {
          matrix[row][col] = count++;
        } else {
          matrix[row][col] = (prevMaxDays + 1) - (firstDay - col)
        }
      } else {
        if(count <= currentMaxDays) {
          matrix[row][col] = count++;
        } else {
          matrix[row][col] = count - currentMaxDays
          count++
        }
      }
    }
  }

  return matrix
}

export const isOutOfMonth = (day: number, row: number) => {
  if(row === 1 && day > 7) return true;
  if(row >= 5 && day < 14) return true;
  return false;
}