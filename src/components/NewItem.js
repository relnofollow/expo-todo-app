import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, IconButton, withTheme } from 'react-native-paper';

import TodoItem from './TodoItem';

const NewItem = ({ theme, onCreate, focused }) => {
    const [editing, setEditing] = useState(focused);

    const handleItemEdit = (text) => {
        if (text.length === 0) {
            setEditing(false);
            return;
        }

        onCreate(text);
        setEditing(false);
    }

    return (
        !editing ?
            <View style={styles.container}>
                <IconButton icon='plus' color={theme.colors.placeholder} style={styles.addNewButton}
                    onPress={() => setEditing(true)} />
                <Text style={{ ...styles.text, color: theme.colors.placeholder }}
                    onPress={() => setEditing(true)}>New Item</Text>
            </View> :
            <TodoItem item={{ text: '', completed: false }} editable={true}
                isNew={true}
                onDelete={() => setEditing(false)}
                onEdit={handleItemEdit} />
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        flexGrow: 1
    },
    addNewButton: {
        margin: 0
    }
});

NewItem.defaultProps = {
    focused: false
};

export default withTheme(NewItem);