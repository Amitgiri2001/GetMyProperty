
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, ImageBackground } from 'react-native';
import SearchBar from '../Components/SearchBar';
import AllProperties from './AllProperties';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <ImageBackground style={styles.image} source={require('../assets/search_back2.jpg')}>
                    <View style={styles.searchContainer}>
                        <SearchBar />
                    </View>
                </ImageBackground>
            </View>

            <View style={styles.body}>
                <AllProperties />
            </View>

        </View>
    )
}

export default Home


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        flex: 1,
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'flex-end',
        borderColor: 'black',
        borderBottomWidth: 1,
    },
    searchContainer: {
        // backgroundColor: 'rgba(0,0,0,0.5)', // Semi-transparent background to enhance readability
        paddingHorizontal: 10,
        paddingBottom: 5, // Add padding to lift the SearchBar above the bottom edge
        justifyContent: 'center',
        alignItems: 'center',
    },

    body: {
        marginTop: '5%',
        flex: 4,
    },

});
