import {StyleSheet} from 'react-native';
import {theme} from '../../utils';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: theme.scaleHeight(8),
    paddingRight: theme.scaleWidth(7),
    paddingLeft: theme.scaleWidth(10),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerImage: {
    width: theme.scaleWidth(55),
    height: theme.scaleHeight(55),
    borderRadius: theme.scaleWidth(10),
    overflow: 'hidden',
  },
  image: {
    width: theme.scaleWidth(55),
    height: theme.scaleHeight(55),
  },
  containerText: {
    marginLeft: theme.scaleWidth(11),
  },
  textTitle: {
    marginBottom: theme.scaleHeight(7),
  },
  arrow: {
    marginLeft: theme.scaleWidth(17),
  },
});
