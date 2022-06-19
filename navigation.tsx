import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as ReduxProvider } from 'react-redux';
import Home from './screens/Home';
import { RestaurantDetails } from './screens/RestrauntDetails';
import { store } from './redux/store';

export const RootNavigation = () => {
  const Stack = createStackNavigator();

  const screenOptions = {
    headerShown: false,
  };

  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="RestaurantDetails" component={RestaurantDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
};
