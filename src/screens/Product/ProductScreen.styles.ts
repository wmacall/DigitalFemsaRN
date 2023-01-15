import {StyleSheet} from 'react-native';
import {COLORS} from '../../assets';
import {theme} from '../../utils';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: COLORS.PERIWINKLE,
  },
  containerHeader: {
    marginTop: theme.scaleHeight(69),
    marginBottom: theme.scaleHeight(24),
    paddingLeft: theme.scaleWidth(20),
  },
  containerImage: {
    marginTop: theme.scaleHeight(19),
    marginBottom: theme.scaleHeight(32),
    width: theme.scaleWidth(353),
    height: theme.scaleHeight(350),
    backgroundColor: COLORS.WHITE,
    shadowColor: COLORS.BLACK,
    alignSelf: 'center',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.45,
    shadowRadius: 0.84,
    elevation: 5,
    borderRadius: theme.scaleWidth(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: theme.scaleWidth(200),
    height: theme.scaleHeight(200),
  },
  containerContent: {
    paddingHorizontal: theme.scaleWidth(20),
  },
  textDatePurchase: {
    marginVertical: theme.scaleHeight(20),
  },
  textPoints: {
    marginTop: theme.scaleHeight(32),
    marginBottom: theme.scaleHeight(47),
  },
});
