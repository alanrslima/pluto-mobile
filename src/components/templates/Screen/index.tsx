import React from 'react';
import {View} from 'react-native';
import {useStyle} from '../../../hooks/useStyle';
import {screenStyles} from './styles';
import {ScreenProps} from './types';
import {Header} from '../../molecules/Header';
import {StatusBar} from 'expo-status-bar';

export function Screen(props: ScreenProps) {
  const styles = useStyle(screenStyles);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Header
        {...props.header}
        leftButtons={
          props.navigation.canGoBack()
            ? [{name: 'chevron-left', onPress: props.navigation.goBack}]
            : undefined
        }
      />
      {props.children}
    </View>
  );
}
