import React, {useRef} from 'react';
import {View} from 'react-native';
import {ModalLocation} from '../../organisms/ModalLocation';
import {ModalLocationHandle} from '../../organisms/ModalLocation/types';
import {TextInput} from '../../atoms/TextInput';

export function LocationPicker() {
  const modalRef = useRef<ModalLocationHandle>(null);

  function showModal() {
    modalRef.current?.show();
  }

  return (
    <View>
      <TextInput label="Localização" editable={false} onPressIn={showModal} />
      <ModalLocation ref={modalRef} />
    </View>
  );
}
