import {Month} from '../../../types/Month';

export type MonthPickerProps = {
  defaultMonth?: Date;
  onChange: (month: Month) => void;
};
