import React from 'react';
import { Text, IconButton, withTheme } from 'react-native-paper';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { getScreenHeaderOptions } from './HomeScreen';
import About from '../components/About';

const Stack = createStackNavigator();

const AboutScreen = ({ navigation, theme }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="About" component={About}
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

export default withTheme(AboutScreen);