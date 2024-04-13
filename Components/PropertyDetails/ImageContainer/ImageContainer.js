import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';

const Slider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);



    return (
        <View style={styles.container}>
            <Swiper
                autoplay
                showsButtons={true}
                autoplayTimeout={3}
                showsPagination={true}
                onIndexChanged={(index) => setCurrentIndex(index)}

                height={200}
            >
                {images.map((image, index) => (
                    <View key={index} style={styles.slide}>
                        <Image source={image} style={styles.image} />
                    </View>
                ))}
            </Swiper>
        </View>
    );
};

const styles = StyleSheet.create({
    slide: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: Dimensions.get('window').width,
        height: 200, // Adjust height as needed
        resizeMode: 'cover',
    },
    container: {
        height: 200
    }
});

export default Slider;
