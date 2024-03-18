import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../Screens/Home';
import AllProperties from '../Screens/AllProperties';
import Color from '../constants/Color';

const Tab = createMaterialBottomTabNavigator();



import Profile from '../Screens/Profile';

function ButtomBar() {
    return (
        <Tab.Navigator
            initialRouteName="Feed"
            activeColor='#007AFF'
            inactiveColor='white'
            barStyle={{ backgroundColor: Color.header }}


        >
            <Tab.Screen
                name="Feed"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
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
                name="Notifications"
                component={AllProperties}
                options={{
                    tabBarLabel: 'Updates',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="bell" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Save"
                component={AllProperties}
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
        </Tab.Navigator>
    );
}

export default ButtomBar