import React from 'react';
import {ScrollView} from 'react-native';
import {SectionHeader} from '../../../components/atoms/SectionHeader';
import {Screen} from '../../../components/templates/Screen';
import {AccountsDetailPageProps} from './types';

export function AccountsDetailPage({navigation}: AccountsDetailPageProps) {
  return (
    <Screen navigation={navigation} header={{ rightButtons: [{  name: ''}]}}>
      <ScrollView>
        <SectionHeader title="Resultados da conta" />
      </ScrollView>
    </Screen>
  );
}
