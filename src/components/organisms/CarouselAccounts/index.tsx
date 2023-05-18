import React, {useState} from 'react';

import {ScrollView, View} from 'react-native';
import {Card} from '../../molecules/Card';
import {useStyle} from '../../../hooks/useStyle';
import {carouselAccountsStyles} from './styles';

export function CarouselAccounts() {
  const accounts = [1, 2, 3, 4];
  const [width, setWidth] = useState(0);
  const [activedIndex, setActivedIndex] = useState(0);

  const styles = useStyle(carouselAccountsStyles);

  return (
    <View
      onLayout={evt => setWidth(evt.nativeEvent.layout.width)}
      style={styles.container}>
      <ScrollView
        horizontal
        onScroll={evt =>
          setActivedIndex(Math.round(evt.nativeEvent.contentOffset.x / width))
        }
        scrollEventThrottle={3}
        showsHorizontalScrollIndicator={false}
        pagingEnabled>
        {accounts.map(account => (
          <View key={account} style={{width}}>
            <Card
              title="NuBank"
              type="Conta corrente"
              value={100}
              hexColor="#436a21"
            />
          </View>
        ))}
      </ScrollView>
      <View style={styles.wrapperIndicators}>
        {accounts.map((indicator, index) => (
          <View
            key={indicator}
            style={[
              styles.indicator,
              index === activedIndex && styles.activedIndicator,
            ]}
          />
        ))}
      </View>
    </View>
  );
}
