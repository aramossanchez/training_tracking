interface GetDatesProps {
  selectedYear: number;
  selectedMonth?: number;
}

export const GetDates = ({
  selectedYear,
  selectedMonth
}: GetDatesProps) => {
  const MONTHS = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const allDaysOfTheYear = [];
  for (let month = 0; month < 12; month++) {
    const daysCount = new Date(selectedYear, month + 1, 0).getDate();
    const dates = [];
    for (let day = 1; day <= daysCount; day++) {
      dates.push(new Date(selectedYear, month, day))
    }
    allDaysOfTheYear.push({
      month: MONTHS[month],
      month_number: month,
      days: dates
    });
  }

  let allDaysOfTheMonth: {month: string, month_number: number, days: Date[]} = {month: "", month_number: 0, days: []};
  if (selectedMonth) {
    const daysCount = new Date(selectedYear, selectedMonth + 1, 0).getDate();
    const dates: Date[] = [];
    for (let day = 1; day <= daysCount; day++) {
      dates.push(new Date(selectedYear, selectedMonth, day))
    }
    allDaysOfTheMonth = {
      month: MONTHS[selectedMonth],
      month_number: selectedMonth,
      days: dates
    }
  }

  return {
    allDaysOfTheYear,
    allDaysOfTheMonth
  }

}