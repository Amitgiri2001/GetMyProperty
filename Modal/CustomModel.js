import React, { Children } from 'react'
import { View, Modal, StyleSheet, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons';


const CustomModel = ({ modalVisible, setModalVisible, children }) => {
    const closeModal = () => {
        setModalVisible(!modalVisible);
    };
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <Pressable
                    style={styles.centeredView}
                    onPress={(e) => {
                        // Check if the target is the backdrop
                        if (e.target === e.currentTarget) {
                            closeModal();
                        }
                    }}
                >
                    <View style={styles.modalView}>

                        {/* Close icon */}
                        <Pressable
                            style={styles.closeButton}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Ionicons name="close" size={24} color="black" />
                        </Pressable>
                        {children}
                    </View>
                </Pressable>

            </Modal>
        </View>
    )
}

export default CustomModel;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
        height: '110%',
        alignItems: 'center',
        marginTop: 0,
        backgroundColor: 'rgba(0,0,0,0.3)'
    },
    modalView: {
        width: '100%',
        // margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    closeButton: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
});