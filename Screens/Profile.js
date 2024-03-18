import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Pressable } from 'react-native';

import Register from '../Modal/Register';
import CustomButton from '../Components/Button';
const ProfilePage = () => {
    const [modalVisible, setModalVisible] = useState(false);

    function openRegisterModal() {
        setModalVisible(true);
    }
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/ProfilePic/boy1.png')} style={styles.profileImage} />
            </View>
            <Text style={styles.text}>Login to See 1000 Properties near by you & Book Properties in one click</Text>
            <View style={styles.buttonContainer}>
                <CustomButton text="Login" textColor="white" backgroundColor='#F194FF' triggeredFunction={openRegisterModal} />
                <CustomButton text="Register" textColor="white" backgroundColor="#4CD964" triggeredFunction={openRegisterModal} />
            </View>
            <Register modalVisible={modalVisible} setModalVisible={setModalVisible} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        marginTop: '35%'
    },
    imageContainer: {
        marginTop: 30,
        marginBottom: 20,
        borderRadius: 90, // Half of the width/height of the image
        overflow: 'hidden', // Ensure the image is clipped to the border radius
    },
    profileImage: {
        width: 180,
        height: 180,
    },
    text: {
        textAlign: 'center',
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: "space-between"
    },

    registerButton: {
        backgroundColor: '#4CD964',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        paddingHorizontal: 40,
        marginHorizontal: 10
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
});

export default ProfilePage;
