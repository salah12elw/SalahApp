import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
  const navigation = useNavigation()
  return (
    <View>
      <Text>Home</Text>
      <Button title='go to screen 1' onPress={()=>{navigation.navigate("Screen1")}}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})