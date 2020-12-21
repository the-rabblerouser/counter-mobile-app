import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const { useState } = React;

export default function App() {
  const [count, setCount] = useState(0);

  const IncreaseCount = () => {
    setCount(count + 1);
  };

  const DecreaseCount = () => {
    count > 0 ? setCount(count - 1) : null;
  };

  return (
    <View style={styles.container}>
      <Text>Counter App</Text>
      <Text style={styles.number}>{count}</Text>
      <View style={{ flexDirection: 'row' }}>
        < TouchableOpacity onPress={IncreaseCount} style={styles.button} >
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
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },

  number: {
    width: 80,
    height: 48,
    color: '#d60000a6',
    backgroundColor: '#000',
    fontSize: 40,
    textAlign: 'center',
  },

  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 30,
    height: 50,
    backgroundColor: '#c2c2c2',
    borderWidth: 2,
    borderColor: '#7b7b7b'
  }
});
