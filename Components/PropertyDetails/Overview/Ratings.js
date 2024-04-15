import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Rating from 'react-native-star-rating';

const ReviewComponent = ({ rating, numReviews, location }) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <Text style={styles.text}>{rating}</Text>

                <Rating
                    activeColor="#F4C10F"
                    fullStarColor="#F4C10F" // Add this line to specify the color of filled stars
                    rating={rating}
                    readonly
                    starSize={20}
                />
                <Text style={styles.numReviews}>({numReviews}
                    Reviews)</Text>

            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        // paddingHorizontal: 10,
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
    text: {
        fontSize: 20,
        marginRight: 5,
    }
});

export default ReviewComponent;
