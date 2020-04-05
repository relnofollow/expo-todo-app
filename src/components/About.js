import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Caption, withTheme } from 'react-native-paper';

const About = ({ theme }) => {
    return (
        <View style={[styles.container, { backgroundColor: theme.colors.surface }]}>
            <Text>To-Do List App</Text>
            <Caption>Made by Elena Kim</Caption>
            <Caption>© {new Date().getFullYear()}</Caption>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20
    }
})

export default withTheme(About);