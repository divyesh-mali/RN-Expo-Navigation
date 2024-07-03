import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View, Text } from 'react-native'
import React from 'react'
import CourseListScreen from './screens/CourseListScreen'
import ProfileScreen from './screens/ProfileScreen'
import SettingsScreen from './screens/SettingsScreen'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Couse List" component={CourseListScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen}/>
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}