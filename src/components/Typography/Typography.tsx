import React, {useCallback} from 'react';
import {Text} from 'react-native';
import {ITypographyProps} from './Typography.types';
import {COLORS} from '../../assets';
import styles from './Typography.styles';

export const Typography = ({
  children,
  variant = 'section',
  color = 'BLACK',
  style,
  numberOfLines,
}: ITypographyProps) => {
  const onGetFontStyle = useCallback(() => {
    switch (variant) {
      case 'section':
        return styles.section;
      case 'body':
        return styles.body;
      case 'body_bold':
        return styles.bodyBold;
      case 'title':
        return styles.title;
      case 'caption':
        return styles.caption;
      case 'caption_bold':
        return styles.captionBold;
      case 'header':
        return styles.header;
      case 'header':
        return styles.header;
      case 'h1':
        return styles.h1;
      case 'greeting':
        return styles.h1;
      default:
        return styles.section;
    }
  }, [variant]);

  return (
    <Text
      numberOfLines={numberOfLines}
      style={[onGetFontStyle(), {color: COLORS[color]}, style]}>
      {children}
    </Text>
  );
};
