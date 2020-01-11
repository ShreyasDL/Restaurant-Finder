import React from 'react'
import { TextInput, StyleSheet, View } from 'react-native'
import { Feather } from '@expo/vector-icons'

const SearchBar = ({ searchTerm , onSearchTermChange , onSearchTermChange }) => {
  return (
    <View style = { styles.viewStyle }>
      <Feather name = 'search' style = { styles.iconStyle } />
      <TextInput
          autoCapitalize = 'none',
          autoCorrect = { false }
          placeholder = 'Search'
          style = { styles.inputStyle }
          value = { searchTerm }
          onChangeText = { (newTerm) => {
            onSearchTermChange(newTerm)
          }}
          onEndEditing = { onSearchTermChange }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle : {
    height : 50,
    backgroundColor : '#F0EEEE',
    margin : 15,
    borderRadius : 5,
    flexDirection : 'row'
  },
  inputStyle :{
    flex :  1,
    fontSize : 18
  },
  iconStyle :{
    fontSize : 30,
    alignSelf : 'center',
    marginHorizontal : 15
  }
})

export default SearchBar
