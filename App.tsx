import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'
import FancyCard from './components/FancyCard'
import ActionCard from './components/ActionCard'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        < ElevatedCards />
        < FancyCard />
        < ActionCard />
      </ScrollView>
    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  heading: {
    color: '#FFFFFF'
  }
})

export default App