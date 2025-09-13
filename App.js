import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Bienvenidos</Text>
      <Text style={styles.h2}>a la clase </Text>
      <Text style={styles.h3}>de la Materia de Desarrollo Movil</Text>
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
  h1:{
    fontSize:40,
    fontWeight: 'bold',
  },
  h2:{
    fontSize:30,
    fontWeight:'600', 
    marginTop:10
  },
  h3:{
    fontSize:20,
    fontWeight: '600', 
    marginTop:10
  },
});
