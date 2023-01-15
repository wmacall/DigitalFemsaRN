import {ReactNode} from 'react';
import {StyleProp, TextProps, TextStyle} from 'react-native';
import {COLORS} from '../../assets';

type ColorValue = keyof typeof COLORS;

export interface ITypographyProps extends TextProps {
  children: ReactNode;
  variant?:
    | 'section'
    | 'body'
    | 'body_bold'
    | 'title'
    | 'header'
    | 'caption'
    | 'caption_bold'
    | 'greeting'
    | 'h1';
  color?: ColorValue;
  style?: StyleProp<TextStyle>;
}
