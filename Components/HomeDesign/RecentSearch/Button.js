import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Color from "../../../constants/Color"

const Button = ({ onPress, title, buttonStyle, textStyle }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
            <Text style={[styles.text, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'transparent', // transparent background to show border
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20, // adjust border radius as needed
        borderWidth: 2, // border width
        borderColor: Color.Button.modernBorderColor, // border color
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    text: {
        fontSize: 16,
        color: Color.Button.color, // text color
    },
});

export default Button;
