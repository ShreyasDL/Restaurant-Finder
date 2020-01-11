import React from 'react'
import { TextInput, StyleSheet, View } from 'react-native'
import { Feather } from '@expo/vector-icons'

const SearchBar = () => {
  return (
    <View style = { styles.viewStyle }>
      <Feather name = 'search' style = { styles.iconStyle } />
      <TextInput
          placeholder = 'Search'
          style = { styles.inputStyle }
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
