import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements'; // Assuming you're using react-native-elements for icons
import Color from '../../../constants/Color';

const Card = ({ icon, text }) => {
    return (
        <View style={styles.container}>
            <Icon name={icon.name} type={icon.type || 'material'} size={icon.size || 30} color={icon.color} style={styles.icon} />
            <Text style={styles.text}>{text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        padding: 20,
        alignItems: 'center',
        borderRadius: 10,
        maxWidth: '40%'
    },
    icon: {
        borderWidth: .5,
        backgroundColor: Color.modernBackground,
        height: 60,
        width: 60,
        borderRadius: 30,
        alignItems: 'center', justifyContent: 'center',
        borderColor: 'transparent',
    },
    text: {
        marginTop: 10,
        textAlign: 'center',
        fontSize: 15,

    },
});

export default Card;
