import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Button 
        onPress={() => navigation.navigate('UseState')}
        title = "Use State"/>
      <Button 
        onPress={() => navigation.navigate('UseEffect')}
        title = "Use Effect"/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    alignItems: "center",
    justifyContent: "center",
    width: '50%',
    height: '30%',
    borderRadius: 10,
  }
})

export default HomeScreen