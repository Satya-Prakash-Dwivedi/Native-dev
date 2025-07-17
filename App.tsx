import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* <Text style={styles.heading}>App</Text> */}
        <FlatCards />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  heading: {
    color: '#FFFFFF'
  }
})

export default App