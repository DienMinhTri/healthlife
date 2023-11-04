import { SafeAreaView, StyleSheet, Text, Image, TextInput, Pressable } from "react-native";
import React, { useContext, useState } from "react";
import auth from '@react-native-firebase/auth'


const Login = (props) => {
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
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
            </SafeAreaView>
            <Pressable
                style={loginStyle.buttonContainer}
                onPress={() => {
                    auth().signInWithEmailAndPassword(email, password).then(() => {
                        console.log('User signed in  using email - password');
                        navigation.navigate("Home");
                    })
                        .catch(error => {
                            if (error.code === 'auth/operation-not-allowed') {
                                console.log('Enable email - password in your firebase console.');
                            }
                            if (error.code === 'auth/wrong-password') {
                                console.log('The password is invalid!!');
                            }

                            console.error(error);
                        })
                }}
            >
                <Text style={loginStyle.buttonLoginLabel}>Submit</Text>
            </Pressable>
            <Text
                style={loginStyle.buttonText}
                onPress={() => navigation.goBack()}>
                Go out
            </Text>
        </SafeAreaView>
    )
}

export default Login

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
        marginTop: 80,
        backgroundColor: '#86EF61',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginHorizontal: '30%',
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