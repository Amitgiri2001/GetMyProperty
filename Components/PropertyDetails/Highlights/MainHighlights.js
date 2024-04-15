import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Card from './Card';
import Color from "../../../constants/Color";
import Padding from '../../../constants/Padding';
import Header from './Header';

const MainHighlights = () => {
    return (
        <View style={styles.mainHighlightContainer}>
            <Header icon='bag-check-outline' heading="Key Highlights" subheading="Key Points to be noted" />
            <ScrollView style={styles.cardContainer} horizontal>
                <Card icon={{ name: "apartment", color: 'blue' }} text="2BHK" />
                <Card icon={{ name: "stairs", color: 'orange' }} text="8 out of 10 floors" />
                <Card icon={{ name: "people", color: 'blue', type: 'material' }} text="For Family/Single person" />
                <Card icon={{ name: "square", color: 'orange' }} text="Area 1800sf" />
            </ScrollView>
        </View>
    )
}

export default MainHighlights;

const styles = StyleSheet.create({
    mainHighlightContainer: {
        backgroundColor: Color.homeBackground2,
        // paddingLeft: Padding.sidePadding,
        paddingVertical: Padding.verticalPadding,
    },
    mainHighlightHeader: {
        fontSize: 26,
        fontWeight: 'bold',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardContainer: {
        flexDirection: 'row'
    },
});
