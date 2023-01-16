import {StyleSheet} from 'react-native';
import {COLORS} from '../../assets';
import {theme} from '../../utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.ALABASTER,
    paddingHorizontal: theme.scaleWidth(20),
  },
  sectionTitle: {
    marginVertical: theme.scaleHeight(20),
    textTransform: 'uppercase',
  },
  containerProducts: {
    backgroundColor: COLORS.WHITE,
    paddingBottom: theme.scaleHeight(12),
    paddingTop: theme.scaleHeight(23),
    borderRadius: theme.scaleWidth(10),
  },
  contentContainerStyle: {
    paddingBottom: theme.scaleHeight(20),
    backgroundColor: COLORS.WHITE,
    paddingTop: theme.scaleHeight(23),
    borderRadius: theme.scaleWidth(10),
  },
  ListFooterComponentStyle: {
    marginTop: theme.scaleHeight(43),
    paddingBottom: theme.scaleHeight(40),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerLoader: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
