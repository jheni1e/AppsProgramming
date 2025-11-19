import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { useRouter } from 'expo-router';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../firebaseConfig';
import Swal from 'sweetalert2';
import { useState } from 'react';

export default function HomeScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const auth = getAuth(app);

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);

      setEmail("");
      setPassword("");

      await Swal.fire({
        title: "You logged in!",
        text: `Welcome!`,
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (error) {
      let message = "An error occured while trying to sign in.";

      if (typeof error === "object" && error !== null && "code" in error) {
        const code = (error as any).code;

        switch (code) {
          case "auth/user-not-found":
            message = "No account found with this email.";
            break;
          case "auth/wrong-password":
            message = "Wrong password. Try again.";
            break;
          case "auth/invalid-email":
            message = "The email is invalid.";
            break;
          case "auth/user-disabled":
            message = "This account was deactivated.";
            break;
          case "auth/too-many-requests":
            message = "Too many login requests. Try again later.";
            break;
          case "auth/network-request-failed":
            message = "Network request failed. Check your network.";
            break;
          default:
            message = "An error occured while trying to sign in.";
            break;
        }
      }

      Swal.fire({
        title: "Erro",
        text: message,
        icon: "error",
      });
    }
  }

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

        <TextInput placeholder="E-mail" style={styles.input} onChangeText={(value) => setEmail(value)} />
        <View style={styles.underInput}></View>

        <TextInput placeholder="Password" style={styles.input} secureTextEntry={true} onChangeText={(value) => setPassword(value)} />
        <View style={styles.underInput}></View>

        <TouchableOpacity onPress={signIn}>
          <View style={styles.button}>
            <Text style={styles.text}>Login</Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.forgotPasswordMsg}>Forgot your password?</Text>
        <Text style={styles.link}>Click here</Text>

      </View>
      <View style={styles.register}>
        <Text style={styles.registerText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => router.push('/register')}>
          <Text style={styles.registerLink}>Create your account now</Text>
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
    height: 100,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 45,
    paddingLeft: 20,
  },
  register: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
  },
  registerText: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 14,
    color: '#1C1C1C',
    marginRight: 5,
  },
  registerLink: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 14,
    color: '#1C1C1C',
    textDecorationLine: 'underline',
  }
});