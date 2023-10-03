import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ResultDetail = ({ detail }) => {

  const { navigate } = useNavigation();

  function goDetail(item) {
    navigate('DetailScreen', {
      restoranId: item.id,
      restoranName : item.name
    })
  }
  return (
    <TouchableOpacity onPress={() => goDetail(detail)}>
      <View style={[{ alignItems: 'center', marginHorizontal: 15, marginTop: 10 }]}>
        <View style={[{ width: 200, height: 200, position: 'relative' }, styles.shadowBox]}>
          <Image style={[{ flex: 1, borderRadius: 20 }]} source={{ uri: detail?.image_url }}></Image>
          <View style={{ flexDirection: 'row', position: 'absolute', right: 0, backgroundColor: 'white', borderBottomLeftRadius: 10, padding: 5, alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', color: 'orange' }}>{detail?.rating}</Text>
            <View style={{ marginLeft: 3 }}>
              <FontAwesome name="star" size={14} color="yellow" />
            </View>
          </View>
        </View>
        <View style={{ flexDirection: 'row', marginVertical: 10 }}>
          <Text style={{ paddingHorizontal: 10, fontWeight: 'bold' }}>{detail.name.length < 12 ? detail?.name : detail.name.slice(0, 12) + "..."}</Text>
        </View>
      </View >
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  shadowBox: {
    elevation: 15,
    borderRadius: 20,
    backgroundColor: 'black'
  },
})

export default ResultDetail