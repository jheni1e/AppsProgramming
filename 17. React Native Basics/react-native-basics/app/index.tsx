import { HelloWave } from '@/components/hello-wave';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { useState } from 'react';

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  const [text, setText] = useState("");

  return (
    <View>
      <Text style={styles.title}>
        oiiiiiii malu te amo
        <HelloWave />
      </Text>
      <View style={styles.square} />
      <Text style={styles.text}>fala paizao {text}</Text>
      <TextInput placeholder="Digite aqui" style={styles.input}
        onChangeText={text => setText(text)} />
      <TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.text}>oiiiiii</Text>
        </View>
      </TouchableOpacity>
      <Image
        source={{ uri: 'https://i.pinimg.com/736x/30/8e/8c/308e8c003d1bde0d36af56fd2905aedc.jpg' }}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: 'black',
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'Montserrat_400Regular',
    textAlign: 'center',
    margin: 12
  },
  square: {
    height: 300,
    width: 300,
    backgroundColor: 'thistle',
    alignSelf: 'center',
    margin: 10,
    borderRadius: 150
  },
  input: {
    alignSelf: 'center',
    margin: 20,
    width: 150,
    height: 30,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'gray'
  },
  text: {
    textAlign: 'center',
    fontSize: 20
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 150,
    height: 50,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 6
  },
  image: {
    width: 400,
    height: 500,
    alignSelf: 'center',
    margin: 30
  },
})