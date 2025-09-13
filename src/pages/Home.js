
import {StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={{width:150, height:150, borderRadius: 50}} source = {{uri:'https://cdn-icons-png.flaticon.com/512/5989/5989658.png'}}/>
      <Text style={styles.h1}>Bienvenidos</Text>
      <Text style={styles.h2}>a la clase </Text>
      <Text style={styles.h3}>de la Materia de Desarrollo Movil</Text>
     
  
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c69beeff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1:{
    fontSize:40,
    fontWeight: 'bold',
  },
  h2:{
    fontSize:30,
    fontWeight: '600', 
    marginTop:10,
  },
  h3:{
    fontSize:20,
    fontWeight: '600', 
    marginTop:10
  },
});
