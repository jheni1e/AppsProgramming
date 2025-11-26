import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, StyleSheet, Image } from "react-native";
import { db } from '../firebaseConfig';
import { useRouter } from 'expo-router';

export default function RegisterAlbum() {
    const router = useRouter();
    
    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');
    const [year, setYear] = useState('');
    const [author, setAuthor] = useState('');
    const [coverUrl, setCoverUrl] = useState('');
    
    const [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_700Bold,
    });

    if (!fontsLoaded) return null;

    async function registerAlbum() {
        try {
            if (!name || !genre || !year) {
                console.log("Fill brand, model and year.");
                return;
            }

            const album = {
                name,
                genre,
                year: Number(year),
                author: author || null,
                coverUrl,
                userId: 'jheni1e',
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp(),
            };

            await addDoc(collection(db, "albums"), album);
            console.log("Album registered!");

        } catch (err) {
            console.log("Error:", err);
        }
        finally {
            router.push('/list')
        }
    }

    return (
        <>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.push('/')}>
                        <Image source={require('../assets/images/house-blank_9239733.png')} style={styles.image} />
                    </TouchableOpacity>
                </View>
                <View style={styles.center}>

                    <TextInput placeholder="Name" onChangeText={setName} style={styles.input} />
                    <View style={styles.underInput}></View>

                    <TextInput placeholder="Genre" onChangeText={setGenre} style={styles.input} />
                    <View style={styles.underInput}></View>

                    <TextInput placeholder="Year" onChangeText={setYear} style={styles.input} />
                    <View style={styles.underInput}></View>

                    <TextInput placeholder="Author" onChangeText={setAuthor} style={styles.input} />
                    <View style={styles.underInput}></View>

                    <TextInput placeholder="Album Cover URL" onChangeText={setCoverUrl} style={styles.input} />
                    <View style={styles.underInput}></View>

                    <TouchableOpacity onPress={registerAlbum}>
                        <View style={styles.button}>
                            <Text style={styles.text2}>Register</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FEFF',
    },
    title: {
        color: 'black',
        fontSize: 40,
        fontWeight: 'bold',
        fontFamily: 'Montserrat_700Bold',
        textAlign: 'center',
        margin: 12,
    },
    text1: {
        textAlign: 'center',
        fontFamily: 'Montserrat_400Regular',
        fontSize: 20,
        color: 'black',
    },
    text2: {
        textAlign: 'center',
        fontFamily: 'Montserrat_400Regular',
        fontSize: 20,
        color: 'white',
    },
    button1: {
        display: 'flex',
        justifyContent: 'center',
        alignSelf: 'center',
        width: 200,
        height: 50,
        borderRadius: 10,
        backgroundColor: 'white',
        marginTop: 20,
        borderColor: 'black',
        borderWidth: 1,
    },
    button2: {
        display: 'flex',
        justifyContent: 'center',
        alignSelf: 'center',
        width: 200,
        height: 50,
        borderRadius: 10,
        backgroundColor: 'black',
        marginTop: 20,
    },
    image: {
        width: 25,
        height: 25,
        margin: 30,
        alignSelf: 'flex-start',
        tintColor: '#1C1C1C',
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
});