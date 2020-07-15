import * as React from 'react';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from '@react-navigation/stack';
import Search from '../components/search';
import DetailFilms from '../components/DetailsFilms';
const Stack = createStackNavigator();

function Navigation (){
  return (

      <Stack.Navigator>
        <Stack.Screen name=" Rechercher " component={Search} />
        <Stack.Screen name="Détails" component={DetailFilms} />
      </Stack.Navigator>
  );
}

export default Navigation
