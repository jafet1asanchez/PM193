import React from 'react';
import { View, Text, StyleSheet, ImageBackground, SafeAreaView } from 'react-native';


const HomeScreen = () => {
    return (
        <ImageBackground
            source={require('C:/Users/jafet/Documents/Visual Studio 2017/PM193/my-app-blank-dos/src/assets/Spiderman Black 2.jpeg')}
            style={styles.background}>
                <SafeAreaView style={styles.content}>
                    <Text style={styles.text}>
                        Pantalla Principal
                    </Text>
                </SafeAreaView>
        </ImageBackground>    
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
    },
    content: {
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
    }
});