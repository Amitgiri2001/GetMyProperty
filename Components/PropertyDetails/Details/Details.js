import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Color from '../../../constants/Color';
import Header from '../Highlights/Header';
import Padding from '../../../constants/Padding';

const PropertyDetails = ({ title, details }) => {
    return (
        <View style={styles.propertyDetails}>
            <Header icon="home" color={Color.primaryOrange} heading="Details" subheading="Emphasized details of the property" />
            <View>
                {details.map((item) => (
                    <View key={item.key} style={styles.detailItem}>
                        <Text style={styles.detailLabel}>{item.label}</Text>
                        <Text style={styles.detailValue}>{item.value}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    propertyDetails: {
        paddingVertical: Padding.verticalPadding,

        backgroundColor: Color.homeBackground2,
    },
    detailItem: {
        paddingHorizontal: Padding.sidePadding,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 6,
    },
    detailLabel: {
        fontWeight: 'bold',
        width: 120,
    },
    detailValue: {
        flex: 1,
    },
});

export default PropertyDetails;
