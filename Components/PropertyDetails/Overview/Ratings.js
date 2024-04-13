import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Rating from 'react-native-star-rating';

const ReviewComponent = ({ rating, numReviews, location }) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>

                <Rating
                    activeColor="#F4C10F"
                    fullStarColor="#F4C10F" // Add this line to specify the color of filled stars
                    rating={rating}
                    readonly
                    starSize={16}
                />
                <Text style={styles.numReviews}>({numReviews}
                    Reviews)</Text>

            </View>
            <Text style={styles.location}>{location}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 10,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    location: {
        fontSize: 16,

    },
    numReviews: {
        fontSize: 12,
        marginLeft: 8,
    },
});

export default ReviewComponent;
