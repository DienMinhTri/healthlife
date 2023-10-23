import { SafeAreaView, StyleSheet, Text, Image, Pressable } from "react-native";
import React, { useContext, useState } from "react";

const Welcome = (props) => {
    const { navigation } = props;
    const pressHandle = () => {
        navigation.navigate('Login')
    }
    return (
        <SafeAreaView style={loginStyle.container}>
            <Image
                style={loginStyle.image}
                source={require('./../../../../media/images/picture.png')}
            />
            <Pressable
                style={loginStyle.buttonContainer}
                onPress= {pressHandle}
            >
                <Text style={loginStyle.buttonLoginLabel}>Login</Text>
            </Pressable>
            <Pressable
                style={loginStyle.buttonContainer}
                onPress={''}
            >
                <Text style={loginStyle.buttonLoginLabel}>Sign in</Text>
            </Pressable>
        </SafeAreaView>
    )
}

export default Welcome

const loginStyle = StyleSheet.create({

    buttonLoginLabel: {
        fontWeight: '700',
        fontSize: 30,
        color: '#FFFFFF',
        letterSpacing: 0.5,
    },
    buttonContainer: {
        width: 164,
        height: 62,
        borderRadius: 50,
        borderWidth: 1,
        marginTop: 20,
        backgroundColor: '#86EF61',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginHorizontal: '30%',
    },
    image: {
        width: 375,
        height: 275,
        marginBottom: 50,
    },
    container: {
        flex: 1,
        backgroundColor: '#CCFF8B',
        padding: 20,
        justifyContent: 'center',
    },
})