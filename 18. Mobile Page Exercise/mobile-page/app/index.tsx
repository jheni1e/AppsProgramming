import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  return (
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
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: 'black',
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'Montserrat_700Bold',
    textAlign: 'center',
    margin: 12
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
    marginTop: 20
  },
  input: {
    alignSelf: 'center',
    margin: 20,
    width: 200,
    height: 30,
    textAlign: 'left',
    fontFamily: 'monospace',
    color: 'gray',
    marginLeft: 40
  },
  underInput: {
    width: 200,
    height: 1,
    backgroundColor: 'black',
    marginTop: -20,
    marginBottom: -5
  },
  image: {
    width: 400,
    height: 500,
    alignSelf: 'center',
    margin: 30
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#F9FEFF',
  },
  forgotPasswordMsg: {
    marginTop: 20,
    fontFamily: 'Montserrat_400Regular',
    color: 'black'
  },
  link: {
    fontFamily: 'Montserrat_700Bold',
    textDecorationLine: 'underline',
    marginTop: 2
  }
});
