import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assuming you're using Expo for vector icons

import { placeholders } from '../Data/SearchPlaceHolder';
import { useNavigation } from '@react-navigation/native';

const SearchBar = () => {
    const navigation = useNavigation();

    const [placeholderIdx, setPlaceholderIdx] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setPlaceholderIdx((prevIdx) => ((prevIdx + 1) % placeholders.length))
        }, 1000);

        return () => { clearInterval(timer) }
    });

    // open Search Dialog





    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.filterButton}>
                {/* Your filter button icon */}
                <Ionicons name="filter" size={24} color="black" onPress={() => { navigation.navigate('SearchFilter') }} />

            </TouchableOpacity>
            <View style={styles.searchBox}>
                {/* Your search input box */}
                <TextInput
                    style={styles.input}
                    placeholder={placeholders[placeholderIdx]}
                    placeholderTextColor="#A0A0A0"
                />
                {/* Search icon */}
                <Ionicons name="search" size={24} color="black" style={styles.searchIcon} />
                <Ionicons name="location" size={24} color="black" style={styles.locationIcon} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '92%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 8,
        paddingVertical: 8,
        backgroundColor: '#F0F0F0', // Background color of the search bar
        borderRadius: 8,
    },
    filterButton: {
        marginRight: 8,
    },
    searchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'white', // Background color of the search input box
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    input: {
        flex: 1,
        fontSize: 16,
        paddingVertical: 8,
        paddingLeft: 4,
    },
    searchIcon: {
        marginLeft: 4,
        paddingRight: 6,
        borderRightWidth: 1,

    },
    locationIcon: {
        marginLeft: 6,
    },
});

export default SearchBar;
