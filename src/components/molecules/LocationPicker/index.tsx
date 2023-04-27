import React, {useRef} from 'react';
import {View} from 'react-native';
import {ModalLocation} from '../../organisms/ModalLocation';
import {TextInput} from '../../atoms/TextInput';
import {ModalHandle} from '../../templates/Modal/types';

export function LocationPicker() {
  const modalRef = useRef<ModalHandle>(null);

  function showModal() {
    modalRef.current?.show();
  }

  return (
    <View>
      <TextInput
        placeholder="Selecione uma localização"
        label="Localização"
        editable={false}
        onPressIn={showModal}
      />
      <ModalLocation ref={modalRef} />
    </View>
  );
}
