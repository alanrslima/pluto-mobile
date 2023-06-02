import React, {useRef} from 'react';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import {DatePickerProps} from './types';
import {TextInput} from '../../atoms/TextInput';
import {Modal} from '../../templates/Modal';
import {ModalHandle} from '../../templates/Modal/types';
import {useTheme} from '../../../hooks/useTheme';
import {View} from 'react-native';
import {useStyle} from '../../../hooks/useStyle';
import {datePickerStyles} from './styles';

export function DatePicker(props: DatePickerProps) {
  const refModal = useRef<ModalHandle>(null);
  const {colors} = useTheme();
  const styles = useStyle(datePickerStyles);

  function showModal() {
    refModal.current?.show();
  }

  function onChange(event: DateTimePickerEvent, date?: Date) {
    refModal.current?.hide();
    props.onChange(event, date);
  }

  return (
    <>
      <TextInput
        label="Data"
        value={props.value?.toLocaleDateString()}
        editable={false}
        onPressIn={showModal}
        placeholder="Selecione uma data"
      />

      <Modal title="Data" ref={refModal}>
        <View style={styles.wrapper}>
          <DateTimePicker
            testID="dateTimePicker"
            value={props.value}
            mode="date"
            textColor="#FFF"
            accentColor={colors.primary}
            // is24Hour={true}
            themeVariant="dark"
            display="inline"
            onChange={onChange}
          />
        </View>
      </Modal>
    </>
  );
}
