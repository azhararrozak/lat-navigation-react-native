import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const HomeScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button
          title="Pergi ke Progate"
          onPress={() => {
            navigation.navigate('Progate', {
              name: 'Ninja Ken',
              language: 'React Native',
            })
          }}
        />
      </View>
    )
  }
  
  const ProgateScreen = ({ route, navigation }) => {
    return (
      <View style={styles.container}>
        <Text>Welcome to Progate, {route.params.name}!</Text>
        <Text>Ayo belajar {route.params.language}!</Text>
        <Button title="Kembali" onPress={() => navigation.goBack()} />
      </View>
    )
  }
  
  const Stack = createNativeStackNavigator()

const Navigation1 = () => {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Progate" component={ProgateScreen} />
      </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
  

export default Navigation1