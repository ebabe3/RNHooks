import { View, StyleSheet} from 'react-native'
import React, { useEffect, useState } from 'react'
import FirstCard from '../components/context/FirstCard'
import SecondCard from '../components/context/SecondCard'
import { MainContext } from '../components/context/MainContext'



const UseContext = () => {



  const [theme, setTheme] = useState('light')

  useEffect(() => {
    if(theme==='light'){
      console.log('light')
    }else {
      backgroundColor='black'
      console.log('black')
    }
  },[theme])

  const data = {
    theme,
    setTheme
  }

  return (
    <MainContext.Provider 
      style={styles.container}
      value={data}
      >
      <FirstCard 
//        theme={theme}
      />
      <SecondCard 
//        theme={theme}
//        setTheme={setTheme}
      />
    </MainContext.Provider>
  )
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
  }
})
export default UseContext