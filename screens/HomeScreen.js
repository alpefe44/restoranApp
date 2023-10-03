import { View, Text, TextInput, ScrollView } from 'react-native'
import React from 'react'
import useResult from '../hooks/useResult';
import SearchBar from '../component/SearchBar';
import ResultList from '../component/ResultList';

const HomeScreen = () => {

  const [results] = useResult();
  function filterResultsByPrice(price) {
    return results.filter((item) => {
      return item.price === price
    })
  }

  return (
    <ScrollView style={{ flex: 1 , backgroundColor: 'white' , marginTop:20  }}>
      <SearchBar></SearchBar>
      <ResultList title="Ucuz Restoranlar" results={filterResultsByPrice("₺")}></ResultList>
      <ResultList title="Uygun Restoranlar" results={filterResultsByPrice("₺₺")}></ResultList>
      <ResultList title="Pahalı Restoranlar" results={filterResultsByPrice("₺₺₺")}></ResultList>
    </ScrollView>
  )
}

export default HomeScreen