import {DateTimePickerEvent} from '@react-native-community/datetimepicker';

export type DatePickerProps = {
  onChange: (event: DateTimePickerEvent, date?: Date | undefined) => void;
  value: Date;
};
