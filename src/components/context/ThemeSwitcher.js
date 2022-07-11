import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'

import { MainContext, useContext } from './MainContext'

const ThemeSwitcher = () => {


  const{ theme, setTheme } = useContext(MainContext)

  const switchTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  return (
    <View style={styles.card}>
      <Text>SecondCard</Text>
      <Button
        onPress={switchTheme}
        title="Switch Theme"
       />
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
export default ThemeSwitcher