import React from 'react';
import {SectionList, View} from 'react-native';
import {StatusItem} from '../../molecules/StatusItem';
import {useStyle} from '../../../hooks/useStyle';
import {transactionsListStyles} from './styles';
import {SectionHeader} from '../../atoms/SectionHeader';
import {Transaction} from '../../../types/Transaction';
import {TransactionsListProps} from './types';

export function TransactionsList({onPressTransaction}: TransactionsListProps) {
  const styles = useStyle(transactionsListStyles);
  const data: {title: string; data: Transaction[]}[] = [
    {
      title: '02 de fev, 2023',
      data: [
        {
          account: {hexColor: 'red', id: '21312', title: 'C6', value: 100},
          category: {id: '213', name: 'Alimentação'},
          date: new Date(),
          id: '1123',
          title: 'Burguer King',
          value: 25,
          description: '',
        },
      ],
    },
  ];

  return (
    <SectionList
      sections={data}
      contentContainerStyle={styles.wrapper}
      renderItem={({section, index, item}) => (
        <View
          style={[
            styles.wrapperCard,
            index + 1 === section.data.length && styles.wrapperLastCard,
          ]}>
          <StatusItem
            title={item.title}
            description={item.category.name}
            value={item.value}
            icon="plus"
            subValue={item.account.title}
            onPress={() => onPressTransaction(item.id)}
          />
        </View>
      )}
      keyExtractor={item => `${item}`}
      renderSectionHeader={({section: {title}}) => (
        <SectionHeader title={title} />
      )}
    />
  );
}
