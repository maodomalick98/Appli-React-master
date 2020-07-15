import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Search from './components/search.js';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './Navigation/Navigation';

export default function App() {
  return (
    <NavigationContainer>
        <Navigation/>
    </NavigationContainer>




  );
}

const styles = StyleSheet.create({
  vue: {
    height: 50,
    width: 50,
    backgroundColor:'red'
  },
  vue1:{

    height: 50,
    width: 50,
    backgroundColor:'blue'
  }

})
