import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from './pages/Landing';
import ExercicesPhysio from './pages/ExercicesPhysio';
import styles from './pages/Landing/style';

const {Navigator, Screen} = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Landing" component={Landing}/>
        <Screen name="ExercicesPhysio" component={ExercicesPhysio}/>
      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;