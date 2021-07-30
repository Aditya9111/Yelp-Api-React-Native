import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SearchScreen from './SearchScreen';
import ResultShow from './screens/ResultShow';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search">
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen
          name="ResultShow"
          component={ResultShow}
          options={{title: 'Images'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
