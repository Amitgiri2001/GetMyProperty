import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const RatingSection = () => {
    const [rating, setRating] = useState(0);

    const handleStarPress = (selectedRating) => {
        setRating(selectedRating);
    };

    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/rating.jpg')} style={styles.image} />
            <View style={styles.ratingContainer}>
                <Text style={styles.ratingText}>Please give your rating</Text>
                <View style={styles.starsContainer}>
                    {[1, 2, 3, 4, 5].map((star) => (
                        <TouchableOpacity
                            key={star}
                            onPress={() => handleStarPress(star)}
                            style={styles.starButton}
                        >
                            <Ionicons
                                name={star <= rating ? 'star' : 'star-outline'}
                                size={30}
                                color={star <= rating ? '#FFD700' : '#ccc'}
                            />
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: 'white',
        borderRadius: 10,
        marginVertical: 10,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 10,
        marginRight: 20,
    },
    ratingContainer: {
        flex: 1,
    },
    ratingText: {
        fontSize: 18,
        marginBottom: 10,
        color: '#333',
    },
    starsContainer: {
        flexDirection: 'row',
    },
    starButton: {
        marginRight: 5,
    },
});

export default RatingSection;
