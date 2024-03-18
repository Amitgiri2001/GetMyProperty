
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import SearchBar from '../Components/SearchBar';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <SearchBar />
            </View>
            <View style={styles.body}>

                <Button title='Properties' onPress={() => { navigation.navigate('All Properties') }} />
            </View>

        </View>
    )
}

export default Home


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 44,
    },
    headerContainer: {
        flex: 1,
    },
    header: {
        flex: 1,
        backgroundColor: 'black',
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingTop: 20,
        paddingLeft: 10,
        paddingRight: 10

    },
    body: {
        flex: 4,
    }
});
