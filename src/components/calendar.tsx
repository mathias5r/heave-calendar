import { useMemo, useState } from "react";
import { Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import colors from "../constants/colors";
import MonthSelector from "./month-selector";
import { createCalendarMatrix, isOutOfMonth } from "../utils/calendar";
import { getFontSize } from "../utils/font";

type Props = {
  onDateSelected: (date: Date) => void
}

const Calendar: React.FC<Props> = ({ onDateSelected }) => {
  const [baseDate, setBaseDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(new Date())

  const year = baseDate.getFullYear();
  const month = baseDate.getMonth();

  const matrix = useMemo(() => createCalendarMatrix(year, month), [baseDate]);

  const handleMonthChange = (value: number) => () => {
    const newDate = new Date(baseDate)
    newDate.setMonth(newDate.getMonth() + value);
    setBaseDate(newDate)
  }

  const handleItemPress = (day: number) => () => {
    const date = new Date(year, month, day);
    setSelectedDate(date)
    onDateSelected(date)
  }

  const isSelected = (day: number, row: number) => 
    !isOutOfMonth(day, row) && 
    day === selectedDate.getDate() && 
    selectedDate.getMonth() === baseDate.getMonth() && 
    selectedDate.getFullYear() === baseDate.getFullYear()

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.monthYearWrapper}>
          <Text maxFontSizeMultiplier={1.2} style={styles.month}>{baseDate.toLocaleString('default', { month: 'long' })}</Text>
          <Text maxFontSizeMultiplier={1.2} style={styles.year}>{year}</Text>
        </View>
        <MonthSelector 
          onLeftPress={handleMonthChange(-1)} 
          onRightPress={handleMonthChange(1)} 
        />
      </View>
        {matrix.map((row, rowIndex) => 
          <View key={`${row}-${rowIndex}`} style={styles.dateWrapper}>
            {row.map((item, itemIndex) => 
              <TouchableOpacity 
                  key={`${item}-${itemIndex}`}
                  disabled={isOutOfMonth(item, rowIndex)} 
                  onPress={handleItemPress(item)} 
                  style={[styles.dateButton, isOutOfMonth(item, rowIndex) && styles.disabled]}
                >
                <View style={[styles.roundView, isSelected(item, rowIndex) && styles.selected]} >
                  <Text maxFontSizeMultiplier={1.2} style={styles.date}>{item}</Text>
                </View>
              </TouchableOpacity>
            )}
          </View>
        )}
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondaryBackground,
    borderRadius: 7,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: colors.cardBorder,
    minHeight: 200,
    minWidth: 200,
  },
  month: {
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
    paddingRight: 3
  },
  date: {
    color: 'white',
    position: 'absolute',
    fontFamily: 'Poppins-SemiBold',
    fontSize: getFontSize(15),
    includeFontPadding: false
  },
  year: {
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
    fontSize: getFontSize(25),
    includeFontPadding: false,
    bottom: Platform.OS === 'ios' ? -4 : 0
  },
  header: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    paddingBottom: 12
  },
  monthYearWrapper: { 
    paddingLeft: '4%', 
    flexDirection: 'row', 
    alignItems: 'flex-end' 
  },
  dateWrapper: { 
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  dateButton: {
    width: '14.3%',
    aspectRatio: 1.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabled: { 
    opacity: 0.5 
  },
  roundView: {
    width: '80%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100
  },
  selected: { 
    backgroundColor: colors.selectedDate
  }
});

export default Calendar;