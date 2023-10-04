import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {

  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          location: 'İstanbul',
          limit: 50,
          term: searchTerm
        }
      })
      setResults(response.data.businesses)
    } catch (error) {
      setErrorMessage('Bağlantı Hatası')
    }
  }


  useEffect(() => {
    searchApi('Kebap')
  }, [])

  return [results, searchApi , errorMessage]
}