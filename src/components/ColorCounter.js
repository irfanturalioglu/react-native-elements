import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const ColorCounter = ({color, onDecrease, onIncrease}) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button onPress={() => onIncrease()} title={`More ${color}`} />
      <Button onPress={() => onDecrease()} title={`Less ${color}`} />
    </View>
  );
};

const style = StyleSheet.create({});

export default ColorCounter;
