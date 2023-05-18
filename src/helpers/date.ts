import {Month} from '../types/Month';

export class DateHelpers {
  addMonths(date: Date, months: number) {
    date.setMonth(date.getMonth() + months);
    return date;
  }

  getTransactionsRange(): Month[] {
    var datesArray: Month[] = [];
    const now = new Date();
    const range = 2;

    let startDate = new Date(now.getFullYear(), now.getMonth(), 1);
    startDate.setFullYear(startDate.getFullYear() - range);

    let endDate = new Date(now.getFullYear(), now.getMonth(), 1);
    endDate.setFullYear(endDate.getFullYear() + range);

    var currentDate = startDate;
    while (currentDate <= endDate) {
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth();
      datesArray.push({
        id: `${year}-${month + 1}`,
        label: '',
        startAt: new Date(currentDate),
        endAt: new Date(year, month + 1, 0),
      });
      currentDate = this.addMonths(currentDate, 1);
    }
    return datesArray;
  }
}
