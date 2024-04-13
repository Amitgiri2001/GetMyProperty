import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, FlatList } from 'react-native';
import Color from '../../../constants/Color';

const windowWidth = Dimensions.get('window').width;

const HomeByFurnishingSection = () => {
    const cardWidth = windowWidth * 0.5; // 40% of screen width
    const data = [
        { title: "Furnished", imageSrc: require("../../../assets/furnishing/furnished.jpg") },
        { title: "Semi-Furnished", imageSrc: require("../../../assets/furnishing/semi-furnished.jpg") },
        { title: "Un-Furnished", imageSrc: require("../../../assets/furnishing/un-furnished.jpeg") }
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home By Furnishing</Text>
            <Text style={styles.subsection}>Choose your preferred furnishing</Text>
            <View style={styles.cardsContainer}>
                <FlatList
                    horizontal
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) =>
                        <View style={[styles.card, { width: cardWidth }]}>
                            <Image source={item.imageSrc} style={styles.image} />
                            <Text style={styles.cardTitle}>{item.title}</Text>
                        </View>}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingVertical: 20,
        backgroundColor: Color.homeBackground1,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subsection: {
        fontSize: 18,
        marginBottom: 20,
        color: Color.Button.borderColor,
    },
    cardsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 10,
        marginRight: 10,
        borderWidth: .5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, // This elevation property is specifically for Android
    },
    image: {
        width: '100%',
        height: 150,
        resizeMode: 'cover',
    },
    cardTitle: {
        fontSize: 20,
        padding: 10,
        textAlign: 'center',
    },
});

export default HomeByFurnishingSection;
