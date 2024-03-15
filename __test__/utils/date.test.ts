import { isLeapYear } from "../../src/utils/date"

describe("utils/date", () => {
  describe("isLeapYear", () => {
    test("Should return leap year for 2024", () => {
      const result = isLeapYear(2024);
      expect(result).toBe(true)
    })
    test("Should return not leap year for 2023", () => {
      const result = isLeapYear(2023);
      expect(result).toBe(false)
    })
  })
})