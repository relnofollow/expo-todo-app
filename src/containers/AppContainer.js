import React from 'react';
import { connect } from 'react-redux';
import { KeyboardAvoidingView, Platform } from 'react-native';

import { Provider as PaperProvider, DefaultTheme, DarkTheme } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AboutScreen from '../screens/AboutScreen';
import DrawerContent from '../components/DrawerContent';

const Drawer = createDrawerNavigator();

const AppContainer = ({ settings }) => {
    const theme = settings.isDarkTheme ? DarkTheme : DefaultTheme;
    return (
        <PaperProvider {...{ theme }}>
            <KeyboardAvoidingView
                behavior={Platform.Os == "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
            >
                <NavigationContainer>
                    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}
                        drawerStyle={{ backgroundColor: theme.colors.background }}>
                        <Drawer.Screen name="Home" component={HomeScreen} />
                        <Drawer.Screen name="Settings" component={SettingsScreen} />
                        <Drawer.Screen name="About" component={AboutScreen} />
                    </Drawer.Navigator>
                </NavigationContainer>
            </KeyboardAvoidingView>
        </PaperProvider >
    );
};

const mapStateToProps = (state) => ({
    settings: state.settings
});

export default connect(mapStateToProps)(AppContainer);