import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CartComponent from './components/CartComponent'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CartComponent />
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})
