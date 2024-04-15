import { black } from 'color-name';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';


const Header = ({ icon, color, heading, subheading }) => {
    return (
        <View style={styles.header}>
            <Icon name={icon} type='ionicon'
                style={styles.image} size={50} color={color || black} />
            <View style={styles.headerContent}>
                <Text style={styles.heading}>{heading}</Text>
                <Text style={styles.subheading}>{subheading}</Text>
            </View>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerContent: {
        flex: 1, // Takes the remaining 3/4th of the container width
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    subheading: {
        fontSize: 16,
        color: '#666',
    },
    image: {
        marginHorizontal: 10,
    }
});