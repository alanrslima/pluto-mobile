import React, {forwardRef, useImperativeHandle, useState} from 'react';
import {Modal, View} from 'react-native';
import {useStyle} from '../../../hooks/useStyle';
import {modalLocationStyles} from './styles';
import {ModalLocationHandle, ModalLocationProps} from './types';
import {TextInput} from '../../atoms/TextInput';
import {Header} from '../../molecules/Header';

export const ModalLocation = forwardRef<
  ModalLocationHandle,
  ModalLocationProps
>((props, ref) => {
  const [visible, setVisible] = useState(false);
  const styles = useStyle(modalLocationStyles);

  function show() {
    setVisible(true);
  }

  function hide() {
    setVisible(false);
  }

  useImperativeHandle(ref, () => ({
    show,
    hide,
  }));

  return (
    <Modal
      presentationStyle="pageSheet"
      animationType="slide"
      onRequestClose={hide}
      visible={visible}>
      <View style={styles.container}>
        <Header title="Localização" />
        <TextInput label="teste" />
      </View>
    </Modal>
  );
});
