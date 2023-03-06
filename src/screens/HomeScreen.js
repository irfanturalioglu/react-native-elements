import React from 'react';
import {Text, StyleSheet, View, Button, TouchableOpacity} from 'react-native';
import codegenNativeCommands from 'react-native/Libraries/Utilities/codegenNativeCommands';
import ComponentScreen from './ComponentScreen';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text>Getting started with react native!</Text>
      <Button
        onPress={() => navigation.navigate('Component')}
        title="Go To Component Demo"
      />
      <Button
        onPress={() => navigation.navigate('ListScreen')}
        title="Go To List Demo"
      />
      <Button
        onPress={() => navigation.navigate('ImageScreen')}
        title="Go To Image Demo"
      />
      <Button
        onPress={() => navigation.navigate('Counter')}
        title="Go To Counter Demo"
      />
      <Button
        onPress={() => navigation.navigate('Color')}
        title="Go To Color Demo"
      />
      <Button
        onPress={() => navigation.navigate('Square')}
        title="Go To Square Demo"
      />
      <Button
        onPress={() => navigation.navigate('Text')}
        title="Go To Text Demo"
      />
      <Button
        onPress={() => navigation.navigate('Box')}
        title="Go To Box Demo"
      />
    </View>
  );
};

export default HomeScreen;
