import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import 'react-native-gesture-handler';

import Ferias from './pages/Ferias';
import HoraExtra from './pages/HoraExtra';
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Calculo Horas Extras" component={HoraExtra} />
        <Drawer.Screen name="Calculo Férias" component={Ferias} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
