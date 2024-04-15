import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Padding from '../../../constants/Padding';
import Color from '../../../constants/Color'; 0
import Header from "../Highlights/Header"
import ReviewComponent from '../Overview/Ratings';

// Dummy data for reviews
const dummyReviews = [
    { id: 1, rating: 4, comment: 'Great product!', timestamp: '2022-04-15' },
    { id: 2, rating: 5, comment: 'Excellent service!', timestamp: '2022-04-14' },
    { id: 3, rating: 3, comment: 'Could be better.', timestamp: '2022-04-13' },
    // Add more dummy reviews as needed
];

const ReviewsSection = () => {
    // Calculate average rating
    const averageRating = dummyReviews.reduce((total, review) => total + review.rating, 0) / dummyReviews.length;

    // Render individual review item
    const renderReviewItem = (review) => (
        <View key={review.id} style={styles.reviewItem}>

            <Text style={styles.rating}>{review.rating}</Text>
            <Text style={styles.comment}>{review.comment}</Text>
            <Text style={styles.timestamp}>{review.timestamp}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Header icon="chatbox-ellipses-outline" heading="Rating & Reviews" subheading="User satisfaction is our moto" color={Color.primaryOrange} />
            <View style={styles.header}>

                <ReviewComponent rating={4.5} numReviews={11} />
            </View>
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                {dummyReviews.map(renderReviewItem)}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // paddingHorizontal: Padding.sidePadding,
        paddingVertical: Padding.verticalPadding,
        backgroundColor: Color.homeBackground2,
        borderRadius: 10,
        // marginTop: 20,
        elevation: 2,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        paddingHorizontal: Padding.sidePadding,
    },
    averageRating: {

        fontSize: 24,
        fontWeight: 'bold',
        marginRight: 10,
        color: '#ff9900', // Orange color for average rating
    },
    totalReviews: {
        fontSize: 16,
        color: '#666666',
    },
    scrollViewContainer: {
        paddingBottom: 20, // Add padding for bottom spacing
        paddingHorizontal: Padding.sidePadding,
    },
    reviewItem: {
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
        flexDirection: 'row', // Display rating and comment side-by-side
        alignItems: 'center', // Align content vertically in the row
    },
    rating: {
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 15,
        flex: 0.2, // Allocate 20% width for rating
    },
    comment: {
        fontSize: 16,
        flex: 0.8, // Allocate 80% width for comment
    },
    timestamp: {
        fontSize: 14,
        color: '#666666',
        marginTop: 5, // Add top margin for spacing after comment
    },
});

export default ReviewsSection;
