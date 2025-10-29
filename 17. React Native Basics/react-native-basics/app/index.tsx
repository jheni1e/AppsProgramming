import { HelloWave } from '@/components/hello-wave';
import { StyleSheet, View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View>
      <Text style={styles.title}>
        oiiiiiii
        <HelloWave />
      </Text>
      <View style={styles.square} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: 'black',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 12
  },
  square: {
    height: 300,
    width: 300,
    backgroundColor: 'thistle',
    alignSelf: 'center',
    margin: 10,
    borderRadius: 8
  }
})