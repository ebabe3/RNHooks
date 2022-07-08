import { View, Text, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const UseState = () => {

  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(counter + 1)
  }

  const decrease = () => {
    setCounter(counter - 1)
  }

  return (
    <View style={styles.container}>
      <Text>USE STATE</Text>
      <Text>Counter: {counter}</Text>
      <Button
        title = "Increase"
        onPress={() => increase()}
      />
      <Button
        title = "Decrease"
        onPress={() => decrease()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }
})

export default UseState