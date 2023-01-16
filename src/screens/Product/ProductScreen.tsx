import React, {useCallback} from 'react';
import {Image, SafeAreaView, ScrollView, View} from 'react-native';
import {Button, Typography} from '../../components';
import {translate} from '../../i18n';
import styles from './ProductScreen.styles';
import {TProductScreenProps} from './ProductScreen.types';

export const ProductScreen = ({route, navigation}: TProductScreenProps) => {
  const {product} = route.params;
  const {goBack} = navigation;

  const onPressAccept = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <View testID="product-screen-container" style={styles.container}>
      <SafeAreaView style={styles.header}>
        <View style={styles.containerHeader}>
          <Typography variant="header">{product.product}</Typography>
        </View>
      </SafeAreaView>
      <ScrollView
        contentContainerStyle={styles.containerContent}
        bounces={false}
        showsVerticalScrollIndicator={false}>
        <View style={styles.containerImage}>
          <Image
            testID="product-image"
            defaultSource={require('../../assets/images/image_placeholder.png')}
            style={styles.image}
            source={{uri: product.image}}
          />
        </View>
        <Typography color="DUSTY_GRAY">
          {translate('product_detail')}
        </Typography>
        <Typography variant="body_bold" style={styles.textDatePurchase}>
          {translate('date_of_purchase', {
            date: product.createdAt,
          })}
        </Typography>
        <Typography color="DUSTY_GRAY">
          {translate('points_accumulated')}
        </Typography>
        <Typography variant="h1" style={styles.textPoints}>
          {translate('points_long', {points: product.points})}
        </Typography>
        <Button text="accept" onPress={onPressAccept} />
      </ScrollView>
    </View>
  );
};
