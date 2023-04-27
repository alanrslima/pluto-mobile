import React, {useRef} from 'react';
import {View} from 'react-native';
import {TextInput} from '../../atoms/TextInput';
import {ModalCategories} from '../../organisms/ModalCategories';
import {Category} from '../../../types/Category';
import {CategoryPickerProps} from './types';
import {ModalHandle} from '../../templates/Modal/types';

export function CategoryPicker({onSelect, value}: CategoryPickerProps) {
  const modalRef = useRef<ModalHandle>(null);

  function showModal() {
    modalRef.current?.show();
  }

  function hideModal() {
    modalRef.current?.hide();
  }

  function onSelectCategory(category: Category) {
    hideModal();
    onSelect(category);
  }

  return (
    <View>
      <TextInput
        placeholder="Selecione uma categoria"
        label="Categoria"
        editable={false}
        onPressIn={showModal}
        value={value}
      />
      <ModalCategories onSelect={onSelectCategory} ref={modalRef} />
    </View>
  );
}
