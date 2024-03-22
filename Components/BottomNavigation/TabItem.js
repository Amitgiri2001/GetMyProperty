import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { View } from 'react-native';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
const Tab = createMaterialBottomTabNavigator();

const TabItem = () => {
    return (
        <View>
            <Tab.Screen
                name="Feed"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="home" color={color} size={26} />
                    ),
                }}
            />
        </View>
    )
}

export default TabItem