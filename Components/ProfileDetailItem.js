import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { View, Text, StyleSheet } from 'react-native';
const ProfileDetailItem = ({ text, icon }) => {
    return (
        <View>
            <View style={styles.container}>
                <Ionicons name={icon} size={20} color="black" style={styles.icon} />
                <Text style={styles.text}>{text}</Text>
            </View>
        </View>
    )
}

export default ProfileDetailItem;

const styles = StyleSheet.create({

    container: {
        color: 'black',
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
        marginLeft: "10%",
    },
    icon: {
        margin: 10,
    },
    text: {
        color: 'grey'
    },
})