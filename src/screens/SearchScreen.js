import React, { useState , useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'

const SearchScreen = () => {
  const [searchTerm , setSearchTerm] = useState('')
  const [searchApi , results , errorMessage] = useResults()

  return (
      <View >
        <SearchBar
            searchTerm  = { searchTerm }
            onSearchTermChange = { setSearchTerm }
            onSearchTermSubmit = { () = > searchApi(searchTerm) }
        />
          { errorMessage ? <Text>{ errorMessage }</Text> : null}
          <Text> We have found { results.length } results </Text>
      </View>
  )
}

const styles = StyleSheet.create({

})

export default SearchScreen
