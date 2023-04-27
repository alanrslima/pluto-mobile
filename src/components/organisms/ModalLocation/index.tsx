import React, {forwardRef} from 'react';

import {ModalLocationHandle, ModalLocationProps} from './types';

import {Modal} from '../../templates/Modal';
import {ScrollView} from 'react-native';

export const ModalLocation = forwardRef<
  ModalLocationHandle,
  ModalLocationProps
>((props, ref) => {
  return (
    <Modal ref={ref} title="Localização">
      <ScrollView />
    </Modal>
  );
});
