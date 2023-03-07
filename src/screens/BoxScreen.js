import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <View style={styles.viewOneStyle} />
      <View style={styles.viewTwoStyle} />
      <View style={styles.viewThreeStyle} />
    </View>
  );
};

// TODO 2.kutuyu parent bir view ekleyerek (style: height:100, justifyContent: 'flex-end') yaparak hizlama yapilabilir. 
// 3. yol ise parent view'i yukeseklik degeri ile oynanabilir

const styles = StyleSheet.create({
  parentStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  viewOneStyle: {
    width: 50,
    height: 50,
    backgroundColor: 'red'  
  },
  viewTwoStyle: {
    width: 50,
    height: 50,
    backgroundColor: 'green',
    marginTop: 50
  },
  viewThreeStyle: {
    width: 50,
    height: 50,
    backgroundColor:'purple'
  },
});

export default BoxScreen;
