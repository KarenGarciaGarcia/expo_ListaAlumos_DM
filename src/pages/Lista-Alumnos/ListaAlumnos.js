
import { SafeAreaView } from "react-native-safe-area-context";
import {TouchableOpacity, Image, ScrollView, StyleSheet, Platform, Text, StatusBar, View, Dimensions, } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

 export default function ListaAlumnos() {
    

  return (
    
     <SafeAreaView style={style.mainS}>
      {/* Inicio de AppBar */}
      <View style={style.appBar}>
        <MaterialIcons name="arrow-left" size={50} color={'#000'}/>
        <Text style={style.appBarTitle}> Lista de Usuarios </Text>
        <View style={{width:20}}> </View>
         
      </View> 
      {/* Cierre de AppBar */}
      {/* Inicio de contenido (Lista de Alumnos) */}
      <ScrollView >
        <Text style={style.sectionTitle}>Lista de Alumnos</Text>

      </ScrollView>
      {/* Cierre de contenido (Lista de Alumnos) */}
     </SafeAreaView>
     
 

  );
}
  const style = StyleSheet.create({
    mainS:{
        flex:1,
        backgroundColor:'#f8f7f8ff',
        paddingTop:Platform.OS === 'android' ? StatusBar.currentHeight: 44,
        
    },
    appBar:{
      height:50,
      width:'100%',
      backgroundColor:'#df9df3ff',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      paddingHorizontal:16,
    },
    appBarTitle:{
      fontWeight:'bold',
      fontSize:16,
    }
    

  });