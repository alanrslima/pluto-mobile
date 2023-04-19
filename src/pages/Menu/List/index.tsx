import React from 'react';
import {Screen} from '../../../components/templates/Screen';
import {MenuListPageProps} from './types';
import {SectionList} from 'react-native';
import {SimpleItem} from '../../../components/molecules/SimpleItem';
import {SectionHeader} from '../../../components/atoms/SectionHeader';

export function MenuListPage({navigation}: MenuListPageProps) {
  const sections = [
    {
      title: 'Funcionalidades',
      data: [
        {
          id: 1,
          title: 'Metas',
          description: 'Gerencie as suas metas financeiras',
          path: '',
          icon: '',
        },
        {
          id: 2,
          title: 'Contas',
          description: 'Suas contas e cartões',
          path: '',
          icon: '',
        },
        {
          id: 3,
          title: 'Categorias',
          description: 'Categorize os seus gastos',
          path: '',
          icon: '',
        },
        {
          id: 4,
          title: 'Transações',
          description: 'Acompanhe todos os seus gastos',
          path: '',
          icon: '',
        },
        {
          id: 5,
          title: 'Contatos',
          description: 'Pessoas para compartilhar suas finanças',
          path: '',
          icon: '',
        },
      ],
    },
  ];

  return (
    <Screen navigation={navigation}>
      <SectionList
        sections={sections}
        renderSectionHeader={({section: {title}}) => (
          <SectionHeader title={title} />
        )}
        keyExtractor={item => `${item.id}`}
        renderItem={() => <SimpleItem />}
      />
    </Screen>
  );
}
