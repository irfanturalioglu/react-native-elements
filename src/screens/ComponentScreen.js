import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const ComponentScreen = () => {
  let name = 'Irfan';
  return (
    <View>
      <Text style={styles.size}>Getting started with react native!</Text>
      <Text style={styles.subHeaderStyle}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  size: {
    fontSize: 45,
    color: 'red',
    textAlign: 'center',
  },
  subHeaderStyle: {
    fontSize: 30,
  },
});

export default ComponentScreen;
