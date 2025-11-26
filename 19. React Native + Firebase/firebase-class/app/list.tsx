import { collection, getDocs, query, where } from "firebase/firestore";
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { useEffect, useState } from "react";
import { FlatList, Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { db } from "../firebaseConfig";
import { useRouter } from 'expo-router';


export default function VehicleList() {

    const router = useRouter();

    const [albums, setAlbums] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchAlbums();
    }, []);

    const [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_700Bold,
    });

    if (!fontsLoaded) return null;

    async function fetchAlbums() {
        try {
            const q = query(
                collection(db, "albums")
            );

            const snapshot = await getDocs(q);

            const list = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));

            setAlbums(list);

        } catch (err) {
            console.log("Error:", err);
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return (
            <View style={{ padding: 20 }}>
                <Text>Loading...</Text>
            </View>
        );
    }

    if (albums.length === 0) {
        return (
            <View style={{ padding: 20 }}>
                <Text>No album found.</Text>
            </View>
        );
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

                    <View style={{ padding: 20 }}>
                        <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 10 }}>
                            My Albums
                        </Text>

                        <FlatList
                            data={albums}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <View style={{ marginBottom: 10 }}>
                                    {/* <Image source={{ uri: item.albumCoverUrl }} style={styles.fullImage} /> */}
                                    <Text style={styles.text1}>Name: {item.name}</Text>
                                    <Text style={styles.text1}>Genre: {item.genre}</Text>
                                    <Text style={styles.text1}>Year: {item.year}</Text>
                                    <Text style={styles.text1}>Author: {item.author}</Text>
                                </View>
                            )}
                        />
                    </View>
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
    fullImage: {
        width: 300,
        height: 300,
        alignSelf: 'center',
    },
});