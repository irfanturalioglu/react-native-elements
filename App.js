import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentScreen from './src/screens/ComponentScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';
import TextScreen from './src/screens/TextScreen';
import BoxScreen from './src/screens/BoxScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AnaSayfa">
        <Stack.Screen
          name="AnaSayfa"
          options={{title: 'Home'}}
          component={HomeScreen}
        />
        <Stack.Screen name="ListScreen" component={ListScreen} />
        <Stack.Screen name="Component" component={ComponentScreen} />
        <Stack.Screen name="ImageScreen" component={ImageScreen} />
        <Stack.Screen name="Counter" component={CounterScreen} />
        <Stack.Screen name="Color" component={ColorScreen} />
        <Stack.Screen name="Square" component={SquareScreen} />
        <Stack.Screen name="Text" component={TextScreen} />
        <Stack.Screen name="Box" component={BoxScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
