import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const SearchBar = ({onTermSubmit , term , onTermChange}) => {
  return (
    <View>
      <View style={{ borderRadius: 20, padding: 10, flexDirection: 'row', alignItems: 'center', backgroundColor: 'lightgray', margin: 20 }}>
        <AntDesign name="search1" size={24} color="black" />
        <TextInput
          onChangeText={onTermChange}
          onEndEditing={onTermSubmit}
          value={term}
          placeholder='Ara' style={{ width: '100%', marginLeft: 10, padding: 6 }} autoCorrect={false} autoCapitalize='none'></TextInput>
      </View>
    </View>
  )
}

export default SearchBar