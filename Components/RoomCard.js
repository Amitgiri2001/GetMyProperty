import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import AnimatedButton from './Buttons/AnimatedButton';
import { Icon } from 'react-native-elements'
import VerifiedButton from './Buttons/VerifiedButton';

const RoomCard = ({ room }) => {
  const navigation = useNavigation();
  const [isLoved, setIsLoved] = useState(false);

  const handlePress = () => {
    navigation.navigate('RoomDetails', { room });
  };

  const toggleLove = () => {
    setIsLoved(!isLoved);
  };

  const loveColor = isLoved ? '#FF0000' : '#000000';

  const primaryImage = room.image[0];

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image source={primaryImage} style={styles.image} />
          <VerifiedButton />

          {room.recentlyPosted && <View style={styles.priceTag}>
            <Text style={styles.priceMonth}>5000 /month</Text>
            <Text>Deposit:40000</Text>
          </View>}



          <TouchableOpacity style={styles.loveButton} onPress={toggleLove}>
            <AntDesign name={isLoved ? 'heart' : 'hearto'} size={24} color={loveColor} />
          </TouchableOpacity>
        </View>
        <View style={styles.details}>
          <Text style={styles.title}>{room.recentlyPosted ? room.title.substring(0, 20) : room.title}</Text>
          {!room.recentlyPosted && <Text style={styles.description}>{room.description.substring(0, 100)}...</Text>}
        </View>
        {!room.recentlyPosted && <View style={styles.footer}>
          <Text style={styles.price}>{room.price}</Text>
          <Text style={styles.location}>{room.location}</Text>
        </View>}
      </View>
    </TouchableOpacity>
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
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,

  },

  loveButton: {
    position: 'absolute',
    top: 10,
    right: 10,
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
  priceTag: {
    position: 'absolute',
    bottom: 10,
    left: '10%',
    width: '80%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: .5
  },
  priceMonth: {
    fontSize: 18,
  },
});

export default RoomCard;
