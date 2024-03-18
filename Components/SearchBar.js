import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assuming you're using Expo for vector icons

const SearchBar = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.filterButton}>
                {/* Your filter button icon */}
                <Ionicons name="filter" size={24} color="black" />
            </TouchableOpacity>
            <View style={styles.searchBox}>
                {/* Your search input box */}
                <TextInput
                    style={styles.input}
                    placeholder="Search..."
                    placeholderTextColor="#A0A0A0"
                />
                {/* Search icon */}
                <Ionicons name="search" size={24} color="black" style={styles.searchIcon} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
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
    },
});

export default SearchBar;
