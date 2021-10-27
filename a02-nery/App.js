import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Cabecalho from './components/Cabecalho';
import Corpo from './components/Corpo';
import Disciplina from './components/Disciplina';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Cabecalho nome={"Doctor Rey"} curso={"Cirugião Plástico"} />
      <Corpo />
      <Disciplina disciplina="Disciplina 1" />
      <Disciplina disciplina="Disciplina 2" />
      <Disciplina disciplina="Disciplina 3" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 20,

    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});
