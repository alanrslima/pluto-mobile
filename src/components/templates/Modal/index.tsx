import React, {forwardRef, useImperativeHandle, useState} from 'react';
import {Modal as RNModal, View} from 'react-native';
import {useStyle} from '../../../hooks/useStyle';
import {modalLocationStyles} from './styles';
import {ModalHandle, ModalProps} from './types';
import {Header} from '../../molecules/Header';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const Modal = forwardRef<ModalHandle, ModalProps>((props, ref) => {
  const [visible, setVisible] = useState(false);
  const styles = useStyle(modalLocationStyles);
  const {bottom} = useSafeAreaInsets();

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
    <RNModal
      presentationStyle="pageSheet"
      animationType="slide"
      onRequestClose={hide}
      visible={visible}>
      <View style={[styles.container, {paddingBottom: bottom}]}>
        <Header
          rightButtons={[{name: 'x', onPress: hide}]}
          useStatusBarHeight={false}
          title={props.title}
        />
        {props.children}
      </View>
    </RNModal>
  );
});
