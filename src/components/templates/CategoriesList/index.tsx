import React from 'react';
import {FlatList} from 'react-native';
import {SimpleItem} from '../../molecules/SimpleItem';
import {useStyle} from '../../../hooks/useStyle';
import {categoriesListStyles} from './styles';
import {CategoriesListProps} from './types';

export function CategoriesList({
  categories,
  onPressCategory,
}: CategoriesListProps) {
  const styles = useStyle(categoriesListStyles);

  return (
    <FlatList
      contentContainerStyle={styles.wrapper}
      data={categories}
      keyExtractor={item => `${item.id}`}
      renderItem={({item}) => (
        <SimpleItem
          icon="shuffle"
          color={item.color}
          onPress={() => onPressCategory(item)}
          title={item.name}
        />
      )}
    />
  );
}
