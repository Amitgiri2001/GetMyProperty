import React from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';

const CustomButton = ({ text, textColor, backgroundColor, triggeredFunction }) => {
    return (
        <View>
            <Pressable
                style={[styles.CustomButton, { backgroundColor: backgroundColor }]}
                onPress={triggeredFunction}>
                <Text style={[styles.textStyle, { color: textColor }]}>{text}</Text>
            </Pressable>
        </View>
    );
};

export default CustomButton;

const styles = StyleSheet.create({
    textStyle: {
        fontWeight: 'bold',
    },
    CustomButton: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        paddingHorizontal: 40,
        marginHorizontal: 10,
    },
});
