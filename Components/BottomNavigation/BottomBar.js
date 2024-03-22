import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../../Screens/Home';
import AllProperties from '../../Screens/AllProperties';
import Color from '../../constants/Color';



const Tab = createMaterialBottomTabNavigator();



import Profile from '../../Screens/Profile';
import { Ionicons } from '@expo/vector-icons';
import PostItem from '../../Screens/PostItem';
import Save from '../../Screens/Save';

function BottomBar() {
    return (

        <Tab.Navigator
            initialRouteName="Feed"
            activeColor='#007AFF'
            inactiveColor='grey'
            barStyle={{ backgroundColor: Color.secondaryHeader, borderTopWidth: .17, borderTopColor: 'black' }}
            shifting={false}
            shiftingStyle={{ backgroundColor: 'red' }}

        >
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
            <Tab.Screen
                name="Property"
                component={AllProperties}
                options={{
                    tabBarLabel: 'Property',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="office-building" color={color} size={26} />
                    ),
                }}
            />



            <Tab.Screen
                name="PostProperty"
                component={PostItem}
                options={{
                    tabBarLabel: 'Post',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="add" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Save"
                component={Save}
                options={{
                    tabBarLabel: 'Save',

                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="cards-heart"
                            size={26}
                            color={color}
                        />
                    ),
                }}

            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
            />
        </ Tab.Navigator >

    );
}

export default BottomBar