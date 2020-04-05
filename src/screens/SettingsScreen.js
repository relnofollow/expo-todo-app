import React from 'react';
import { IconButton, withTheme } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';

import { getScreenHeaderOptions } from './HomeScreen';
import SettingsContainer from '../containers/SettingsContainer';

const Stack = createStackNavigator();

const SettingsScreen = ({ navigation, theme }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Settings" component={SettingsContainer}
                options={{
                    ...getScreenHeaderOptions(theme),
                    headerLeft: () => (
                        <IconButton
                            icon="arrow-left"
                            size={28}
                            onPress={() => { navigation.navigate('Home') }}
                        />
                    )
                }} />
        </Stack.Navigator>
    );
};

export default withTheme(SettingsScreen);