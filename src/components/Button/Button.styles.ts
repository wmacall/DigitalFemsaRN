import {StyleSheet} from 'react-native';
import {COLORS} from '../../assets';
import {theme} from '../../utils';

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.BLUE_RIBBON,
    height: theme.scaleHeight(50),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: theme.scaleWidth(10),
  },
  full: {
    width: '100%',
  },
  small: {
    width: theme.scaleWidth(170),
  },
});
