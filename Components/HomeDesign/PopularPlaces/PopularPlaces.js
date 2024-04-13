import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import Color from '../../../constants/Color';

const kolkataPlaces = [
    { id: '1', place: 'Victoria Memorial', image: require('../../../assets/PopularPlaces/victoria.jpeg') },
    { id: '2', place: 'Howrah Bridge', image: require('../../../assets/PopularPlaces/howrah.jpeg') },
    { id: '3', place: 'Kalighat Temple', image: require('../../../assets/PopularPlaces/kalighat.jpeg') },
    { id: '4', place: 'Indian Museum', image: require('../../../assets/PopularPlaces/musiam.jpeg') },
    { id: '5', place: 'Science City', image: require('../../../assets/PopularPlaces/science-city.jpeg') },
];

const ExplorePopularPlaces = () => {
    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.place}>{item.place}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Explore popular places</Text>
            <Text style={styles.subtitle}>Buy or Rent properties in top places in Kolkata.</Text>
            <FlatList
                horizontal
                data={kolkataPlaces}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.flatlist}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        paddingHorizontal: 10,
        backgroundColor: Color.homeBackground1,
        paddingVertical: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 20,
        color: '#666666',
    },
    flatlist: {
        paddingBottom: 20,
    },
    item: {
        marginRight: 20,
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 5,
    },
    place: {
        fontSize: 16,
        // fontWeight: 'bold',
    },
});

export default ExplorePopularPlaces;
