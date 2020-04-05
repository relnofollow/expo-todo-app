import React, { useLayoutEffect, useState } from 'react';
import {
    StyleSheet, View, TouchableWithoutFeedback, Keyboard,
    useWindowDimensions, Platform, StatusBar, Alert
} from 'react-native';
import { Title, Divider, IconButton, Menu, withTheme } from 'react-native-paper';

import TodoItem from './TodoItem';
import NewItem from './NewItem';
import RenameList from './RenameList';

const TodoList = ({ navigation, list, settings, renameList, deleteList,
    toggleItem, addItem, deleteItem, editItem, theme }) => {

    // Handling list === undefined when deleteList was called 
    if (!list) {
        return null;
    }

    const [menuVisible, setMenuVisible] = useState(false);
    const [renameVisible, setRenameVisible] = useState(false);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <IconButton
                    icon="dots-vertical"
                    size={28}
                    onPress={() => setMenuVisible(true)}
                />
            ),
        });
    }, [navigation]);

    const completed = [],
        uncompleted = [];

    list.items.forEach(item =>
        item.completed ? completed.push(item) : uncompleted.push(item));

    const renderItem = item =>
        <TodoItem key={item.id}
            {...{ item }}
            editable={true}
            onToggle={() => toggleItem(list.id, item.id)}
            onEdit={(newText) => handleItemEdit(list.id, item, newText)}
            onDelete={() => handleItemDelete(list.id, item.id)}
        />;

    const handleItemEdit = (listId, item, newText) => {
        if (newText === item.text) {
            return;
        }

        if (newText.length === 0) {
            deleteItem(listId, item.id);
        } else {
            editItem(listId, item.id, newText);
        }
    };

    const handleItemDelete = (listId, itemId) => {
        if (!settings.confirmDelete) {
            deleteItem(listId, itemId)
            return;
        }

        Alert.alert('Delete task', 'Are you sure you want to permanently delete this task?',
            [{ text: 'Cancel' }, { text: 'Delete', onPress: () => deleteItem(listId, itemId) }]);
    }

    const onRenamePress = () => {
        setMenuVisible(false);
        setRenameVisible(true);
    };

    const onDeletePress = () => {
        setMenuVisible(false);
        Alert.alert('Delete list', `Are you sure you want to permanently delete '${list.title}'?`,
            [
                { text: 'Cancel' },
                {
                    text: 'Delete',
                    onPress: () => {
                        deleteList(list.id);
                        navigation.popToTop();
                    }
                }]);
    };

    const handleRenameList = (title) => {
        renameList(list.id, title);
        setRenameVisible(false);
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={[styles.todoListContainer, { backgroundColor: theme.colors.surface }]}>
                <Menu
                    visible={menuVisible}
                    onDismiss={() => setMenuVisible(false)}
                    anchor={
                        {
                            x: useWindowDimensions().width,
                            y: Platform.OS === 'android' ? (StatusBar.currentHeight + 5) : (20 + 5)
                        }
                    }
                >
                    <Menu.Item onPress={onRenamePress} title="Rename" />
                    <Menu.Item onPress={onDeletePress} title="Delete" />
                </Menu>

                {renameVisible && <RenameList {...{ list }}
                    onRename={handleRenameList}
                    onCancel={() => setRenameVisible(false)} />}

                <Title style={styles.listTitle}>{list.title}</Title>

                {uncompleted.map(renderItem)}

                <NewItem onCreate={(text, completed) => addItem(list.id, text, completed)}
                    focused={list.items.length === 0} />

                {completed.length ? <Divider style={styles.divider} /> : null}

                {completed.map(renderItem)}
            </View>
        </TouchableWithoutFeedback >
    );
}

const styles = StyleSheet.create({
    todoListContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 20
    },
    listTitle: {
        marginBottom: 10
    },
    divider: {
        marginVertical: 15,
        alignSelf: 'stretch'
    }
});

export default withTheme(TodoList);