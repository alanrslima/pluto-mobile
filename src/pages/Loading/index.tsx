import React from 'react';
import {View} from 'react-native';
import {Spinner} from '../../components/atoms/Spinner';
import {useStyle} from '../../hooks/useStyle';
import {loadingScreenStyles} from './styles';

export function LoadingScreen() {
  const styles = useStyle(loadingScreenStyles);

  return (
    <View style={styles.container}>
      <Spinner />
    </View>
  );
}
