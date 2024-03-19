import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const RoomDetailScreen = ({ route }) => {
  const { room } = route.params;

  return (
    <ScrollView style={styles.container}>
      <ScrollView horizontal>
        <View style={styles.imageContainer}>
          {room.image.map((image, index) => (
            <Image key={index} source={image} style={styles.image} />
          ))}
        </View>
      </ScrollView>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageContainer: {
    flexDirection: 'row',
  },
  image: {
    width: 389,
    height: 250,
    resizeMode: 'cover',
    borderRadius: 10,
    marginHorizontal: 10,
  },
  detailsContainer: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop:10
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
