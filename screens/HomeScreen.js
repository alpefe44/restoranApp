import { View, Text, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import useResult from '../hooks/useResult';
import SearchBar from '../component/SearchBar';
import ResultList from '../component/ResultList';

const HomeScreen = () => {
  const [term, setTerm] = useState("")
  const [results, searchApi, errorMessage] = useResult();

  function filterResultsByPrice(price) {
    return results.filter((item) => {
      return item.price === price
    })
  }
  console.log(results)

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white', marginTop: 20 }}>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searchApi(term)}></SearchBar>
      {errorMessage ? <Text>{errorMessage}</Text> : <>
        {results.length === 0 ? <></> :
          <>
            <ResultList title="Ucuz Restoranlar" results={filterResultsByPrice("₺")}></ResultList>
            <ResultList title="Uygun Restoranlar" results={filterResultsByPrice("₺₺")}></ResultList>
            <ResultList title="Pahalı Restoranlar" results={filterResultsByPrice("₺₺₺")}></ResultList>
          </>
        }
      </>}


    </ScrollView>
  )
}

export default HomeScreen