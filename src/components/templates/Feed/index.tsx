import React from 'react';
import {ScrollView, View} from 'react-native';
import {MonthPicker} from '../../molecules/MonthPicker';
import {CarouselAccounts} from '../../organisms/CarouselAccounts';
import {SectionHeader} from '../../atoms/SectionHeader';
import {useStyle} from '../../../hooks/useStyle';
import {feedStyles} from './styles';
import {Stat} from '../../molecules/Stat';
import {StatusItem} from '../../molecules/StatusItem';
import {VictoryBar, VictoryChart, VictoryTheme} from 'victory-native';

export function Feed() {
  const styles = useStyle(feedStyles);

  const data = [
    {quarter: 1, earnings: 13000},
    {quarter: 2, earnings: 16500},
    {quarter: 3, earnings: 14250},
    {quarter: 4, earnings: 19000},
  ];

  return (
    <View style={styles.container}>
      <MonthPicker />
      <ScrollView contentContainerStyle={styles.wrapperScroll}>
        <SectionHeader title="Minhas contas" />
        <CarouselAccounts />
        <SectionHeader title="Resultado do mês" />
        <View style={styles.row}>
          <Stat />
          <Stat />
        </View>
        <SectionHeader title="Últimas transações" />
        <StatusItem
          title="Burguer King"
          value={100}
          subValue="27 de Maio"
          description="Alimentação"
        />
        <StatusItem
          title="Burguer King"
          value={100}
          subValue="27 de Maio"
          description="Alimentação"
        />
        <StatusItem
          title="Burguer King"
          value={-100}
          subValue="27 de Maio"
          description="Alimentação"
        />
        <VictoryChart width={350} theme={VictoryTheme.material}>
          <VictoryBar data={data} x="quarter" y="earnings" />
        </VictoryChart>
      </ScrollView>
    </View>
  );
}
