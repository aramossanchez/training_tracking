interface GetAllDaysOfTheYearProps {
  selectedYear: number;
}

export const useGetAllDaysOfTheYear = ({
  selectedYear
}: GetAllDaysOfTheYearProps) => {
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
      days: dates
    });
  }

  return {
    allDaysOfTheYear
  }

}