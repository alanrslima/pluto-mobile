import React from 'react';
import {View} from 'react-native';
import {useStyle} from '../../../hooks/useStyle';
import {screenStyles} from './styles';
import {ScreenProps} from './types';
import {Header} from '../../molecules/Header';
import {StatusBar} from 'expo-status-bar';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Spinner} from '../../atoms/Spinner';

export function Screen(props: ScreenProps) {
  const styles = useStyle(screenStyles);

  const {bottom} = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        props.useBottomSafeArea && {paddingBottom: bottom},
      ]}>
      <StatusBar style="light" />
      <Header
        {...props.header}
        leftButtons={
          props.navigation && props.navigation.canGoBack()
            ? [{name: 'chevron-left', onPress: props.navigation.goBack}]
            : undefined
        }
      />
      {props.isLoading ? <Spinner /> : props.children}
    </View>
  );
}
