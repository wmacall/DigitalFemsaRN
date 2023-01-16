import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, ProductScreen} from '../../screens';
import {EAppRoutes, TAppStackRouter} from './App.routes.types';

const AppStack = createNativeStackNavigator<TAppStackRouter>();

export const AppRoutes = () => (
  <AppStack.Navigator
    initialRouteName={EAppRoutes.HOME_SCREEN}
    screenOptions={{
      headerShown: false,
    }}>
    <AppStack.Screen name={EAppRoutes.HOME_SCREEN} component={HomeScreen} />
    <AppStack.Screen
      name={EAppRoutes.PRODUCT_DETAIL_SCREEN}
      component={ProductScreen}
    />
  </AppStack.Navigator>
);
