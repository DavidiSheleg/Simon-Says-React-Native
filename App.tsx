/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { persistor, store } from './src/redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import GameScreen from './src/screens/GameScreen';
import ResultsScreen from './src/screens/ResultsScreen';



const App = () => {

  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaView style={{ display: 'flex', flex: 1 }}>
          <StatusBar barStyle="light-content" />
          <NavigationContainer>
            <Stack.Navigator initialRouteName="GameScreen" screenOptions={{ headerShown: false }}>
              <Stack.Screen name="GameScreen" component={GameScreen} />
              <Stack.Screen name="ResultsScreen" component={ResultsScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};


export default App;
