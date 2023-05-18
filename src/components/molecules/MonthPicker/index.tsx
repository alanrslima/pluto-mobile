import React, {useEffect, useRef, useState} from 'react';
import {FlatList, LayoutRectangle, View} from 'react-native';
import {SimpleButton} from '../../atoms/SimpleButton';
import {Month} from '../../../types/Month';
import {useStyle} from '../../../hooks/useStyle';
import {monthPickerStyles} from './styles';
import {useTheme} from '../../../hooks/useTheme';
import {LinearGradient} from 'expo-linear-gradient';
import {DateHelpers} from '../../../helpers/date';
import {MonthPickerProps} from './types';

export function MonthPicker({onChange}: MonthPickerProps) {
  const [scrollLayout, setScrollLayout] = useState<LayoutRectangle>();
  const styles = useStyle(monthPickerStyles);
  const flatListRef = useRef<FlatList>(null);
  const {colors} = useTheme();
  const dateHelpers = new DateHelpers();
  const data = dateHelpers.getTransactionsRange();
  const [currentMonth, setCurrentMonth] = useState<Month>();

  function handleScroll(item: Month) {
    flatListRef.current?.scrollToItem({
      item,
      animated: true,
      viewPosition: 0.5,
    });
  }

  function onPressItem(month: Month) {
    handleScroll(month);
    setCurrentMonth(month);
    onChange(month);
  }

  return (
    <View>
      <FlatList
        bounces={false}
        onScrollToIndexFailed={info => console.log('failed', info)}
        onLayout={evt => setScrollLayout(evt.nativeEvent.layout)}
        showsHorizontalScrollIndicator={false}
        // getItemLayout={(_, index) => ({
        //   length: 85,
        //   offset: 85 * index,
        //   index,
        // })}
        // initialScrollIndex={getInitialScrollIndex()}
        contentContainerStyle={{
          paddingHorizontal: (scrollLayout?.width || 0) / 2,
        }}
        horizontal
        ref={flatListRef}
        data={data}
        keyExtractor={item => `${item.id}`}
        renderItem={({item}) => (
          <SimpleButton
            color={
              item.id === currentMonth?.id ? colors.primary : 'transparent'
            }
            onPress={() => onPressItem(item)}
            title={item.id}
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
