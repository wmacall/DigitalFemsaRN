import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {Typography} from '../Typography';
import Arrow from '../../assets/images/arrow.png';
import {IProductProps} from './ProductCard.types';
import styles from './ProductCard.styles';

export const ProductCard = ({
  product,
  createdAt,
  points,
  is_redemption,
  image,
  onPress,
}: IProductProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.row}>
        <View style={styles.containerImage}>
          <Image
            resizeMode="cover"
            defaultSource={require('../../assets/images/image_placeholder.png')}
            source={{uri: image}}
            style={styles.image}
          />
        </View>
        <View style={styles.containerText}>
          <Typography
            numberOfLines={2}
            style={styles.textTitle}
            variant="section">
            {product}
          </Typography>
          <Typography variant="caption">{createdAt}</Typography>
        </View>
      </View>
      <View style={styles.row}>
        <Typography variant="body_bold" color={is_redemption ? 'RED' : 'JADE'}>
          {is_redemption ? '-' : '+'}
          <Typography variant="body_bold">{points}</Typography>
        </Typography>
        <Image style={styles.arrow} resizeMode="contain" source={Arrow} />
      </View>
    </TouchableOpacity>
  );
};
