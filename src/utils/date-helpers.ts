export const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
]

export const dayNames = [
  'S',
  'M',
  'T',
  'W',
  'T',
  'F',
  'S',
]

// This function generates a list of month and year combinations for a dropdown. No days.
export function generateMonthYearList(currentMonth: number, currentYear: number) {
  // stop after 30 years of options to choose from
  const stoppingPoint = currentYear + 30;

  const options = [{ month: monthNames[currentMonth], year: currentYear }]

  while (currentYear < stoppingPoint) {
    currentMonth++
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++
    }
    options.push({ month: monthNames[currentMonth], year: currentYear })
  }
  return options;
}

// This helper function calculates the amount of days in a month taking leap years into account
function calculateDaysInMonth(month: number, year: number) {
  if (month < 0 || month > 11) return 30;
  switch (month) {
    case 0:
    case 2:
    case 4:
    case 6:
    case 7:
    case 9:
    case 11:
      return 31;
    case 1:
      return year % 4 === 0 ? 29 : 28;
    case 3:
    case 5:
    case 8:
    case 10:
      return 30;
  }
  return 30;
}

// This function generates an array with empty strings leading into the first day of the month starting from sunday, then populates 1-amount of days in the month, then empty strings through the saturday following the last day of the month
// Example: ['', '', '', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '', '', '', ''] <-- Feb 2023
// the first was a wednesday, so we skip sunday, monday, tuesday, then populate dates until the 28th, then finish out 
export function generateCalendarMonth(date: string) {
  // date input should be: month non-indexed number (1 - 12), dash (-), day of month, dash, four digit year as string.
  const start = new Date(date);

  // startDay is what day of the week the month begins on
  const startDay = start.getDay();
  // startDate is the actual date of the input
  const startDate = start.getDate();
  const startMonth = start.getMonth();
  const startYear = start.getFullYear();

  const dates = [];

  let pad = 0;
  while (pad < startDay) {
    dates.push('');
    pad++
  }

  for (let i = 1; i <= calculateDaysInMonth(startMonth, startYear); i++) {
    dates.push(String(i));
  }

  while (dates.length < 35) {
    dates.push('')
  }

  return dates;
}

