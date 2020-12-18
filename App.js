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
      <View style={{ display: "flex", justifyContent: 'space-between', width: '100%' }}>
        <Button style={styles.button} title="Increase" />
        <Button style={styles.button} title="Decrease" />
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: '100vh',
    padding: '0 0.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
