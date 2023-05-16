import React from 'react';
import {View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {useStyle} from '../../../hooks/useStyle';
import {mapCardStyles} from './styles';

export function MapCard() {
  const styles = useStyle(mapCardStyles);

  return (
    <View style={styles.wrapper}>
      <MapView
        pitchEnabled={false}
        zoomEnabled={false}
        scrollEnabled={false}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.map}>
        <Marker
          coordinate={{latitude: 37.78825, longitude: -122.4324}}
          title="Titulo"
          description="Descrição"
        />
      </MapView>
    </View>
  );
}
