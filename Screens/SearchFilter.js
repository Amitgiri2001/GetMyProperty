import React, { useState, useEffect } from 'react';
import { View, useWindowDimensions, Text } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Residential from '../Components/Search/Residential';

const FirstRoute = () => (
    <SafeAreaView style={{ flex: 1 }} >
        <Residential />
    </SafeAreaView>
);

const SecondRoute = () => (
    <SafeAreaView style={{ flex: 1 }} >
        <Text>Search</Text>
    </SafeAreaView>
);
const renderTabBar = props => (
    <TabBar
        {...props}
        style={{ backgroundColor: 'white' }}
        activeColor='blue'
        inactiveColor='black'
    // labelStyle={({ focused, color }) => ({
    //     fontWeight: focused ? 'bold' : 'normal',
    //     color: color ? color : 'black', // Ensure color is defined before accessing it
    // })}
    />
);

const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
});

function SearchFilter() {

    const layout = useWindowDimensions();

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: 'Residential' },
        { key: 'second', title: 'Commercial' },
    ]);

    const handleIndexChange = newIndex => {
        setIndex(newIndex);
        // Add it to our state
        console.log("Looking For " + routes[newIndex].title);
    };

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={handleIndexChange}
            initialLayout={{ width: layout.width }}
            renderTabBar={renderTabBar}
        // lazy={({ route }) => route.name === 'Commercial'}

        />
    );
}

export default SearchFilter;