import { HelloWave } from '@/components/hello-wave';
import { StyleSheet, View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View>
      <Text style={styles.title}>
        oiiiiiii
        <HelloWave />
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold'
  }
})