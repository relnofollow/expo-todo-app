import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { withTheme } from 'react-native-paper';

import TodoListsContainer from '../containers/TodoListsContainer';
import DetailsScreen from './DetailsScreen';

const Stack = createStackNavigator();

export const getScreenHeaderOptions = (theme) => ({
    headerStyle: {
        backgroundColor: theme.colors.background
    },
    headerTitleStyle: {
        color: theme.colors.text
    },
    headerBackTitleStyle: {
        color: theme.colors.text
    },
    headerTintColor: theme.colors.text
})

const HomeScreen = ({ theme }) => {
    return (
        <Stack.Navigator initialRouteName="To-Do"
            screenOptions={getScreenHeaderOptions(theme)}>
            <Stack.Screen name="To-Do" component={TodoListsContainer} />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    );
}

export default withTheme(HomeScreen);