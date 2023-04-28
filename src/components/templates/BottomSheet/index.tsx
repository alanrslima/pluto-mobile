import React, {forwardRef, useImperativeHandle, useState} from 'react';
import {Modal as RNModal, TouchableWithoutFeedback, View} from 'react-native';
import {useStyle} from '../../../hooks/useStyle';
import {bottomSheetStyles} from './styles';
import {BottomSheetHandle, BottomSheetProps} from './types';
import {Header} from '../../molecules/Header';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Text} from '../../atoms/Text';
import {Button} from '../../atoms/Button';
import {Spacer} from '../../atoms/Spacer';
import {useTheme} from '../../../hooks/useTheme';

export const BottomSheet = forwardRef<BottomSheetHandle, BottomSheetProps>(
  (props, ref) => {
    const [visible, setVisible] = useState(false);
    const styles = useStyle(bottomSheetStyles);
    const {bottom} = useSafeAreaInsets();
    const {spaces, colors} = useTheme();
    const [values, setValues] = useState<BottomSheetProps>();

    function show(params: BottomSheetProps) {
      setVisible(true);
      setValues(params);
    }

    function hide() {
      setVisible(false);
    }

    useImperativeHandle(ref, () => ({
      show,
      hide,
    }));

    return (
      <RNModal
        transparent
        animationType="slide"
        onRequestClose={hide}
        visible={visible}>
        <View style={styles.backdrop}>
          <TouchableWithoutFeedback onPress={hide}>
            <View style={styles.full} />
          </TouchableWithoutFeedback>
          <View style={[styles.container, {paddingBottom: bottom}]}>
            <Header
              rightButtons={[{name: 'x', onPress: hide}]}
              useStatusBarHeight={false}
              title={values?.title}
            />
            <View style={styles.content}>
              <Text style={styles.description}>{values?.description}</Text>
              <Spacer height={spaces[6]} />
              <Button
                title="Ok"
                color={colors.whiteA900}
                textColor={colors.negative600}
                onPress={hide}
              />
            </View>
          </View>
        </View>
      </RNModal>
    );
  },
);
