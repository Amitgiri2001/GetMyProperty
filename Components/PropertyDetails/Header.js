
import { MaterialCommunityIcons } from "@expo/vector-icons";
// import Color from "../constants/Color";
import { View, Image, Text, StyleSheet } from "react-native"
import AnimatedButton2 from "../Buttons/AnimatedButton2";
import Color from "../../constants/Color";


const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>Details</Text>

            <AnimatedButton2 title="Book Now" color={Color.primaryOrange} />
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginLeft: -80,
        marginRight: 20,
        height: 60,
        backgroundColor: "transparent",
        // marginLeft: 0
    },
    text: {
        fontSize: 22,
    }

});