import {StyleSheet} from 'react-native';
import {COLORS} from '../../assets';
import {theme} from '../../utils';

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.BLUE_RIBBON,
    width: theme.scaleWidth(286),
    height: theme.scaleHeight(143),
    borderRadius: theme.scaleWidth(20),
    alignSelf: 'center',
    paddingHorizontal: theme.scaleWidth(19),
    paddingVertical: theme.scaleHeight(21),
    shadowColor: COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.59,
    shadowRadius: 4.65,

    elevation: 10,
  },
  points: {
    alignSelf: 'center',
  },
});
