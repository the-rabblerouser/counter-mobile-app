import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const { useState } = React;

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text>Counter App</Text>
      <Text>{count}</Text>
      <View style={{ flexDirection: "row", justifyContent: 'space-between', width: '50%' }}>
        <Button style={styles.button} title="Increase" />
        <Button style={styles.button} title="Decrease" />
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
});
