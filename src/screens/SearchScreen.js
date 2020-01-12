import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'
import foursquare from '../api/foursquare'

const SearchScreen = () => {
  const [searchTerm , setSearchTerm] = useState('')
  const [results , setResults] = useState([])
  const [errorMessage , setErrorMessage] = useState('')

  const searchApi = async (initialTerm) => {
      try {
              const responseFromApi = await foursquare.get('/search',{
                  params : {
                    ll : '40.7,-74',
                  client_id : 'UMKW4DAWHH3JNEKJK30GSFVXV1I4NEXMTWJXX2S1HJAMNKJI',
                  client_secret : 'FH1GPRDAHI025P1R203M0C30TKOVC1HUJCYB3MIKNV0F0P3X',
                  v : 20200112,
                  query : initialTerm
                }
              })
              setResults(responseFromApi.data.response.venues)
          } catch (err) {
              setErrorMessage('Something went wrong')
              console.log(err)
          }
  }

  // CALL searchApi when Component first rendered
  // searchApi('coffee')  BAD CODE !!!! 

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
