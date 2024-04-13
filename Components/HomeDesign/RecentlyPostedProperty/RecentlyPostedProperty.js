import React from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, Dimensions } from 'react-native';
import RoomCard from '../../RoomCard'; // Assuming you have a RoomCard component
import Color from '../../../constants/Color';

const windowWidth = Dimensions.get('window').width;

const Room = <View>

</View>

const RecentlyPostedProperty = ({ data }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Recently Posted Properties</Text>
            <Text style={styles.subsection}>Fresh Properties,Be quick before they rent out</Text>
            <FlatList
                horizontal
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <View style={styles.oneCard}><RoomCard room={{ ...item, recentlyPosted: true }} /></View>}
                contentContainerStyle={styles.cardContainer}

            />
        </View>
    );
};

const cardWidth = (windowWidth) / 1.5; // Assuming 20 spacing on each side

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        paddingLeft: 10,
        backgroundColor: Color.homeBackground1,
    },
    heading: {
        fontSize: 23,
        marginBottom: 10,
    },
    cardContainer: {
        //
    },

    oneCard: {
        width: cardWidth,
        height: 300,
        marginHorizontal: 6
    },
    subsection: {
        fontSize: 18,
        marginBottom: 20,
        color: Color.Button.borderColor,
    },
});

export default RecentlyPostedProperty;
