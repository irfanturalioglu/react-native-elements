import React, {useReducer} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {...state, count: state.count + action.payload};
    case 'decrement':
      return {...state, count: state.count - action.payload};
    default:
      return state;
  }
};

let NUMBER_DEGER = 1;

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, {count: 0});
  const {count} = state;
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => dispatch({type: 'increment', payload: NUMBER_DEGER})}
      />
      <Button
        title="Decrease"
        onPress={() => dispatch({type: 'decrement', payload: NUMBER_DEGER})}
      />
      <Text>Current Counter: {state.count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
