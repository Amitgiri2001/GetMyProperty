import React, { useState } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { CheckBox } from 'react-native-elements';
import CustomModel from "./CustomModel";
import Input from "../Components/Input"
import CustomButton from '../Components/Buttons/ColoredButton';
import Color from '../constants/Color';

import { updateProfile } from "../Store/ProfileSlice";
import { useSelector, useDispatch } from 'react-redux'

const ProfileForm = ({ isProfileFormVisible, setProfileFormVisible }) => {

    const [isChecked, setIsChecked] = useState(true);
    const dispatch = useDispatch()

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [agent, setAgent] = useState("No");
    const [mobileNumber, setMobileNumber] = useState("");
    function handleDataChange(text, identifier) {
        if (identifier === "name") {
            setName(text);
        }
        else if (identifier === "email") {
            setEmail(text);
        }
        else if (identifier === "gender") {
            setGender(text);
        }
        else if (identifier === "mobile Number") {
            setMobileNumber(text);
        }
        // console.log("Name " + email);
        // Alert.alert(name);
    }

    function setProfile(data) {

        const dummyData = {
            name: name,
            email: email,
            mobileNumber: mobileNumber,
            gender: gender,
            agent: agent
        };

        dispatch(updateProfile(dummyData));
        setProfileFormVisible(false)
    }

    return (
        <View style={styles.mainContainer}>
            <CustomModel modalVisible={isProfileFormVisible} setModalVisible={setProfileFormVisible}>
                <Input type="Full Name" keyboardType="default" placeholder="Enter Your Full Name" errorText="Name should be minimum 4 Character long" onValueChange={(text) => handleDataChange(text, "name")} />
                <Input type="Email" keyboardType="default" placeholder="Enter Your Email" errorText="email should be minimum 6 Character long" onValueChange={(text) => handleDataChange(text, "email")} />

                <Input type="Mobile Number" keyboardType="phone-pad" placeholder="Enter Your Mobile Number" errorText="Please enter a valid 10-digit mobile number" existingVale="9876543212" disability={true} onValueChange={(text) => handleDataChange(text, "mobile Number")} />

                {/* Input for gender */}
                <View style={styles.container}>
                    <Text style={styles.label}>Gender</Text>
                    <Picker
                        selectedValue={gender}
                        style={styles.picker}
                        onValueChange={(itemValue, itemIndex) =>
                            setGender(itemValue, "gender")
                        }>
                        <Picker.Item label="Select Gender" value="" />
                        <Picker.Item label="Male" value="male" />
                        <Picker.Item label="Female" value="female" />
                        <Picker.Item label="Other" value="other" />
                    </Picker>
                </View>


                {/* Agent  */}
                <Text>Are You a Real State agent?</Text>
                <View style={styles.agent}>
                    <CustomButton text="No" textColor="black" backgroundColor='white' triggeredFunction={() => console.log('triggered')} />
                    <CustomButton text="Yes" textColor="black" backgroundColor='white' triggeredFunction={() => console.log('triggered')} />
                </View>

                <View style={styles.terms}>

                    <CheckBox
                        title=''
                        checked={isChecked}
                        onPress={() => setIsChecked(!isChecked)}
                    />
                    <Text>Agree Terms & condition of GetMyProperties </Text>
                </View>
                <CustomButton text="Submit" textColor='white' backgroundColor={Color.primaryGreen} triggeredFunction={setProfile} />
            </CustomModel>
        </View>
    )
}

export default ProfileForm;
const styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 5,
        marginHorizontal: 10,
    },
    agent: {
        width: "100%",
        flexDirection: "row",
    },
    terms: {
        paddingHorizontal: 5,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
    },
    container: {
        marginVertical: 10,
        width: "100%",
    },
    label: {
        fontSize: 16,
        marginBottom: 0,
    },
    picker: {
        height: 20,

        backgroundColor: '#f0f0f0',
        marginBottom: 30,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
});