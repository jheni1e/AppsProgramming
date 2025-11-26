import { collection, getDocs, query, doc, updateDoc, deleteDoc } from "firebase/firestore";
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

    async function updateAlbum(id: string, data: any) {
        try {
            const ref = doc(db, "albums", id);
            await updateDoc(ref, data);

            alert("Album updated!");
            fetchAlbums();

        } catch (err) {
            console.log("Error:", err);
        }
    }

    async function deleteAlbum(id: string) {
        try {
            const ref = doc(db, "albums", id);
            await deleteDoc(ref);

            alert("Album deleted!");
            fetchAlbums();

        } catch (err) {
            console.log("Error:", err);
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
                        <Text style={styles.albumTitle}>
                            My Albums
                        </Text>

                        <FlatList
                            data={albums}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <View style={{ marginBottom: 10 }}>
                                    <Image source={{ uri: item.coverUrl }} style={styles.fullImage} />
                                    <Text style={styles.text1}><strong>Name:</strong> {item.name}</Text>
                                    <Text style={styles.text1}><strong>Genre:</strong> {item.genre}</Text>
                                    <Text style={styles.text1}><strong>Year:</strong> {item.year}</Text>
                                    <Text style={styles.text1}><strong>Author:</strong> {item.author}</Text>
                                    <View style={styles.centerButtons}>
                                        <TouchableOpacity style={styles.updateButton} onPress={() => updateAlbum(item.id, { brand: "Updated" })}>
                                            <Text style={styles.text2}>Edit</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity style={styles.deleteButton} onPress={() => deleteAlbum(item.id)}>
                                            <Text style={styles.text2}>Delete</Text>
                                        </TouchableOpacity>
                                    </View>
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
    albumTitle: {
        fontFamily: 'Montserrat_700Bold',
        marginBottom: 50,
        textAlign: 'center',
        fontSize: 40,
    },
    updateButton: {
        backgroundColor: "#16476A",
        paddingVertical: 8,
        paddingHorizontal: 14,
        borderRadius: 8,
    },
    deleteButton: {
        backgroundColor: "#BF092F",
        paddingVertical: 8,
        paddingHorizontal: 14,
        borderRadius: 8,
    },
    centerButtons: {
        flexDirection: "row",
        marginTop: 12,
        gap: 12,
        flex: 1,
        justifyContent: 'center'
    },
});