import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import { ThemeProvider } from './theme/ThemeProvider'
import Demo from './screens/Demo'

const App = () => {
  return (
    <Provider store={store}>
    <ThemeProvider>
     <Demo />
    </ThemeProvider>
  </Provider>
  )
}

export default App

const styles = StyleSheet.create({})