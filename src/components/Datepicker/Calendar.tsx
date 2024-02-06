import React from 'react'
import styles from './Calendar.module.css';
import { generateCalendarMonth } from '@/utils/date-helpers'

type SelectedDate = {
  day: number,
  month: number,
  year: number,
}

type CalendarProps = {
  selectedDate: SelectedDate;
  selectDay: (newDay: number) => void;
  activeDate: SelectedDate;
}

function Calendar({ selectedDate, selectDay, activeDate }: CalendarProps) {

  const { day, month, year } = selectedDate;

  const calendarMonth = generateCalendarMonth(month + 1, day, year);

  function highlightActiveDate(day: number) {
    return month === activeDate.month && year === activeDate.year && day === activeDate.day;
  }

  return (
    <div className={styles.container}>
      {calendarMonth.map((day, index) => {
        return <button disabled={day === ''} onClick={() => selectDay(Number(day))} className={highlightActiveDate(Number(day)) ? styles.activeDate : styles.dates} key={`${day}-${index}`}>{day}</button>
      })

      }
    </div>
  )
}

export default Calendar
