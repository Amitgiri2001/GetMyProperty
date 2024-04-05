import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Pressable } from 'react-native';

import Register from '../Modal/Register';
import CustomButton from '../Components/Buttons/ColoredButton';

// redux
import { updateProfile } from "../Store/ProfileSlice";
import { useSelector, useDispatch } from 'react-redux'
import ProfileDetailItem from '../Components/ProfileDetailItem';


const ProfilePage = () => {
    // Profile form Data
    const [ProfileData, setProfileData] = useState({});

    // redux
    // Inside your component
    const name = useSelector(state => state.Profile.name);
    const email = useSelector(state => state.Profile.email);
    const mobileNumber = useSelector(state => state.Profile.mobileNumber);
    const agent = useSelector(state => state.Profile.agent);
    const gender = useSelector(state => state.Profile.gender);
    console.log(name); // This should log the name
    const dispatch = useDispatch()
    const [modalVisible, setModalVisible] = useState(false);

    function openRegisterModal() {
        setModalVisible(true);
    }
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/ProfilePic/boy1.png')} style={styles.profileImage} />
            </View>

            {name &&
                <View style={styles.profileContainer}>
                    <ProfileDetailItem text={name} icon="person" />
                    <ProfileDetailItem text={email} icon="mail" />
                    <ProfileDetailItem text={mobileNumber} icon="call" />
                    <ProfileDetailItem text={agent} icon="person" />
                    <ProfileDetailItem text={gender} icon="transgender" />
                </View>
            }
            {!name && <Text style={styles.text}>Login to See 1000 Properties near by you & Book Properties in one click</Text>}
            {!mobileNumber && <View style={styles.buttonContainer}>
                <CustomButton text="Login" textColor="white" backgroundColor='#F194FF' triggeredFunction={openRegisterModal} />
                <CustomButton text="Register" textColor="white" backgroundColor="#4CD964" triggeredFunction={openRegisterModal} />
            </View>}

            {mobileNumber && <View style={styles.buttonContainer}>
                <CustomButton text="Log Out" textColor="white" backgroundColor='#F194FF' triggeredFunction={openRegisterModal} />
                <CustomButton text="Update" textColor="white" backgroundColor="#4CD964" triggeredFunction={openRegisterModal} />
            </View>}

            <Register modalVisible={modalVisible} setModalVisible={setModalVisible} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: "50%",
        // height: '100%',
        // // height: 1500,
        justifyContent: 'center',
        // marginBottom: 200,
        // alignItems: 'center',
        padding: 30,
        // marginTop: '5%'
    },
    imageContainer: {
        // marginTop: 30,
        marginBottom: 20,
        borderRadius: 90, // Half of the width/height of the image
        overflow: 'hidden', // Ensure the image is clipped to the border radius
        marginHorizontal: '20%'
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
    profileContainer: {
        paddingBottom: "3%",
    },



});

export default ProfilePage;
