import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import RoomCard from '../Components/RoomCard';
import roomsData from '../Dummy Data/roomsData';
import { useNavigation } from '@react-navigation/core';
import RecentSearch from '../Components/HomeDesign/RecentSearch/RecentSearch';
import RecentlyPostedProperty from '../Components/HomeDesign/RecentlyPostedProperty/RecentlyPostedProperty';
import HomeByFurnishingSection from '../Components/HomeDesign/Furnishing/Furnishing';
import ScrollableSection from '../Components/HomeDesign/ModernSection/scrollableSection';
import RatingSection from '../Components/HomeDesign/Ratings/Ratings';
import RegisterPropertyCard from '../Components/HomeDesign/RegisterForPost/RegisterForPost';
import ExplorePopularPlaces from "../Components/HomeDesign/PopularPlaces/PopularPlaces"
const AllProperties = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {roomsData.map((room, index) => (
          <React.Fragment key={room.id}>
            <RoomCard room={room} onPress={() => { navigation.navigate('RoomDetails') }} />
            {(index + 1) === 3 && <RecentSearch />}
            {(index + 1) === 4 && <RecentlyPostedProperty data={roomsData} />}
            {(index + 1) === 5 && <ScrollableSection />}
            {(index + 1) === 6 && <HomeByFurnishingSection />}
            {(index + 1) === 7 && <RegisterPropertyCard />}
          </React.Fragment>
        ))}

        {/* Popular places */}
        <ExplorePopularPlaces />
        {/* Rating */}
        <RatingSection />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 2,
  },
});

export default AllProperties;
