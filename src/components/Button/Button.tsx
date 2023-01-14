import React, {useCallback} from 'react';
import {TouchableOpacity} from 'react-native';
import {Typography} from '../Typography';
import {translate} from '../../i18n';
import {IButtonProps} from './Button.types';
import styles from './Button.styles';

export const Button = ({text, variant, onPress}: IButtonProps) => {
  const onGetButtonStyle = useCallback(() => {
    switch (variant) {
      case 'full':
        return styles.full;
      case 'small':
        return styles.small;
      default:
        return styles.full;
    }
  }, [variant]);

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[styles.container, onGetButtonStyle()]}>
      <Typography variant="body_bold" color="WHITE">
        {translate(text)}
      </Typography>
    </TouchableOpacity>
  );
};
