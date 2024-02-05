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