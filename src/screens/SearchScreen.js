import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {
  const [searchTerm , setSearchTerm] = useState('')
  const [searchApi , results , errorMessage ] = useResults()

  console.log(results)
  let b =[] , i =0
  for (let a of results) {
    b[i] = a.id
    i++
  }
  console.log(b)

  return (
      <View >
        <SearchBar
            searchTerm  = { searchTerm }
            onSearchTermChange = { setSearchTerm }
            onSearchTermSubmit = { () => searchApi(searchTerm) }
        />
          { errorMessage ? <Text>{ errorMessage }</Text> : null}
          <Text> We have found { results.length } results </Text>
          <ResultsList title = 'Cost Effective'/>
          <ResultsList title = 'Bit Pricier'/>
          <ResultsList title = 'Big Spender'/>
      </View>
  )
}

const styles = StyleSheet.create({

})

export default SearchScreen
