import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const RoomCard = ({ room }) => {
  return (
    <View style={styles.card}>
      <Image source={room.image} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{room.title}</Text>
        <Text style={styles.description}>{room.description.substring(0, 100)}...</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.price}>{room.price}</Text>
        <Text style={styles.location}>{room.location}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    backgroundColor: '#fff',
    elevation: 4,
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  details: {
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  description: {
    fontSize: 16,
    color: '#666',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 15,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  location: {
    fontSize: 16,
    color: '#666',
  },
});
export default RoomCard;
