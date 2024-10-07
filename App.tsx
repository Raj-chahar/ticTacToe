import { SafeAreaView, StyleSheet, View } from 'react-native';
import React from 'react';
import TicTacToe from './src/TicTacToe';

export default function App() {
  return (
    <SafeAreaView>
    <View style={styles.background}>
      <TicTacToe />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    padding: 10,
    backgroundColor: '#0f1b21',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
  },
});
