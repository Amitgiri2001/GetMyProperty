import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import AnimatedButton from '../../Buttons/AnimatedButton';
import Color from '../../../constants/Color';

const RegisterPropertyCard = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/vector/registerForPost.jpg')} style={styles.backgroundImage} />
            <View style={styles.contentContainer}>
                <Text style={styles.title}>Register for Post your Property for FREE</Text>
                <AnimatedButton title="Post Property for free" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginVertical: 20,
        borderRadius: 10,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    backgroundImage: {
        width: '100%',
        height: 200,
    },
    contentContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        borderRadius: 10,
        padding: 20,
    },
    title: {
        fontSize: 26,
        // fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        color: 'black'
    },
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

export default RegisterPropertyCard;
