import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppProvider from './store/appprovider'
import Nav from './src/nav'

const App = () => {
  return (
    <AppProvider>
      <View style={styles.screen}>
        <Nav />
      </View>
    </AppProvider>
  )
}

export default App

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
})