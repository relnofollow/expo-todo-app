import React, { useState, useLayoutEffect } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { IconButton, Subheading, withTheme } from 'react-native-paper';

import TodoListCard from './TodoListCard';
import NewList from './NewList';
import RenameList from './RenameList';

const TodoLists = ({ lists, navigation, addList, deleteList, renameList, toggleItem, theme }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <IconButton
                    icon="menu"
                    size={28}
                    onPress={() => navigation.openDrawer()}
                />
            ),
        });
    }, [navigation]);

    const onTodoListPress = (list) => {
        navigation.navigate('Details', { listId: list.id });
    };

    const handleDeleteList = (list) => {
        Alert.alert('Delete list', `Are you sure you want to permanently delete '${list.title}'?`,
            [{ text: 'Cancel' }, { text: 'Delete', onPress: () => deleteList(list.id) }]);
    }

    const [rename, setRename] = useState(null);

    const handleRenameList = (title) => {
        renameList(rename.id, title);
        setRename(null);
    };

    if (!lists.length) {
        return (
            <View style={[styles.containerEmpty, { backgroundColor: theme.colors.background }]}>
                <Subheading style={styles.textEmpty}>No lists here yet.</Subheading>
                <Subheading>Tap plus icon below to start.</Subheading>
                <NewList onCreate={addList} />
            </View>
        )
    }

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <>
                {lists.map(list => {
                    return (
                        <TodoListCard key={list.id} {...{ list }}
                            onPress={() => onTodoListPress(list)}
                            onDelete={() => handleDeleteList(list)}
                            onRename={() => setRename(list)}
                            onToggleItem={(itemId) => toggleItem(list.id, itemId)} />
                    );
                })}
                <NewList onCreate={addList} />
                {rename && <RenameList list={rename}
                    onRename={handleRenameList}
                    onCancel={() => setRename(null)} /> || null}
            </>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch'
    },
    containerEmpty: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 80
    },
})

export default withTheme(TodoLists);