import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar} from 'react-native';
import {COLORS} from './src/assets';
import {AppRoutes} from './src/routes';

const App = () => (
  <NavigationContainer>
    <StatusBar barStyle="dark-content" backgroundColor={COLORS.WHITE} />
    <AppRoutes />
  </NavigationContainer>
);

export default App;
