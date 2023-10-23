import { View, Text, Image, ScrollView, Dimensions } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import useResult from '../hooks/useResult';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import yelp from '../api/yelp';

const { width, height } = Dimensions.get('screen')

const RestoranDetail = ({ route, navigation }) => {

  const [location, setLocation] = useState({
    latitude: "",
    longitude: "",
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
    })();
  }, []);

  const [results, setResults] = useState(null)
  const { restoranId: id, restoranName: name } = route.params;

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`)
    const { latitude, longitude } = response.data.coordinates;
    setLocation({ ...location, latitude: latitude, longitude: longitude })
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
    <View style={{ alignItems: 'center', flex: 1 }}>
      <View style={{ marginTop: 15, alignItems: 'center' }}>
        <Text style={{ fontSize: 20 }}>{results.name}</Text>
        <Text style={{ fontSize: 20 }}>{results.phone}</Text>
        {
          console.log(location, "location")
        }
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
      <View style = {{borderWidth:10 , borderColor:'gray' , padding: 2 , marginVertical:10 , borderRadius:3 , elevation:10}}>
        <MapView
          region={location}
          style={{ width: width * 0.8, height: height * 0.3 }}>
          <Marker coordinate={location} title='Here'></Marker>
        </MapView>
      </View>

    </View>
  )
}

export default RestoranDetail