import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import Slider from '../Components/PropertyDetails/ImageContainer/ImageContainer';
import { AntDesign, FontAwesome } from '@expo/vector-icons'; // Import icons from expo/vector-icons
import Overview from '../Components/PropertyDetails/Overview/Overview';
import Highlights from '../Components/PropertyDetails/Highlights.js/Highlights';
import PropertyDetails from '../Components/PropertyDetails/Details/Details';

const RoomDetailScreen = ({ route, navigation }) => {
  const { room } = route.params;

  // Function to handle the share button press
  const handleShare = () => {
    // Implement share functionality here
  };

  // Function to handle the love button press
  const handleLove = () => {
    // Implement love functionality here
  };

  const details = [
    { key: 1, label: 'Layout:', value: '3 BHK, 2 Baths' },
    { key: 2, label: 'Carpet Area:', value: '1100 sq.ft. (102.19 sq.m.)' },
    { key: 3, label: 'Furnishing:', value: 'Furnished' },
    { key: 4, label: 'Power backup:', value: 'Full' },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <Slider images={room.image} />
        <Overview />
        <Highlights />
        <PropertyDetails title="Property Details" details={details} />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleShare} style={styles.button}>
            <FontAwesome name="share-alt" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLove} style={styles.button}>
            <AntDesign name="heart" size={24} color="red" />
          </TouchableOpacity>
        </View>

        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{room.title}</Text>
          <Text style={styles.location}>{room.location}</Text>
          <Text style={styles.price}>{room.price}</Text>
          <Text style={styles.description}>{room.description}</Text>
          <Text style={styles.label}>Amenities:</Text>
          <View style={styles.amenitiesContainer}>
            {room.amenities.map((amenity, index) => (
              <Text key={index} style={styles.amenity}>{amenity}</Text>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  buttonContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    flexDirection: 'row',
  },
  button: {
    marginHorizontal: 5,
  },
  detailsContainer: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10
  },
  location: {
    fontSize: 18,
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007bff',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
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
});

export default RoomDetailScreen;
