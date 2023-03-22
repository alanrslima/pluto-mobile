import React, {useState} from 'react';
import {DeviceContext} from './context';
import {View, StyleSheet, LayoutChangeEvent, Dimensions} from 'react-native';

import {DeviceProviderProps} from './types';
import {DeviceProps, OrientationEnum, SizeEnum} from '../../types/Device';

export const DeviceProvider: React.FC<DeviceProviderProps> = ({children}) => {
  const [device, setDevice] = useState<DeviceProps>({} as DeviceProps);

  const calculateSize = (width: number) => {
    if (width > 1000) {
      return SizeEnum.Large;
    } else if (width > 600) {
      return SizeEnum.Medium;
    }
    return SizeEnum.Small;
  };

  const onLayout = (event: LayoutChangeEvent) => {
    const {width, height} = event.nativeEvent.layout;
    const windowDimension = Dimensions.get('window');
    const orientation =
      windowDimension.width > windowDimension.height
        ? OrientationEnum.Landscape
        : OrientationEnum.Portrait;

    const value: DeviceProps = {
      orientation,
      size: calculateSize(width),
      width,
      height,
      scale: windowDimension.scale,
      fontScale: windowDimension.fontScale,
      statusBarHeight: 0,
      bottomSpace: 0,
      isDarkMode: true,
    };

    setDevice(prevState => {
      if (JSON.stringify(prevState) === JSON.stringify(value)) {
        return prevState;
      }
      return value;
    });
  };

  return (
    <DeviceContext.Provider value={device}>
      <View onLayout={onLayout} style={style.wrapper}>
        {device !== null && children}
      </View>
    </DeviceContext.Provider>
  );
};

const style = StyleSheet.create({
  wrapper: {flex: 1, width: '100%', height: '100%'},
});
