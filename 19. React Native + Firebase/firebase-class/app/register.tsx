import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { getAuth } from 'firebase/auth';
import { app } from '../firebaseConfig';

export default function HomePage() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const auth = getAuth(app);

    const [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_700Bold,
    });

    if (!fontsLoaded) return null;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.push('/')}>
                    <Image source={require('../assets/images/house-blank_9239733.png')} style={styles.image} />
                </TouchableOpacity>
            </View>
            <View style={styles.center}>
                <Text style={styles.title}>Create your account</Text>

                <TextInput placeholder="Name" style={styles.input} onChangeText={(value) => setName(value)} />
                <View style={styles.underInput}></View>

                <TextInput placeholder="E-mail" style={styles.input} onChangeText={(value) => setEmail(value)}/>
                <View style={styles.underInput}></View>

                <TextInput placeholder="Password" style={styles.input} secureTextEntry={true} onChangeText={(value) => setPassword(value)} />
                <View style={styles.underInput}></View>

                <TextInput placeholder="Confirm password" style={styles.input} secureTextEntry={true} onChangeText={(value) => setConfirmPassword(value)} />
                <View style={styles.underInput}></View>

                <TouchableOpacity onPress={() => router.push('/register')}>
                    <View style={styles.button}>
                        <Text style={styles.text}>Register</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <Text style={styles.footerText}>Already have an account?</Text>
                <TouchableOpacity onPress={() => router.push('/')}>
                    <Text style={styles.footerLink}>Login here</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FEFF',
    },
    text: {
        textAlign: 'center',
        fontFamily: 'Montserrat_400Regular',
        fontSize: 20,
        color: 'white',
    },
    button: {
        display: 'flex',
        justifyContent: 'center',
        alignSelf: 'center',
        width: 200,
        height: 50,
        borderRadius: 10,
        backgroundColor: 'black',
        marginTop: 35,
    },
    title: {
        color: 'black',
        fontSize: 40,
        fontWeight: 'bold',
        fontFamily: 'Montserrat_700Bold',
        textAlign: 'center',
        margin: 12,
    },
    input: {
        alignSelf: 'center',
        margin: 20,
        width: 200,
        height: 30,
        textAlign: 'left',
        fontFamily: 'monospace',
        color: 'gray',
        marginLeft: 20,
        outlineColor: 'transparent',
    },
    underInput: {
        width: 220,
        height: 1,
        backgroundColor: 'black',
        marginTop: -20,
        marginBottom: -5,
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 40,
    },
    header: {
        width: '100%',
        height: 100,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingTop: 45,
        paddingLeft: 20,
    },
    image: {
        width: 25,
        height: 25,
        alignSelf: 'center',
        margin: 30,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 20,
        borderTopWidth: 1,
        borderTopColor: '#F0F0F0',
        backgroundColor: '#FFFFFF',
    },
    footerText: {
        fontFamily: 'Montserrat_400Regular',
        fontSize: 14,
        color: '#1C1C1C',
        marginRight: 5,
    },
    footerLink: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 14,
        color: '#1C1C1C',
        textDecorationLine: 'underline',
    }
});