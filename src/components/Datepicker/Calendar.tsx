import React from 'react'
import styles from './Calendar.module.css';


import { generateCalendarMonth } from '@/utils/date-helpers'

type CalendarProps = {
  startDate: string;
}

function Calendar({ startDate }: CalendarProps) {

  const month = generateCalendarMonth(startDate);

  return (
    <div className={styles.container}>
      {/* <button onClick={() => console.log(generateCalendarMonth(startDate))} >Console.log</button> */}
      {month.map((day, index) => {
        return <p className={styles.dates} key={`${day}-${index}`}>{day}</p>
      })

      }
    </div>
  )
}

export default Calendar
