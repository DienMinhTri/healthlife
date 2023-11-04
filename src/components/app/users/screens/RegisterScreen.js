import { SafeAreaView, StyleSheet, Text, Image, TextInput, Pressable } from "react-native";
import React, { useContext, useState } from "react";
import auth from '@react-native-firebase/auth';


const Register = (props) => {
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    const [confirmPassword, onChangeConfirmPassword] = useState('');
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
                    placeholder="Email"
                    keyboardType="email-address"
                    inputMode="email"
                />
                <TextInput
                    value={password}
                    onChangeText={onChangePassword}
                    style={loginStyle.input}
                    placeholder="Password"
                    keyboardType="numeric"
                    secureTextEntry={true}
                />
                <TextInput
                    value={confirmPassword}
                    onChangeText={onChangeConfirmPassword}
                    style={loginStyle.input}
                    placeholder="Confirm Paswword"
                    keyboardType="numeric"
                    secureTextEntry={true}
                />
            </SafeAreaView>
            <Pressable
                style={loginStyle.buttonContainer}
                onPress={() => {
                    auth()
                        .createUserWithEmailAndPassword(email, password)
                        .then(() => {
                            console.log('User account created & signed in!');
                            navigation.navigate("Home");
                        })
                        .catch(error => {
                            if (error.code === 'auth/email-already-in-use') {
                                console.log('That email address is already in use!');
                            }

                            if (error.code === 'auth/invalid-email') {
                                console.log('That email address is invalid!');
                            }

                            console.error(error);
                        });
                }}
            ><Text style={loginStyle.buttonLoginLabel}>Register</Text></Pressable>
            <Text
                style={loginStyle.buttonText}
                onPress={() => navigation.goBack()}>
                Go out
            </Text>
        </SafeAreaView>
    )
}

export default Register

const loginStyle = StyleSheet.create({

    buttonText: {
        textAlign: "center",
        marginTop: 30,
        fontSize: 20,
        alignItems: "center",
    },
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
        marginTop: 40,
        backgroundColor: '#86EF61',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginHorizontal: '30%',
    },
    inputContainer: {
        marginTop: 10,
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