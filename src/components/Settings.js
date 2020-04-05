import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { List, Switch, withTheme } from 'react-native-paper';

const Settings = ({ settings, toggleConfirmDelete, toggleDarkTheme, theme }) => {
    return (
        <View style={[styles.container, { backgroundColor: theme.colors.surface }]}>
            <List.Section>
                <List.Item title='Confirm before deleting a task'
                    right={() =>
                        <Switch value={settings.confirmDelete} onValueChange={toggleConfirmDelete} />} />
                <List.Item title='Dark theme'
                    right={() =>
                        <Switch value={settings.isDarkTheme} onValueChange={toggleDarkTheme} />} />
            </List.Section>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        padding: 20
    }
})

export default withTheme(Settings);