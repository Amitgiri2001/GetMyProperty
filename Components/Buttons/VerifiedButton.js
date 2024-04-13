import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import AnimatedButton2 from './AnimatedButton2'
import Color from '../../constants/Color'

const VerifiedButton = () => {
    return (
        <View style={styles.verifiedButton}>

            <AnimatedButton2 title="Verified" color="#4CAF50" />

        </View>

    )
}

export default VerifiedButton;


const styles = StyleSheet.create({

    verifiedButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 10,
        left: 0,
        paddingHorizontal: 0,
        paddingVertical: 5,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        borderRightWidth: 0, // Hide right border
        borderLeftWidth: 0, // Adjust the width of the left border as needed
        borderLeftColor: 'transparent',
        borderStyle: 'solid',
    },

});