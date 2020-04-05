import React, { useState, useCallback } from 'react';
import { Portal, Dialog, TextInput, Button } from 'react-native-paper';

const RenameList = ({ list, onRename, onCancel }) => {
    const [title, setTitle] = useState(list.title);

    let textInputRef = useCallback(
        textInput => {
            if (textInput !== null) {
                textInput.focus();
            }
        },
        []
    );

    return (
        <Portal>
            <Dialog visible={true} onDismiss={onCancel}>
                <Dialog.Title>Rename list</Dialog.Title>
                <Dialog.Content>
                    <TextInput placeholder='Enter title here'
                        ref={textInputRef}
                        value={title} onChangeText={setTitle} />
                </Dialog.Content>
                <Dialog.Actions>
                    <Button onPress={onCancel}>Cancel</Button>
                    <Button onPress={() => onRename(title.trim())} disabled={!title.trim().length}>
                        Rename
                    </Button>
                </Dialog.Actions>
            </Dialog>
        </Portal>
    );
}

export default RenameList;