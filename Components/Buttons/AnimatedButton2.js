import React, { useRef, useEffect } from 'react';
import { TouchableOpacity, Text, StyleSheet, Animated, View } from 'react-native';

const AnimatedButton2 = ({ onPress, title, style, color }) => {
    const sliderAnimation = useRef(new Animated.Value(-100)).current;

    const loopAnimation = () => {
        Animated.sequence([
            Animated.timing(sliderAnimation, {
                toValue: 400,
                duration: 4000,
                useNativeDriver: true,
            }),
            Animated.timing(sliderAnimation, {
                toValue: -200,
                duration: 0,
                useNativeDriver: true,
            })
        ]).start(() => loopAnimation());
    };

    useEffect(() => {
        loopAnimation();
    }, []);

    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
            <View style={[styles.buttonContainer, style, { backgroundColor: color }]}>
                <Text style={styles.buttonText}>{title}</Text>
                <View style={styles.sliderContainer}>
                    <Animated.View
                        style={[
                            styles.slider,
                            {
                                transform: [
                                    { translateX: sliderAnimation },
                                    { rotate: '45deg' },
                                ],
                            },
                        ]}
                    />
                </View>
            </View>
        </TouchableOpacity >
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        paddingVertical: 8,
        paddingHorizontal: 24,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
        position: 'relative',
        overflow: 'hidden',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    sliderContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    slider: {
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        width: 8,
        height: 910,
    },
});

export default AnimatedButton2;
