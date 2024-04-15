import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Color from '../../constants/Color';
import AnimatedButton from '../Buttons/AnimatedButton';

const PostProperty = () => {
    const [propertyType, setPropertyType] = useState('');
    const [address, setAddress] = useState('');
    const [images, setImages] = useState([]);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
        });

        if (!result.cancelled) {
            // Log the selected image URI
            console.log("Selected Image URI:", result.uri);
            // Update the images state
            setImages(prevImages => [...prevImages, result.uri]);
        } else {
            // Log if image selection was cancelled
            console.log("Image selection cancelled");
        }

    };


    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.heading}>Post Your Property</Text>

            {/* Property Type Picker */}
            <View style={styles.fieldContainer}>
                <Text style={styles.label}>Property Type:</Text>
                <View style={styles.inputContainer}>
                    <TouchableOpacity
                        style={[styles.optionButton, propertyType === 'Residential' && styles.selectedOption]}
                        onPress={() => { setPropertyType('Residential'); }}
                    >
                        <Text style={styles.optionText}>Residential</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.optionButton, propertyType === 'Commercial' && styles.selectedOption]}
                        onPress={() => setPropertyType('Commercial')}
                    >
                        <Text style={styles.optionText}>Commercial</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Address Input */}
            <View style={styles.fieldContainer}>
                <Text style={styles.label}>Address:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your property address"
                    value={address}
                    onChangeText={setAddress}
                />
            </View>

            {/* Image Selection */}
            <View style={styles.fieldContainer}>
                <Text style={styles.label}>Property Images:</Text>
                <View style={styles.imageGrid}>
                    {images.map((imageUri, index) => (
                        <Image
                            key={index}
                            source={{ uri: imageUri }}
                            style={styles.image}
                            onError={() => console.log(`Error loading image at index ${index}`)}
                        />
                    ))}

                    <TouchableOpacity onPress={pickImage} style={styles.addImageButton}>
                        <Text style={styles.addImageButtonText}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Submit Button (Optional) */}
            <AnimatedButton title="Submit" />
        </ScrollView>
    );
};

// Remaining styles remain the same
const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#f9f9f9',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    fieldContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 18,
        // fontWeight: 'bold',
        marginBottom: 5,
    },
    inputContainer: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#cccccc',
        padding: 10,
    },
    optionButton: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#cccccc',
        marginRight: 20,
    },
    selectedOption: {
        backgroundColor: Color.Button.hoverBackgroundColor,
        borderColor: '#007bff',
    },
    optionText: {
        color: Color.Button.color,
        fontSize: 16,
        // fontWeight: 'bold',
    },

    // Add the following style for the pressed state
    optionTextPressed: {
        color: 'red', // Change to the desired color on press
    },


    imageGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 5,
        marginRight: 10,
        marginBottom: 10,
    },
    addImageButton: {
        width: 100,
        height: 100,
        backgroundColor: '#cccccc',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        marginBottom: 10,
    },
    addImageButtonText: {
        fontSize: 32,
        color: '#fff',
    },
    submitButton: {
        backgroundColor: '#007bff',
        borderRadius: 5,
        paddingVertical: 15,
        alignItems: 'center',
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default PostProperty;
