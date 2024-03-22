
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Color from "../constants/Color";
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
            <TouchableOpacity style={{ marginRight: 10 }} onPress={() => navigation.navigate('All Properties')}>
                <MaterialCommunityIcons name="bell" size={30} color={Color.notification} />
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
        marginHorizontal: 20,
        height: 60,
        // backgroundColor: ,
        marginLeft: 0
    },
    logo: {
        width: 40,
        height: 40,
        marginLeft: 10,
    },
});