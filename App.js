import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.holamundo}>Hola Mundo</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eebefaff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  holamundo:{
    fontSize:50,
    borderRadius: 30,
    backgroundColor: '#fff',
    padding: 15,
  },
});
