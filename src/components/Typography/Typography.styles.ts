import {StyleSheet, TextStyle} from 'react-native';
import {COLORS} from '../../assets';
import {theme} from '../../utils';

const BODY: TextStyle = {
  fontSize: theme.scaleFont(16),
  lineHeight: theme.scaleFont(22),
  fontWeight: '400',
  color: COLORS.BLACK,
};

const CAPTION: TextStyle = {
  fontSize: theme.scaleFont(12),
  lineHeight: theme.scaleFont(16),
  fontWeight: '400',
  color: COLORS.BLACK,
};

export default StyleSheet.create({
  section: {
    fontSize: theme.scaleFont(14),
    lineHeight: theme.scaleFont(19),
    fontWeight: '800',
    color: COLORS.BLACK,
  },
  body: {
    ...BODY,
  },
  bodyBold: {
    ...BODY,
    fontWeight: '800',
  },
  title: {
    fontSize: theme.scaleFont(32),
    lineHeight: theme.scaleFont(44),
    fontWeight: '800',
    color: COLORS.WHITE,
  },
  caption: {
    ...CAPTION,
  },
  captionBold: {
    ...CAPTION,
    fontWeight: '800',
    color: COLORS.WHITE,
  },
  header: {
    fontSize: theme.scaleFont(24),
    lineHeight: theme.scaleFont(24),
    fontWeight: '800',
    color: COLORS.BLACK,
  },
  h1: {
    fontSize: theme.scaleFont(24),
    lineHeight: theme.scaleFont(33),
    fontWeight: '800',
    color: COLORS.BLACK,
  },
  greeting: {
    fontSize: theme.scaleFont(20),
    lineHeight: theme.scaleFont(27),
    fontWeight: '800',
    color: COLORS.BLACK,
  },
});
