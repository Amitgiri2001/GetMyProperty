import React from 'react';
import { View, Text, StyleSheet, FlatList, Animated } from 'react-native';
import Color from '../../../constants/Color';
import { Icon, Image } from 'react-native-elements';

const DATA = [
    { id: '1', type: 'text', content: 'BHK choice in your mind?' },
    { id: '2', type: 'card', content: '1BHK', name: "home" },
    { id: '3', type: 'card', content: '2BHK', name: "house" },
    { id: '4', type: 'card', content: '3BHK', name: "home-work" },
    { id: '5', type: 'card', content: '4BHK', name: "domain" },

];

const FadeOutText = ({ content, scrollX }) => {
    const opacity = scrollX.interpolate({
        inputRange: [0, 100], // Adjust range based on your needs
        outputRange: [1, 0],
        extrapolate: 'clamp',
    });

    return (
        <Animated.View style={[styles.textContainer, { opacity }]}>
            <Image source={require("../../../assets/vector/home2.png")} style={styles.image} />
            <Text style={styles.text}>{content}</Text>
        </Animated.View>
    );
};

const renderItem = ({ item, scrollX }) => {
    if (item.type === 'text') {
        return <FadeOutText content={item.content} scrollX={scrollX} />;
    } else {
        return (
            <View style={styles.cardContainer}>
                <Icon name={item.name} size={46} color={Color.notification} />
                <Text style={styles.cardText}>{item.content}</Text>
            </View>
        );
    }
};

const ScrollableSection = () => {
    const scrollX = React.useRef(new Animated.Value(0)).current;

    const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

    return (
        <View style={styles.container}>
            <AnimatedFlatList
                horizontal
                data={DATA}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => renderItem({ item, scrollX })}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: true }
                )}
                scrollEventThrottle={16} // Adjust as needed
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        paddingVertical: 30,
        backgroundColor: Color.homeBackground1,
    },
    cardContainer: {
        backgroundColor: 'white',
        padding: 20,
        marginRight: 10,
        borderRadius: 10,
        borderWidth: .3,
        // Shadow properties for iOS
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        // Elevation for Android
        elevation: 4,
    },
    cardText: {
        fontSize: 26,

    },
    textContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        width: 160,
    },
    image: {
        width: 80, // Adjust width as needed
        height: 80, // Adjust height as needed
        marginRight: 10, // Adjust margin as needed
    },
    text: {
        flex: 1, // Allow text to wrap
        fontSize: 20,

    },
});

export default ScrollableSection;
