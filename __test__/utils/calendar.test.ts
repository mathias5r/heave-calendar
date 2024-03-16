import { createCalendarMatrix, isOutOfMonth } from "../../src/utils/calendar"

describe('utils/calendar', () => {
  describe("createCalendarMatrix", () => {
    test("Should generate calendar matrix successfully", () => {
      const date = new Date("2024-03-15T00:00:00.000");
      const year = date.getFullYear();
      const month = date.getMonth()
      const result = createCalendarMatrix(year, month)
      expect(result).toEqual(
        [ 
          , 
          [25, 26, 27, 28, 29, 1, 2], 
          [3, 4, 5, 6, 7, 8, 9], 
          [10, 11, 12, 13, 14, 15, 16], 
          [17, 18, 19, 20, 21, 22, 23], 
          [24, 25, 26, 27, 28, 29, 30], 
          [31, 1, 2, 3, 4, 5, 6]
        ]
      )
    })
    test("Should generate calendar for February with leap year successfully", () => {
      const date = new Date("2024-02-15T00:00:00.000");
      const year = date.getFullYear();
      const month = date.getMonth()
      const result = createCalendarMatrix(year, month)
      expect(result).toEqual(
        [
          ,
          [28, 29, 30, 31, 1,  2,  3],
          [4, 5,  6, 7, 8, 9, 10],
          [11, 12, 13, 14, 15, 16, 17],
          [18, 19, 20, 21, 22, 23, 24],
          [25, 26, 27, 28, 29, 1, 2],
          [3, 4, 5, 6, 7, 8, 9]
        ]
      )
    })
    test('Should return a matrix representing April 2024 (30 days)', () => {
      const result = createCalendarMatrix(2024, 3);
      expect(result).toEqual(
        [
          ,
          [31, 1, 2, 3,4, 5, 6],
          [7,  8,  9, 10,11, 12, 13],
          [14, 15, 16, 17, 18, 19, 20],
          [21, 22, 23, 24, 25, 26, 27],
          [28, 29, 30, 1, 2,  3,  4],
          [5,  6,  7, 8, 9, 10, 11]
        ]
      )
    });
    test('Should return a matrix representing January 2024 (starting on Sunday)', () => {
      const result = createCalendarMatrix(2024, 0);
      expect(result).toEqual(
        [ 
          ,
          [31, 1, 2, 3, 4, 5, 6],
          [7, 8, 9, 10, 11, 12, 13],
          [14, 15, 16, 17, 18, 19, 20],
          [21, 22, 23, 24, 25, 26, 27],
          [28, 29, 30, 31, 1, 2, 3],
          [4, 5, 6, 7, 8, 9, 10]
        ]
      )
    });

    test('Should return a matrix representing August 2024 (starting on Monday)', () => {
      const result = createCalendarMatrix(2024, 7);
      expect(result).toEqual(
        [ 
          ,
          [28, 29, 30, 31, 1, 2, 3],
          [4, 5, 6, 7, 8, 9, 10],
          [11, 12, 13, 14, 15, 16, 17],
          [18, 19, 20, 21, 22, 23, 24],
          [25, 26, 27, 28, 29, 30, 31],
          [1, 2, 3, 4, 5, 6, 7]
        ]
      )
    });
    test('should throw an error for an invalid month (13)', () => {
      expect(() => {
        createCalendarMatrix(2024, 12);
      }).toThrow();
    });
  })
  describe('isOutMonth', () => {
    test('Should return out of month for days from prev and next months', () => {
      const result1 = isOutOfMonth(25, 1)
      expect(result1).toBe(true)

      const result2 = isOutOfMonth(2, 6)
      expect(result2).toBe(true)
    })

    test("Should return not out of month for day of the current month", () => {
      const result1 = isOutOfMonth(15, 3)
      expect(result1).toBe(false)
    })
  })
})