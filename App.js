import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import Box from './src/templateSample/Box'
import Header from './src/templateSample/Header'
import HeaderTitle from './src/templateSample/HeaderTitle'
import TemplateSample from './src/templateSample/TemplateSample'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/navigationSample/HomeScreen'
import ContactScreen from './src/navigationSample/ContactScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailScreen from './src/navigationSample/DetailScreen'

import ProfileStack from './src/ECommerceSample/stack/ProfileStack'
import DashboardStack from './src/ECommerceSample/stack/DashboardStack'
import SearchStack from './src/ECommerceSample/stack/SearchStack'
import CartStack from './src/ECommerceSample/stack/CartStack'
import ProductStack from './src/ECommerceSample/stack/ProductStack'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

// or any pure javascript modules available in npm

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={DashboardStack}
              options={{
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="home" color={color} size={26} />
                )
              }}
               />
        <Tab.Screen name="Products" component={ProductStack}
              options={{
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="star" color={color} size={26} />
                )
              }}
               />
        <Tab.Screen name="Cart" component={CartStack}
            options={{
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="cart" color={color} size={26} />
              ),
              tabBarBadge: 2
            }}
          />
        <Tab.Screen name="Search" component={SearchStack} 
              options={{
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="archive-search" color={color} size={26} />
                )
              }}
              />
        <Tab.Screen name="Profile" component={ProfileStack} 
              options={{
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="face-man-profile" color={color} size={26} />
                )
              }}
              />
      </Tab.Navigator>
    </NavigationContainer>


  );
}