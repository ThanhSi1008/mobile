// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './redux/store'; // Đảm bảo đường dẫn này là chính xác
import HomeScreen from './components/HomeScreen';
import GetStartedScreen from './components/GetStartedScreen';
import BikeDetailScreen from './components/BikeDetailScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="GetStarted" component={GetStartedScreen} options={{ headerShown: false }} />
          <Stack.Screen name="BikeDetail" component={BikeDetailScreen} options={{ title: 'Bike Detail' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
