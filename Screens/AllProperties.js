import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import RoomCard from '../Components/RoomCard';
import roomsData from '../Dummy Data/roomsData';
import { useNavigation } from '@react-navigation/core';

const AllProperties = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {roomsData.map(room => (
          <RoomCard key={room.id} room={room} onPress={() => { navigation.navigate('RoomDetails') }} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
});

export default AllProperties;
