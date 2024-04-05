import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';


import Input from '../Components/Input';
import CustomButton from '../Components/Buttons/ColoredButton';
import CustomModel from './CustomModel';
import Otp from './Otp';
import Color from '../constants/Color';



const Register = ({ modalVisible, setModalVisible }) => {

    const [isOtpModelVisible, setOtpModelVisible] = useState(false);
    function onContinue() {
        setOtpModelVisible(true);
        setModalVisible(false);
    }
    return (

        <View>
            <CustomModel modalVisible={modalVisible} setModalVisible={setModalVisible}>
                <View>

                    <Text style={styles.heading}>Enter Mobile Number</Text>
                    <Input type="Mobile Number" keyboardType="phone-pad" placeholder="Enter Your Mobile Number" errorText="Please enter a valid 10-digit mobile number" />

                    <View style={styles.buttonContainer}>
                        <CustomButton text="Close" textColor="white" backgroundColor={Color.primaryRed} triggeredFunction={() => setModalVisible(!modalVisible)} />
                        <CustomButton text="Continue" textColor="white" backgroundColor={Color.primaryGreen} triggeredFunction={onContinue} /></View>


                </View>

            </CustomModel>
            <Otp isOtpModelVisible={isOtpModelVisible} setOtpModelVisible={setOtpModelVisible} />

        </View>


    );
};

const styles = StyleSheet.create({

    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },

    heading: {
        fontSize: 24
    },
    buttonContainer: {
        flexDirection: "row"
    },
});

export default Register;