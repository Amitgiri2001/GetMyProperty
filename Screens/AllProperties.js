import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import RoomCard from '../Components/RoomCard';
import roomsData from '../Dummy Data/roomsData';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {roomsData.map(room => (
          <RoomCard key={room.id} room={room} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default App;
