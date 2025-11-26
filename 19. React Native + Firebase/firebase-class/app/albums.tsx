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
    const [albumCoverUrl, setAlbumCoverUrl] = useState('');

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
                albumCoverUrl,
                userId: 'jheni1e',
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp(),
            };

            await addDoc(collection(db, "albums"), album);
            console.log("Album registered!");

        } catch (err) {
            console.log("Error:", err);
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

                    <TextInput placeholder="Name" onChangeText={setName} style={styles.text1} />
                    <TextInput placeholder="Genre" onChangeText={setGenre} style={styles.text1} />
                    <TextInput placeholder="Year" onChangeText={setYear} style={styles.text1} />
                    <TextInput placeholder="Author" onChangeText={setAuthor} style={styles.text1} />
                    <TextInput placeholder="Album Cover URL" onChangeText={setAlbumCoverUrl} style={styles.text1} />

                    <TouchableOpacity onPress={registerAlbum}>
                        <View>
                            <Text>Cadastrar</Text>
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
});