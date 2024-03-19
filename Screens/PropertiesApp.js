import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AllProperties from './AllProperties';
import RoomDetailsScreen from './RoomDetailsScreen';

const Stack = createStackNavigator();

const PropertiesApp = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="AllProperties">
        <Stack.Screen name="AllProperties" component={AllProperties}  />
        <Stack.Screen name="RoomDetails" component={RoomDetailsScreen} options={{ title: 'Room Details' }}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default PropertiesApp;
