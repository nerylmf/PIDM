import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { StyleSheet, Text, View } from 'react-native';

import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Imc from './pages/Imc';
import Sobre from './pages/Sobre';
import Resultado from './pages/Resultado';

const Stack = createStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
        
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Cadastro" component={Cadastro} />
            <Stack.Screen name="Imc" component={Imc} />
            <Stack.Screen name="Sobre" component={Sobre} />
            <Stack.Screen name="Resultado" component={Resultado} />
        </Stack.Navigator>
        
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
