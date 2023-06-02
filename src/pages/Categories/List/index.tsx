import React from 'react';
import {CategoriesList} from '../../../components/templates/CategoriesList';
import {Screen} from '../../../components/templates/Screen';
import {useGetCategories} from '../../../services/categories/useGetCategories';
import {CategoriesListPageProps} from './types';
import {Category} from '../../../types/Category';

export function CategoriesListPage({navigation}: CategoriesListPageProps) {
  const {data, isLoading, error} = useGetCategories();

  function onPressCategory(category: Category) {
    navigation.navigate('CategoriesDetailPage', {id: category.id});
  }

  return (
    <Screen
      isLoading={isLoading}
      navigation={navigation}
      header={{title: 'Categorias'}}>
      <CategoriesList
        onPressCategory={onPressCategory}
        categories={data || []}
      />
    </Screen>
  );
}
