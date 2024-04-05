import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchButton from '../Buttons/SearchButton'

const Residential = () => {
    const [pressedButton, setPressedButton] = useState(null);

    const handleButtonPress = (buttonName) => {
        setPressedButton(buttonName);
    };
    return (
        <View style={styles.container}>
            <View style={styles.lookingTo}>
                <Text style={styles.text}>Looking To</Text>
                <View style={styles.lookingToContainer}>
                    <SearchButton
                        text="Buy"
                        pressed={pressedButton === "Buy"}
                        onPress={() => handleButtonPress("Buy")}
                    />
                    <SearchButton
                        text="Rent/PG"
                        pressed={pressedButton === "Rent/PG"}
                        onPress={() => handleButtonPress("Rent/PG")}
                    />
                </View>
            </View>

            {/* location */}
            <View style={styles.lookingTo}>
                <Text style={styles.text}>Location</Text>
                <View style={styles.lookingToContainer}>
                    <SearchButton
                        text="+ADD"

                    />
                    <SearchButton
                        text="Goria"
                        pressed={pressedButton === "Goria"}
                        onPress={() => handleButtonPress("Goria")}
                    />
                    <SearchButton
                        text="New Town"
                        pressed={pressedButton === "New Town"}
                        onPress={() => handleButtonPress("New Town")}
                    />
                </View>
            </View>
        </View>
    )
}

export default Residential;

const styles = StyleSheet.create({
    lookingToContainer: {
        flexDirection: 'row',
    },
    container: {
        paddingHorizontal: 20,

    },
    text: {
        fontWeight: '700',
        fontSize: 16,
        marginBottom: 10,

    }
});