import React from 'react';
import {View} from 'react-native';
import {translate} from '../../i18n';
import {Typography} from '../Typography';
import {IPointsCardProps} from './PointsCard.types';
import styles from './PointsCard.style';

export const PointsCard = ({points}: IPointsCardProps) => (
  <View style={styles.container}>
    <Typography variant="body_bold" color="WHITE">
      Diciembre
    </Typography>
    <Typography
      style={styles.points}
      numberOfLines={2}
      color="WHITE"
      variant="title">
      {translate('points_short', {points})}
    </Typography>
  </View>
);
