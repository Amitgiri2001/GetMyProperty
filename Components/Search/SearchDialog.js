import React, { useState } from 'react';
import { View, Text, Modal, TextInput, Button } from 'react-native';
// import CustomModel from "../../Modal/CustomModel"
function SearchDialog({ isOpen, onClose }) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        // Perform search operation with searchQuery
        console.log('Performing search with query:', searchQuery);
        onClose(); // Close the search dialog after performing search
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isOpen}
            onRequestClose={onClose}
        >

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, width: '80%' }}>
                    <Text>Search Dialog</Text>
                    <TextInput
                        style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 5, padding: 10, marginVertical: 10 }}
                        placeholder="Enter search query"
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                    <Button title="Search" onPress={handleSearch} />
                    <Button title="Close" onPress={onClose} />
                </View>
            </View>
        </Modal>
    );
}

export default SearchDialog;