import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

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

        <Text style={styles.title}>Welcome back!</Text>

        <TextInput placeholder="E-mail" style={styles.input} />
        <View style={styles.underInput}></View>

        <TextInput placeholder="Password" style={styles.input} />
        <View style={styles.underInput}></View>

        <TouchableOpacity>
          <View style={styles.button}>
            <Text style={styles.text}>Login</Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.forgotPasswordMsg}>Forgot your password?</Text>
        <Text style={styles.link}>Click here</Text>

        <TouchableOpacity style={styles.register} onPress={() => router.push('/register')}>
          <Text style={styles.registerText}>Create your account here!</Text>
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
  title: {
    color: 'black',
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'Montserrat_700Bold',
    textAlign: 'center',
    margin: 12,
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
    marginTop: 20,
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
  image: {
    width: 25,
    height: 25,
    alignSelf: 'center',
    margin: 30,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgotPasswordMsg: {
    marginTop: 20,
    fontFamily: 'Montserrat_400Regular',
    color: 'black',
  },
  link: {
    fontFamily: 'Montserrat_700Bold',
    textDecorationLine: 'underline',
    marginTop: 2,
  },
  header: {
    width: '100%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingTop: 20,
  },
  register: {
    marginTop: 50,
  },
  registerText: {
    fontFamily: 'Montserrat_400Regular',
    marginTop: 2,
    fontSize: 18
  },
});
