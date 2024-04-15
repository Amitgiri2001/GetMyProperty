import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import NearbyAmenities from '../Map/Nearby'
import Padding from '../../../constants/Padding'

const Amenities = ({ amenities }) => {
    return (
        <View style={styles.detailsContainer}>

            <Text style={styles.label}>Amenities:</Text>
            <View style={styles.amenitiesContainer}>
                {amenities.map((amenity, index) => (
                    <Text key={index} style={styles.amenity}>{amenity}</Text>
                ))}
            </View>

            <NearbyAmenities />
        </View>
    )
}

export default Amenities;
const styles = StyleSheet.create({
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    amenitiesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    amenity: {
        fontSize: 16,
        marginRight: 10,
        marginBottom: 5,
        backgroundColor: '#f2f2f2',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    detailsContainer: {
        paddingHorizontal: Padding.sidePadding,
        paddingVertical: Padding.verticalPadding,
    },
});