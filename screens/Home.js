import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import ChamCong from '../components/ChamCong';
import PheDuyet from '../components/PheDuyet';
import TongQuan from '../components/TongQuan';
const Tab = createMaterialTopTabNavigator();
export default function Home() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="TongQuan" component={TongQuan} />
        <Tab.Screen name="PheDuyet" component={PheDuyet} />
        <Tab.Screen name="ChamCong" component={ChamCong} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
