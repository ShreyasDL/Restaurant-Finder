import React from 'react'
import { TextInput, View, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'

const SearchScreen = () => {
  return (
      <View style = { styles.viewStyle }>
        <SearchBar />
          <TextInput />
      </View>
  )
}

const styles = StyleSheet.create({
  viewStyle : {
    height : 50,
    backgroundColor : '#F0EEEE',
    margin : 15,
    borderRadius : 5
  }
})

export default SearchScreen
