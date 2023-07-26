import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import {
  LinkingOptions,
} from "@react-navigation/native";
import * as Linking from "expo-linking";

const linking: LinkingOptions<any> = {
  prefixes: [Linking.createURL("/")],
  config: {
    screens: {
      DetailsScreen: "details/:itemId/:otherParam",
    },
  },
};

const Stack = createNativeStackNavigator();

function App() {
  const linking: LinkingOptions<any> = {
    prefixes: [Linking.createURL("/")],
    config: {
      screens: {
        DetailsScreen: "details/:itemId/:otherParam",
      },
    },
  };
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;