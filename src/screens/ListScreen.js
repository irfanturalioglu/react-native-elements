import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
  const friend = [
    {name: 'Friend #1', age: 20},
    {name: 'Friend #2', age: 45},
    {name: 'Friend #3', age: 32},
    {name: 'Friend #4', age: 27},
    {name: 'Friend #5', age: 33},
    {name: 'Friend #6', age: 30},
    {name: 'Friend #7', age: 37},
    {name: 'Friend #8', age: 28},
  ];
  return (
    <FlatList
      horizontal={false}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      keyExtractor={friend => friend.name}
      data={friend}
      renderItem={({item}) => {
        return (
          <Text style={style.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const style = StyleSheet.create({
  textStyle: {
    marginVertical: 15,
  },
});

export default ListScreen;
