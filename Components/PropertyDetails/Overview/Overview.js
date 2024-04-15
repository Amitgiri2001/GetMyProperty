import React from 'react'
import { Button, Icon } from 'react-native-elements';
import Color from '../../../constants/Color';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Card from '../Highlights/Card';
import ReviewComponent from './Ratings';
import Padding from '../../../constants/Padding';

const Overview = ({ title, price }) => {
    return (
        <View>
            <View style={styles.bottomContainer}>
                <View style={styles.container}>
                    <Icon name="beenhere" size={24} color="green" />
                    <Text style={styles.detailText}>Property has been verified by our team.</Text>
                </View>
                <Text style={styles.learnText}>Learn more</Text>
            </View>

            <View style={styles.priceContainer}>
                <View style={styles.priceTag}>
                    <Text style={styles.priceText}>{price}</Text>
                    {/* <Text style={styles.perMonthText}>/month</Text> */}
                </View>
                <Text style={styles.subheading}>Negotiable, Deposit amount: ₹2000</Text>
                <Text style={styles.learnText2}>Learn more</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Furnished</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.overviewContainer}>

                {/* Rating and reviews container  */}

                <Text style={styles.heading}>{title}</Text>

                <ReviewComponent rating={4.5} numReviews={11} />

                <Text style={styles.location}>Siddha Happyville, Rajarhat</Text>





            </View>

        </View>
    )
}

export default Overview;

const styles = StyleSheet.create({
    // Existing styles
    bottomContainer: {
        marginTop: 20,
        paddingHorizontal: Padding.sidePadding,
        padding: 10,
        backgroundColor: Color.postDetails.background1,
    },
    container: {
        flexDirection: 'row',
        position: 'absolute',
        paddingLeft: 20,
    },
    learnText: {
        color: 'blue',
        position: 'relative',
        left: 220,
        top: 5,
    },
    learnText2: {
        color: 'blue',
    },
    detailText: {
        paddingLeft: 5,
    },

    // New styles
    priceContainer: {
        marginTop: 20,
        paddingHorizontal: Padding.sidePadding,
        backgroundColor: Color.homeBackground2,
        paddingVertical: Padding.verticalPadding,
    },
    priceTag: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    priceText: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    perMonthText: {
        fontSize: 16,
        marginLeft: 5,
    },
    subheading: {
        marginTop: 10,
        fontSize: 16,
    },
    button: {
        marginTop: 10,
        backgroundColor: Color.postDetails.lightGrey,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        width: 100,
        borderColor: Color.Button.borderColor,
        borderWidth: .5,

    },
    buttonText: {
        color: 'black',
        fontSize: 16,
    },

    heading: {
        fontSize: 26,
        fontWeight: 'bold',
        // paddingLeft: 10
    },
    overviewContainer: {
        paddingVertical: Padding.verticalPadding,
        padding: Padding.sidePadding
    }
});
