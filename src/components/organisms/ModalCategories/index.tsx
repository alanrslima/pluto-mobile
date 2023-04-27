import React, {forwardRef} from 'react';
import {ModalCategoriesHandle, ModalCategoriesProps} from './types';
import {Modal} from '../../templates/Modal';
import {FlatList, View} from 'react-native';
import {SimpleItem} from '../../molecules/SimpleItem';
import {useStyle} from '../../../hooks/useStyle';
import {modalCategoriesStyles} from './styles';
import {Category} from '../../../types/Category';

export const ModalCategories = forwardRef<
  ModalCategoriesHandle,
  ModalCategoriesProps
>(({onSelect}, ref) => {
  const styles = useStyle(modalCategoriesStyles);
  const categories: Category[] = [
    {id: '1', name: 'Saúde'},
    {id: '2', name: 'Educação'},
  ];

  function onPressItem(category: Category) {
    onSelect(category);
  }

  return (
    <Modal ref={ref} title="Categorias">
      <FlatList
        contentContainerStyle={styles.container}
        data={categories}
        renderItem={({item}) => (
          <View style={styles.wrapperItem}>
            <SimpleItem onPress={() => onPressItem(item)} title={item.name} />
          </View>
        )}
        keyExtractor={item => `${item.id}`}
      />
    </Modal>
  );
});
