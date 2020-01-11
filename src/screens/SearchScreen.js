import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'

const SearchScreen = () => {
  const [searchTerm , setSearchTerm] = useState('')
  return (
      <View >
        <SearchBar
            searchTerm  = { searchTerm }
            onSearchTermChange = { (newTerm) => {
              setSearchTerm(newTerm)
            }}
            onSearchTermChange = { () => {
              
            }}
        />
          <Text>Search Screen </Text>
      </View>
  )
}

const styles = StyleSheet.create({

})

export default SearchScreen
