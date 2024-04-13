import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, Animated } from 'react-native';

const AnimatedButton = ({ onPress, title, style }) => {
    const [scaleAnimation] = useState(new Animated.Value(1));

    const handlePressIn = () => {
        Animated.spring(scaleAnimation, {
            toValue: 0.8,
            useNativeDriver: true,
        }).start();
    };

    const handlePressOut = () => {
        Animated.spring(scaleAnimation, {
            toValue: 1,
            friction: 3,
            tension: 40,
            useNativeDriver: true,
        }).start();
    };

    return (
        <TouchableOpacity
            onPress={onPress}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            activeOpacity={0.7}
        >
            <Animated.View
                style={[
                    styles.button,
                    style,
                    {
                        transform: [{ scale: scaleAnimation }],
                    },
                ]}
            >
                <Text style={styles.buttonText}>{title}</Text>
            </Animated.View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#4CAF50',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default AnimatedButton;
