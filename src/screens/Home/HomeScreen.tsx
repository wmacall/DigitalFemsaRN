import React, {useCallback} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import {IProducts} from '../../api';
import {COLORS} from '../../assets';
import {Button, PointsCard, ProductCard, Typography} from '../../components';
import {useProducts} from '../../hooks';
import {translate} from '../../i18n';
import {EAppRoutes} from '../../routes';
import styles from './HomeScreen.styles';
import {THomeScreenProps} from './HomeScreen.types';

export const HomeScreen = ({navigation}: THomeScreenProps) => {
  const {isLoading, products, points, filter, onFilterProducts, onResetFilter} =
    useProducts();
  const {navigate} = navigation;
  const onPressCard = useCallback(
    (product: IProducts) => {
      navigate(EAppRoutes.PRODUCT_DETAIL_SCREEN, {product});
    },
    [navigate],
  );

  return (
    <View testID="home-screen-container" style={styles.container}>
      <SafeAreaView />
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <Typography variant="greeting">
          {translate('greeting_message')}
        </Typography>
        <Typography variant="body">Walter Macall</Typography>
        <Typography color="DUSTY_GRAY" style={styles.sectionTitle}>
          {translate('your_points')}
        </Typography>
        <PointsCard points={points} />
        <Typography color="DUSTY_GRAY" style={styles.sectionTitle}>
          {translate('your_movements')}
        </Typography>
        {isLoading ? (
          <View testID="home-screen-loader" style={styles.containerLoader}>
            <ActivityIndicator color={COLORS.BLUE_RIBBON} />
          </View>
        ) : (
          <FlatList
            nestedScrollEnabled
            data={products}
            keyExtractor={({id}) => id.toString()}
            showsVerticalScrollIndicator={false}
            bounces={false}
            contentContainerStyle={styles.contentContainerStyle}
            renderItem={({item}) => (
              <ProductCard {...item} onPress={() => onPressCard(item)} />
            )}
          />
        )}
        <View style={styles.ListFooterComponentStyle}>
          {filter === null ? (
            <View style={styles.row}>
              <Button
                variant="small"
                onPress={() => onFilterProducts(false)}
                text="won"
              />
              <Button
                variant="small"
                onPress={() => onFilterProducts(true)}
                text="redeemed"
              />
            </View>
          ) : (
            <Button onPress={onResetFilter} variant="full" text="all" />
          )}
        </View>
      </ScrollView>
    </View>
  );
};
