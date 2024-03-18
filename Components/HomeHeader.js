
import { View, Image, TouchableOpacity, Text, StyleSheet } from "react-native"

const CustomHeader = ({ navigation }) => {
    return (
        <View style={styles.header}>
            {/* Logo on the left */}
            <Image
                source={require('../assets/logo2.webp')} // Replace './logo.png' with the path to your logo image
                style={styles.logo}
            />
            {/* Button on the right */}
            <TouchableOpacity onPress={() => navigation.navigate('All Properties')}>
                <Text>Post Property</Text>
            </TouchableOpacity>
        </View>
    );
};

export default CustomHeader;

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        height: 60,
        // backgroundColor: ,
        marginLeft: 0
    },
    logo: {
        width: 40,
        height: 40,
    },
});