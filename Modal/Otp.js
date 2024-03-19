import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import CustomModel from './CustomModel'
import Input from "../Components/Input"
import CustomButton from '../Components/Button'
import Color from '../constants/Color'
import ProfileForm from './ProfileForm'

const Otp = ({ isOtpModelVisible, setOtpModelVisible }) => {

    // Profile form
    const [isProfileFormVisible, setProfileFormVisible] = useState(false);
    function onContinue() {
        setOtpModelVisible(false)
        setProfileFormVisible(true);
    }

    return (
        <View>
            <CustomModel modalVisible={isOtpModelVisible} setModalVisible={setOtpModelVisible}>
                <Input type="OTP" placeholder="Enter the OTP" keyboardType="phone-pad" errorText="Enter a valid OTP" />
                <View style={styles.buttonContainer}>
                    <CustomButton textColor="white" text="Close" backgroundColor={Color.primaryRed} triggeredFunction={() => setOtpModelVisible(false)} />
                    <CustomButton textColor="white" text="Continue" backgroundColor={Color.primaryGreen} triggeredFunction={onContinue} />
                </View>
            </CustomModel>

            <ProfileForm isProfileFormVisible={isProfileFormVisible} setProfileFormVisible={setProfileFormVisible} />

        </View>
    )
}

export default Otp;
const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
    }

})