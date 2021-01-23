import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Title from './components/Title';
import Number from './components/Number';

const { useState } = React;

export default function App() {
  const [count, setCount] = useState(0);

  const IncreaseCount = () => {
    setCount(count + 1);
    console.log(count);
  };

  const DecreaseCount = () => {
    count > 0 ? setCount(count - 1) : null;
  };

  return (
    <View style={styles.container}>
      <Title />
      <Number count={count} />
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={IncreaseCount} style={styles.button} >
          <Text>Increase</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={DecreaseCount} style={styles.button}>
          <Text>Decrease</Text>
        </TouchableOpacity>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c2c2c2',
    // alignItems: 'center',
    // flexDirection: 'column',
    // justifyContent: 'center',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 30,
    height: 50,
    backgroundColor: '#c2c2c2',
    borderWidth: 1,
    borderRightColor: '#999',
    borderLeftColor: '#fff',
    borderBottomColor: '#999',
    borderTopColor: '#fff',

  }
});
