import React, { useState } from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import Color from '../../constants/Color';

const SearchButton = ({ text, textColor, backgroundColor, borderColor, triggeredFunction, pressed, onPress }) => {



    function pressFun() {

        triggeredFunction && triggeredFunction();
        onPress && onPress();
    }
    return (
        <View>
            <Pressable
                style={[styles.CustomButton, {
                    backgroundColor: pressed ? Color.Button.hoverBackgroundColor : (backgroundColor || 'white'),
                    borderColor: pressed ? Color.Button.hoverBorderColor : (borderColor || Color.Button.borderColor),
                }]}
                onPress={pressFun}>
                <Text style={[styles.textStyle, {
                    color: pressed ? Color.Button.hoverColor : (textColor || Color.Button.color)
                }]}>{text}</Text>
            </Pressable>
        </View>
    );
};

export default SearchButton;

const styles = StyleSheet.create({
    textStyle: {
        fontWeight: 'bold',
    },
    CustomButton: {
        borderRadius: 20,
        paddingVertical: 5,
        elevation: 2,
        paddingHorizontal: 20,
        marginHorizontal: 10,
        borderWidth: 2,

    },
});
