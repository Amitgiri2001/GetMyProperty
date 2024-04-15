import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import Slider from '../Components/PropertyDetails/ImageContainer/ImageContainer';
import { AntDesign, FontAwesome } from '@expo/vector-icons'; // Import icons from expo/vector-icons
import Overview from '../Components/PropertyDetails/Overview/Overview';
import Highlights from '../Components/PropertyDetails/Highlights/Highlights';
import PropertyDetails from '../Components/PropertyDetails/Details/Details';
import MainHighlights from '../Components/PropertyDetails/Highlights/MainHighlights';
import NearbyAmenities from '../Components/PropertyDetails/Map/Nearby';
import Amenities from '../Components/PropertyDetails/Amenities/Amenities';
import ReviewComponent from '../Components/PropertyDetails/Overview/Ratings';
import ReviewsSection from '../Components/PropertyDetails/Reviews/Reviews';

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
    { key: 5, label: 'Parking:', value: 'Covered' },
    { key: 6, label: 'Security:', value: '24/7 Security Guards' },
    // Add more items as needed
  ];


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <Slider images={room.image} />
        <Overview title={room.title} price={room.price} />
        <MainHighlights />
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
        <Amenities amenities={room.amenities} />
        <ReviewsSection />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: 'white',
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

});

export default RoomDetailScreen;
