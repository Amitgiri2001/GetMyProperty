import React, { userState } from 'react'
import { View, StyleSheet } from 'react-native'
import CustomModel from './CustomModel'
import Input from "../Components/Input"
import CustomButton from '../Components/Button'
import Color from '../constants/Color'

const Otp = ({ isOtpModelVisible, setOtpModelVisible }) => {


    return (
        <View>
            <CustomModel modalVisible={isOtpModelVisible} setModalVisible={setOtpModelVisible}>
                <Input type="OTP" placeholder="Enter the OTP" keyboardType="phone-pad" errorText="Enter a valid OTP" />
                <View style={styles.buttonContainer}>
                    <CustomButton textColor="white" text="Close" backgroundColor={Color.primaryRed} triggeredFunction={() => setOtpModelVisible(false)} />
                    <CustomButton textColor="white" text="Continue" backgroundColor={Color.primaryGreen} />
                </View>
            </CustomModel>
        </View>
    )
}

export default Otp;
const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
    }

})