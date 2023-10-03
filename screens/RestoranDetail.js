import { View, Text, Image, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import useResult from '../hooks/useResult';
import yelp from '../api/yelp';

const RestoranDetail = ({ route, navigation }) => {

  const [results, setResults] = useState(null)
  const { restoranId: id, restoranName: name } = route.params;

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`)
    console.log(response.data)
    setResults(response.data)
  }

  useEffect(() => {
    getResult(id)
  }, [])

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `${name}`
    })
  }, [navigation])

  if (!results) {
    return null;
  }


  return (
    <View style={{ alignItems: 'center' }}>
      <View style={{ marginTop: 15, alignItems: 'center' }}>
        <Text style={{ fontSize: 20 }}>{results.name}</Text>
        <Text style={{ fontSize: 20 }}>{results.phone}</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        {
          results.photos.map((photo) => {
            return (
              <View style={{ width: 300, height: 300, marginVertical: 20 }}>
                <Image style={{ flex: 1, borderRadius: 20 }} source={{ uri: photo }}></Image>
              </View>
            )
          })
        }
      </ScrollView>
    </View>
  )
}

export default RestoranDetail