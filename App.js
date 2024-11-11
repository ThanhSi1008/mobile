// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import GetStartedScreen from './components/GetStartedScreen';
import BikeDetailScreen from './components/BikeDetailScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="GetStarted" component={GetStartedScreen} options={{ headerShown: false }} />
        <Stack.Screen name="BikeDetail" component={BikeDetailScreen} options={{ title: 'Bike Detail' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
