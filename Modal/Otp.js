import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import CustomModel from './CustomModel';
import Input from "../Components/Input";
import CustomButton from '../Components/Buttons/ColoredButton';
import Color from '../constants/Color';
import ProfileForm from './ProfileForm';
import { useSelector } from 'react-redux';

const Otp = ({ isOtpModelVisible, setOtpModelVisible }) => {
    // Profile form
    const [isProfileFormVisible, setProfileFormVisible] = useState(false);
    // State for entered OTP
    const [enteredOtp, setEnteredOtp] = useState('');

    const mobileNumber = useSelector(state => state.Profile?.mobileNumber);

    function onContinue() {
        // check if the entered OTP is same as the sending OTP
        console.log("OTP: " + enteredOtp);
        console.log("Mobile: " + mobileNumber);
        setOtpModelVisible(false);
        setProfileFormVisible(true);
    }

    function handleOtpChange(text) {
        setEnteredOtp(text);
        console.log("Text" + text)
    }

    return (
        <View>
            <CustomModel modalVisible={isOtpModelVisible} setModalVisible={setOtpModelVisible}>
                <Input
                    type="text"
                    placeholder="Enter the OTP"
                    keyboardType="phone-pad"
                    errorText="Enter a valid OTP"
                    // Value of the OTP input field
                    value={enteredOtp}
                    // Update the entered OTP state when the user types
                    onChangeText={(text) => handleOtpChange(text)}
                />
                <View style={styles.buttonContainer}>
                    <CustomButton
                        textColor="white"
                        text="Close"
                        backgroundColor={Color.primaryRed}
                        triggeredFunction={() => setOtpModelVisible(false)}
                    />
                    <CustomButton
                        textColor="white"
                        text="Continue"
                        backgroundColor={Color.primaryGreen}
                        triggeredFunction={onContinue}
                    />
                </View>
            </CustomModel>

            <ProfileForm isProfileFormVisible={isProfileFormVisible} setProfileFormVisible={setProfileFormVisible} />

        </View>
    );
};

export default Otp;

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
    }
});
