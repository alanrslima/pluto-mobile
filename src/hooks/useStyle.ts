import {useDevice} from './useDevice';
import {useTheme} from './useTheme';

type ThemeType<T> = (t: any, d: any) => T;

export const useStyle = <T = any>(type: ThemeType<T>): T => {
  const theme = useTheme();
  const device = useDevice();
  const style = type(theme, device) as T;
  return style;
};
