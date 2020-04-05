import React, { useState, useCallback } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Checkbox, Text, IconButton, withTheme } from 'react-native-paper';

const TodoItem = ({ item, editable, isNew, onToggle, onEdit, onDelete, theme }) => {
    let [newText, setNewText] = useState(item.text);
    let [focus, setFocus] = useState(false);

    let textInputRef = useCallback(
        textInput => {
            if (textInput !== null && isNew) {
                textInput.focus();
            }
        },
        [isNew]
    );

    const handleBlur = () => {
        onEdit(newText);
        setFocus(false);
    };

    const handleFocus = () => {
        setFocus(true);
    };

    return (
        <View style={styles.checkboxContainer}>
            <Checkbox
                status={item.completed ? 'checked' : 'unchecked'}
                onPress={onToggle}
            />
            {editable ?
                <>
                    <TextInput value={newText}
                        style={[styles.textInput, item.completed && !focus && styles.completed, { color: theme.colors.text }]}
                        onChangeText={setNewText}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                        ref={textInputRef} />
                    <IconButton icon='delete' size={18}
                        style={{ ...styles.deleteButton, opacity: focus ? 1 : 0 }}
                        onPress={onDelete} disabled={!focus} />
                </>
                :
                <Text style={[styles.text, item.completed && styles.completed]}>{item.text}</Text>}
        </View>
    );
}

TodoItem.defaultProps = {
    editable: false,
    isNew: false
};

const styles = StyleSheet.create({
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        flex: 1
    },
    textInput: {
        flex: 1
    },
    deleteButton: {
        margin: 0
    },
    completed: {
        textDecorationLine: 'line-through'
    }
});

export default withTheme(TodoItem);