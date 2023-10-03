import { View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import ResultDetail from './ResultDetail'

const ResultList = ({ results, title }) => {

  //console.log(results)
  return (
    <View>
      <Text style={{ marginHorizontal: 15, fontSize: 22, fontWeight: '600' }}>{title}</Text>
      <FlatList
        data={results}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity>
              <ResultDetail detail={item}></ResultDetail>
            </TouchableOpacity>
          )
        }}
      ></FlatList>
    </View>
  )
}

export default ResultList