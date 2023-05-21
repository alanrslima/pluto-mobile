import {BottomSheetHandle} from '../components/templates/BottomSheet/types';

export function errorHandler(
  error: any,
  alertRef: React.RefObject<BottomSheetHandle>,
) {
  if (error?.response?.data) {
    alertRef?.current?.show({
      description: error?.response?.data?.message,
      title: 'Ops',
    });
  }
}
