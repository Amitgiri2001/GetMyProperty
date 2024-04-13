import React, { useState, useRef, useEffect } from 'react';
import ProfileForm from './ProfileForm';

import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';
import Input from "../Components/Input";
import PhoneInput from 'react-native-phone-number-input';
import CustomButton from '../Components/Buttons/ColoredButton';
import Otp from './Otp';
import Color from '../constants/Color';
import CustomModel from './CustomModel';
import Config from 'react-native-config';
import { BASE_URL } from "../Dummy Data/Dummy"
import axios from 'axios';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { updateMobileNumber } from '../Store/ProfileSlice';


const Register = ({ modalVisible, setModalVisible }) => {

    const dispatch = useDispatch();
    // Profile form
    const [isProfileFormVisible, setProfileFormVisible] = useState(false);
    // State for entered OTP
    const [enteredOtp, setEnteredOtp] = useState('');
    const [value, setValue] = useState('');
    const [formattedValue, setFormattedValue] = useState('');

    const phoneInput = useRef(null);

    // redux
    const mobileNumber = useSelector(state => state.Profile.mobileNumber);

    useEffect(() => {
        console.log('Mobile Number Updated:', mobileNumber);
    }, [mobileNumber]);


    function handleOtpChange(text) {
        console.log("Text" + text)
        setEnteredOtp(text);
    }

    async function sendOTP() {
        const checkValid = phoneInput.current?.isValidNumber(value);

        // set the mobile number
        dispatch(updateMobileNumber(value));
        console.log('Mobile number to be updated:', value);

        console.log('Updated Profile State:' + mobileNumber);


        if (checkValid) {
            try {

                const response = await axios.post(`${BASE_URL}otp/request-otp`, {
                    "mobile_number": value
                });
                console.log('Response:', response.data);
            }
            catch (error) {
                console.log(error)
            }
        }
        else {
            console.log("Error sending OTP")
        }
    }
    async function onContinue() {

        try {
            console.log("Entered Otp" + enteredOtp + " " + value)
            const response = await axios.post(`${BASE_URL}user/postData`, {
                "mobile_number": value,
                "enteredOtp": enteredOtp,

            });
            console.log('Response:', response.data);
            setProfileFormVisible(true);
            setModalVisible(false)
        }
        catch (error) {
            console.log("Error in user creation " + error)
        }




    }

    return (
        <View style={styles.container}>
            <CustomModel modalVisible={modalVisible} setModalVisible={setModalVisible}>
                <View>
                    <Text style={styles.heading}>Enter Mobile Number</Text>
                    <SafeAreaView style={styles.wrapper}>
                        {!phoneInput.current?.isValidNumber(value) && (
                            <View style={styles.message}>
                                <Text>Value : {value}</Text>
                                <Text>Formatted Value : {formattedValue}</Text>
                                <Text>Valid : False</Text>
                            </View>
                        )}
                        <PhoneInput
                            ref={phoneInput}
                            defaultValue={value}
                            defaultCode="IN"
                            layout="first"
                            onChangeText={(text) => {
                                setValue(text);
                            }}
                            onChangeFormattedText={(text) => {
                                setFormattedValue(text);
                            }}
                            withDarkTheme
                            withShadow
                            autoFocus
                        />

                        <CustomButton
                            text="Send OTP"
                            textColor="white"
                            backgroundColor={Color.primaryGreen}
                            triggeredFunction={() => sendOTP()}
                        />

                        <View style={styles.OtpContainer}>
                            <Text>OTP</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter the OTP"
                                keyboardType="phone-pad"
                                value={enteredOtp}
                                onChangeText={handleOtpChange}
                            />
                        </View>

                    </SafeAreaView>
                    <View style={styles.buttonContainer}>
                        <CustomButton
                            text="Close"
                            textColor="white"
                            backgroundColor={Color.primaryRed}
                            triggeredFunction={() => setModalVisible(!modalVisible)}
                        />
                        <CustomButton
                            text="Continue"
                            textColor="white"
                            backgroundColor={Color.primaryGreen}
                            triggeredFunction={onContinue}
                        />
                    </View>
                </View>
            </CustomModel>
            <ProfileForm isProfileFormVisible={isProfileFormVisible} setProfileFormVisible={setProfileFormVisible} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    heading: {
        fontSize: 24,
        marginBottom: 20,
    },
    wrapper: {
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    message: {
        marginBottom: 20,
    },
    checkButton: {
        backgroundColor: '#ccc',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 10,
    },
    checkButtonText: {
        fontSize: 16,
        color: '#fff',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 20,
    },
});

export default Register;
