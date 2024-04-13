import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Color from '../../../constants/Color';

const PropertyDetails = ({ title, details }) => {
    return (
        <View style={styles.propertyDetails}>
            <Text style={styles.detailsTitle}>{title}</Text>
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

        borderRadius: 4,
        padding: 16,
        paddingVertical: 24,
        backgroundColor: Color.homeBackground2
    },
    detailsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
    },
    detailItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 4,
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
