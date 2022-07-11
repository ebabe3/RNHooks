import { View, Text, Button, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'

const UseEffect = () => {

  const [counter, setCounter] = useState(0);
  const [timer, setTimer] = useState(0);

  const increase = () => {
    setCounter(counter + 1)
  }

  const decrease = () => {
    setCounter(counter - 1)
  }

 // useEffect(() => {
   // console.warn("Count change")
 // },[counter])

  useEffect(() => {
    const myTimer = setInterval(() => {
      setTimer(timer => timer+1)
    }, 1000);

    return () => clearInterval(myTimer);
  },[])


  useEffect(() => {
    console.log(timer);
  })

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text>Use State With Use Effect</Text>
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

export default UseEffect