import React, { useState, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { FAB, Portal, Dialog, TextInput, Button } from 'react-native-paper';

const NewList = ({ onCreate }) => {
    const [newListModal, setNewListModal] = useState(false);
    const [title, setTitle] = useState('');

    const handleAddNewList = () => {
        setTitle('');
        setNewListModal(true);
    };

    const onDismissModal = () => {
        setNewListModal(false);
    };

    const handleOnCreate = () => {
        setNewListModal(false);
        onCreate(title.trim());
    };

    let textInputRef = useCallback(
        textInput => {
            if (textInput !== null) {
                textInput.focus();
            }
        },
        []
    );

    return (
        <>
            <FAB
                style={styles.fab}
                icon="plus"
                onPress={handleAddNewList}
            />
            <Portal>
                <Dialog visible={newListModal} onDismiss={onDismissModal}>
                    <Dialog.Title>New list</Dialog.Title>
                    <Dialog.Content>
                        <TextInput placeholder='Enter title here'
                            ref={textInputRef}
                            value={title} onChangeText={setTitle} />
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={onDismissModal}>Cancel</Button>
                        <Button onPress={handleOnCreate} disabled={!title.trim().length}>
                            Create list
                        </Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </>
    );
};

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 30,
        right: 0,
        bottom: 0,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
});

export default NewList;