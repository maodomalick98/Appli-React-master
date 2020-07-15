//chargement données

import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'


class Chargement extends React.Component{


render() {
  return (
    <View style={styles.Load}>
        <ActivityIndicator size="large" color="#0000ff"/>
    </View>


  )
}

}

const styles = StyleSheet.create({
  Load:{
     position: 'absolute',
     left: 0,
     right: 0,
     top: 100,
     bottom: 0,
     alignItems: 'center',
     justifyContent: 'center'
 }
})
export default Chargement
