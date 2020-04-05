import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Text, Caption, withTheme, Divider } from 'react-native-paper';
import { Linking } from 'expo';

const About = ({ theme }) => {
    return (
        <View style={[styles.container, { backgroundColor: theme.colors.surface }]}>
            <Text>To-Do List App</Text>
            <Caption>Made by Elena Kim</Caption>
            <Caption>© {new Date().getFullYear()}</Caption>
            <Divider style={styles.divider} />
            <Caption>Splash screen and icon:</Caption>
            <View style={styles.creditsContainer}>
                <Caption style={styles.link} onPress={() => Linking.openURL('https://dribbble.com/Lione999')}>Lione999</Caption>
                <Caption> from </Caption>
                <TouchableOpacity onPress={() => Linking.openURL('https://dribbble.com')} >
                    <Image source={require('../../assets/dribble.png')}
                        resizeMode='contain' style={[styles.dribble, { tintColor: theme.colors.text }]} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20
    },
    divider: {
        alignSelf: 'stretch',
        marginVertical: 20
    },
    link: {
        color: '#0366d6'
    },
    creditsContainer: {
        flexDirection: 'row',
        marginTop: 2
    },
    dribble: {
        height: 18,
        marginLeft: 2
    }
})

export default withTheme(About);