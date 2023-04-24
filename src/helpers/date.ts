import {Month} from '../types/Month';

export class DateHelpers {
  addMonths(date: Date, months: number) {
    date.setMonth(date.getMonth() + months);
    return date;
  }

  getTransactionsRange(): Month[] {
    var datesArray: Month[] = [];
    const now = new Date();

    let startDate = new Date(now.getFullYear(), now.getMonth(), 1);
    startDate.setFullYear(startDate.getFullYear() - 10);

    let endDate = new Date(now.getFullYear(), now.getMonth(), 1);
    endDate.setFullYear(endDate.getFullYear() + 10);

    var currentDate = startDate;
    while (currentDate <= endDate) {
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth();
      datesArray.push({
        id: `${year}-${month}`,
        label: '',
        startAt: currentDate,
        endAt: new Date(year, month + 1, 0),
      });
      currentDate = this.addMonths(currentDate, 1);
    }
    return datesArray;
  }
}
