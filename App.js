import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import RestoranDetail from './screens/RestoranDetail';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }} ></Stack.Screen>
        <Stack.Screen name='DetailScreen' component={RestoranDetail}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer >
  );
}
