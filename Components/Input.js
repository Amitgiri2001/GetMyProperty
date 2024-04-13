import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';

const enteredInput = ({ type, keyboardType, placeholder, errorText, onValueChange, existingValue }) => {
    const [enteredInput, setEnteredInput] = useState('');
    const [isValid, setIsValid] = useState(true);

    const handleInputChange = (text) => {
        if (type === "Mobile Number") {
            if (/^\d{0,10}$/.test(text)) {
                setEnteredInput(text);
                setIsValid(text.length === 10);
            }
        }
        else {
            setEnteredInput(text);
        }
        onValueChange && onValueChange(text);
    };

    const handleSubmit = () => {
        // Handle submission logic here
        if (isValid) {
            console.log('Mobile number:', enteredInput);
            // Submit logic
        } else {
            console.log('Invalid mobile number');
            // Show error message or take appropriate action
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{type}:</Text>
            <View style={[styles.inputContainer, !isValid && styles.inputContainerError]}>
                <TextInput
                    style={styles.input}
                    keyboardType={keyboardType}
                    placeholder={placeholder}
                    value={existingValue || enteredInput}
                    onChangeText={handleInputChange}
                />
            </View>
            {!isValid && <Text style={styles.errorText}>{errorText}</Text>}

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        width: "100%"
    },
    label: {
        fontSize: 16,
        marginBottom: 0,
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    inputContainerError: {
        borderColor: 'red',
    },
    input: {
        fontSize: 16,
        height: 40,
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginTop: 5,
    },

    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default enteredInput;
