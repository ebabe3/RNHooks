import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { MainContext, useContext } from './MainContext'


const FirstCard = () => {

  const{ theme } = useContext(MainContext)

  return (
    <View style={styles.card}>
      <Text>Current Theme = {theme}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    card: {
      alignItems: "center",
      justifyContent: "center",
      width: '50%',
      height: '30%',
      borderRadius: 10,
    }
  })
export default FirstCard