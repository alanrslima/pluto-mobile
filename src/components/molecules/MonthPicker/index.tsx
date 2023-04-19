import React, {useRef, useState} from 'react';
import {FlatList, LayoutRectangle, View} from 'react-native';
import {SimpleButton} from '../../atoms/SimpleButton';
import {Month} from '../../../types/Month';
import {useStyle} from '../../../hooks/useStyle';
import {monthPickerStyles} from './styles';
import {useTheme} from '../../../hooks/useTheme';
import {LinearGradient} from 'expo-linear-gradient';

export function MonthPicker() {
  const [scrollLayout, setScrollLayout] = useState<LayoutRectangle>();
  const styles = useStyle(monthPickerStyles);
  const flatListRef = useRef<FlatList>(null);
  const {colors} = useTheme();
  const data = [
    {label: 'Jan, 23', startDate: new Date(), endDate: new Date()},
    {label: 'Fev, 23', startDate: new Date(), endDate: new Date()},
    {label: 'Mar, 23', startDate: new Date(), endDate: new Date()},
    {label: 'Abr, 23', startDate: new Date(), endDate: new Date()},
    {label: 'Mai, 23', startDate: new Date(), endDate: new Date()},
    {label: 'Jun, 23', startDate: new Date(), endDate: new Date()},
    {label: 'Jul, 23', startDate: new Date(), endDate: new Date()},
    {label: 'Ago, 23', startDate: new Date(), endDate: new Date()},
    {label: 'Set, 23', startDate: new Date(), endDate: new Date()},
    {label: 'Out, 23', startDate: new Date(), endDate: new Date()},
    {label: 'Nov, 23', startDate: new Date(), endDate: new Date()},
    {label: 'Dez, 23', startDate: new Date(), endDate: new Date()},
    {label: 'Jan, 24', startDate: new Date(), endDate: new Date()},
    {label: 'Fev, 24', startDate: new Date(), endDate: new Date()},
    {label: 'Mar, 24', startDate: new Date(), endDate: new Date()},
    {label: 'Abr, 24', startDate: new Date(), endDate: new Date()},
    {label: 'Mai, 24', startDate: new Date(), endDate: new Date()},
    {label: 'Jun, 24', startDate: new Date(), endDate: new Date()},
    {label: 'Jul, 24', startDate: new Date(), endDate: new Date()},
    {label: 'Ago, 24', startDate: new Date(), endDate: new Date()},
    {label: 'Set, 24', startDate: new Date(), endDate: new Date()},
  ];
  const [currentMonth, setCurrentMonth] = useState<Month>();

  function onPressItem(month: Month) {
    flatListRef.current?.scrollToItem({
      item: month,
      animated: true,
      viewPosition: 0.5,
    });
    setCurrentMonth(month);
  }

  return (
    <View>
      <FlatList
        bounces={false}
        onLayout={evt => setScrollLayout(evt.nativeEvent.layout)}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: (scrollLayout?.width || 0) / 2,
        }}
        horizontal
        ref={flatListRef}
        data={data}
        keyExtractor={item => `${item.label}`}
        renderItem={({item}) => (
          <SimpleButton
            selected={item.label === currentMonth?.label}
            onPress={() => onPressItem(item)}
            title={item.label}
          />
        )}
      />
      <LinearGradient
        pointerEvents="none"
        colors={[
          colors.background,
          'transparent',
          'transparent',
          colors.background,
        ]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.shadow}
      />
    </View>
  );
}
