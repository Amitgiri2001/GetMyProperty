import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Color from '../../../constants/Color';


const NearbyAmenities = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Nearby Amenities</Text>
            <View style={styles.amenitiesContainer}>
                <View style={styles.amenityItem}>
                    <Icon name="bus" size={20} color="#333" style={styles.icon} />
                    <Text style={styles.amenityName}>Bus Stops :</Text>
                    <Text style={styles.amenityName1}>Hawrah</Text>
                </View>
                <View style={styles.amenityItem}>
                    <Icon name="train" size={20} color="#333" style={styles.icon} />
                    <Text style={styles.amenityName}>Railway Stations :</Text><Text style={styles.amenityName1}>Kolkata</Text>
                </View>
                <View style={styles.amenityItem}>
                    <Icon name="subway" size={20} color="#333" style={styles.icon} />
                    <Text style={styles.amenityName}>Metro Stations :</Text><Text style={styles.amenityName1}>Bus Stops</Text>
                </View>
                <View style={styles.amenityItem}>
                    <Icon name="university" size={20} color="#333" style={styles.icon} />
                    <Text style={styles.amenityName}>Schools :</Text><Text style={styles.amenityName1}>Bus Stops</Text>
                </View>
                <View style={styles.amenityItem}>
                    <Icon name="hospital-o" size={20} color="#333" style={styles.icon} />
                    <Text style={styles.amenityName}>Hospitals :</Text><Text style={styles.amenityName1}>Bus Stops</Text>
                </View>
                <View style={styles.amenityItem}>
                    <Icon name="cutlery" size={20} color="#333" style={styles.icon} />
                    <Text style={styles.amenityName}>Restaurants :</Text><Text style={styles.amenityName1}>Bus Stops</Text>
                </View>
                {/* Add more amenities as needed */}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 20,
        elevation: 3,
        backgroundColor: Color.homeBackground1,

    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    amenitiesContainer: {
        flexDirection: 'column',
    },
    amenityItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    icon: {
        width: 30, // Fixed width for icons
        marginRight: 10,
    },
    amenityName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    amenityName1: {
        fontSize: 16,
        // fontWeight: 'bold',
        // color: '#333',/
        marginLeft: 20,
    },
});

export default NearbyAmenities;
