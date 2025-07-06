import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <Image source={require('C:/Users/jafet/Documents/Visual Studio 2017/PM193/my-app-blank-dos/src/assets/Spiderman 3.jpeg')} 
            style={StyleSheet.logo}
            resizeMode="contain"/>
            <Text style={styles.title}>
                Bienvenido a la App
            </Text>
        </View>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222831', 
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 200,
        height: 200,
    },
    title: {
        marginTop: 20,
        color: '#eeeeee',
        fontSize: 24,
        fontWeight: 'bold',
    }
});