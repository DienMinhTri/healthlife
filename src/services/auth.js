import auth from '@react-native-firebase/auth'

const signUp = (name, email, password) => {
    if(!name || !email || !password){
        alert('Enter data')
    }
    else{
        return auth().createUserWithEmailAndPassword(email.trim(),password)
        .then( cred => {
            const {uid} = cred.user;
            auth().currentUser.updateProfile({
                displayName: name
            })
            return uid
        })
        .catch(
            err => alert(err.code,err.message)
        )
    }
}

const signIn = (email,password) => {
    if (!email || !password) {
        return auth().signInWithEmailAndPassword(email.trim(),password)
        .then(() => {
            console.log(auth().currentUser.uid)
        })
        .catch(
            err => alert(err.code,err.message)
        )
    }
}

const signOut = () => {
    return auth().signOut()
}

const Auth = {
    signUp,
    signIn,
    signOut
}

export default Auth