import { useEffect , useState } from 'react'
import foursquare from '../api/foursquare'

export default () => {
  const [results , setResults] = useState([])
  const [errorMessage , setErrorMessage] = useState('')


  const searchApi = async (initialTerm) => {
      try {
              const responseFromApi = await foursquare.get('/search',{
                  params : {
                  ll : '12.97194, 77.59369',
                  client_id : 'UMKW4DAWHH3JNEKJK30GSFVXV1I4NEXMTWJXX2S1HJAMNKJI',
                  client_secret : 'FH1GPRDAHI025P1R203M0C30TKOVC1HUJCYB3MIKNV0F0P3X',
                  v : 20200112,
                  query : initialTerm,
                  categoryId : '4d4b7105d754a06374d81259'
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

  useEffect(() => {
    searchApi('pizza')
  }, [])

  return ( [ searchApi , results , errorMessage ])

}
