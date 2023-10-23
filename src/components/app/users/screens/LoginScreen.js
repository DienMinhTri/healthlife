import { SafeAreaView, StyleSheet, Text, Image, TextInput, Pressable } from "react-native";
import React, { useContext, useState } from "react";


const Login = (props) => {
    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    const { navigation } = props;
    return (
        <SafeAreaView style={loginStyle.container}>
            <Image
                style={loginStyle.image}
                source={require('./../../../../media/images/picture.png')}
            />
            <SafeAreaView style={loginStyle.inputContainer}>
                <TextInput
                    value={email}
                    onChangeText={onChangeEmail}
                    style={loginStyle.input}
                    placeholder= "Email"
                />
                <TextInput
                    value={password}
                    onChangeText={onChangePassword}
                    style={loginStyle.input}
                    placeholder= "Password"
                />
            </SafeAreaView>
            <Pressable
                style={loginStyle.buttonContainer}
                onPress={''}
            >
                <Text style={loginStyle.buttonLoginLabel}>Submit</Text>
            </Pressable>
        </SafeAreaView>
    )
}

export default Login

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
        marginTop: 80,
        backgroundColor: '#86EF61',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginHorizontal : '30%',
    },
    inputContainer: {
        marginTop: 30,
        alignItems: 'center',
    },
    input: {
        width: 326,
        height: 65,
        borderWidth: 1,
        borderRadius: 36,
        padding: 20,
        backgroundColor: '#86EF61',
        margin: 15,
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