import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { Card, Text, withTheme, IconButton, Divider } from 'react-native-paper';

import TodoItem from './TodoItem';

const TodoListCard = ({ list, onPress, onDelete, onRename, onToggleItem, theme }) => {
    const completed = [],
        uncompleted = [];

    list.items.forEach(item =>
        item.completed ? completed.push(item) : uncompleted.push(item));

    const renderItem = item => <TodoItem {...{ item }} key={item.id}
        onToggle={() => onToggleItem(item.id)} />;

    return (
        <TouchableOpacity onPress={onPress}>
            <Card style={styles.todoListContainer}>
                <Card.Title title={list.title}
                    style={styles.titleContainer}
                    right={(props) => {
                        return (
                            <View style={styles.titleButtonsContainer}>
                                <IconButton {...props} icon="pencil" size={20} onPress={onRename} />
                                <IconButton {...props} icon="delete" size={20} onPress={onDelete} />
                            </View>);
                    }} />
                <Card.Content>
                    {!list.items.length
                        ? <Text style={{ color: theme.colors.placeholder }}>No tasks here yet. Tap to add.</Text>
                        : <>
                            {uncompleted.map(renderItem)}
                            {uncompleted.length && completed.length ? <Divider style={styles.divider} /> : null}
                            {completed.length > 0 && (
                                <Text style={[styles.completedText, { color: theme.colors.placeholder }]}>
                                    {`${completed.length} completed`}
                                </Text>
                            ) || null}
                            {completed.map(renderItem)}
                        </>
                    }
                </Card.Content>
            </Card>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    todoListContainer: {
        marginTop: 10,
        marginHorizontal: 10
    },
    divider: {
        marginVertical: 15
    },
    titleButtonsContainer: {
        flexDirection: "row"
    },
    completedText: {
        marginBottom: 5
    }
});

export default withTheme(TodoListCard);