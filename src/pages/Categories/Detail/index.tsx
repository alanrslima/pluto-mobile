import React from 'react';
import {Screen} from '../../../components/templates/Screen';
import {CategoryDetail} from '../../../components/templates/CategoryDetail';
import {CategoriesDetailPageProps} from './types';

export function CategoriesDetailPage({navigation}: CategoriesDetailPageProps) {
  return (
    <Screen navigation={navigation} header={{title: 'Categoria'}}>
      <CategoryDetail category={undefined} />
    </Screen>
  );
}
