import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Button from './Button'; // Import the Button component
import { Icon } from 'react-native-elements'
import Color from '../../../constants/Color';
import { placeholders } from '../../../Data/SearchPlaceHolder';

const RecentSearch = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                {/* SVG icon */}
                <Icon
                    name='history' size={30} />
                <Text style={styles.title}>Recent Search</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.buttonContainer}>
                    {placeholders.map((placeholder, index) => (<Button title={placeholder} key={index} />))}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 50,
        backgroundColor: Color.secondaryHeader,

    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 20,
        marginLeft: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        height: 50,
    },
});

export default RecentSearch;
