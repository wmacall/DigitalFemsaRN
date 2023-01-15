import React, {useCallback} from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  SafeAreaView,
  View,
} from 'react-native';
import {COLORS} from '../../assets';
import {Button, PointsCard, ProductCard, Typography} from '../../components';
import {useProducts} from '../../hooks';
import {translate} from '../../i18n';
import styles from './HomeScreen.styles';

export const HomeScreen = () => {
  const {isLoading, products, points, filter, onFilterProducts, onResetFilter} =
    useProducts();
  const onPressCard = useCallback((id: string) => {
    Alert.alert(id);
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView />
      {isLoading ? (
        <View style={styles.containerLoader}>
          <ActivityIndicator color={COLORS.BLUE_RIBBON} />
        </View>
      ) : (
        <FlatList
          ListHeaderComponent={() => (
            <>
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
            </>
          )}
          data={products}
          keyExtractor={({id}) => id.toString()}
          showsVerticalScrollIndicator={false}
          bounces={false}
          contentContainerStyle={styles.contentContainerStyle}
          renderItem={({item}) => (
            <ProductCard {...item} onPress={() => onPressCard(item.id)} />
          )}
          ListFooterComponentStyle={styles.ListFooterComponentStyle}
          ListFooterComponent={() =>
            filter === null ? (
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
            )
          }
        />
      )}
    </View>
  );
};
