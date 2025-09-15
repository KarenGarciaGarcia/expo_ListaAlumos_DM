
import { SafeAreaView } from "react-native-safe-area-context";
import {TouchableOpacity, Image, ScrollView, StyleSheet, Platform, Text, StatusBar, View, Dimensions, } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

 export default function ListaAlumnos() {
    

  return (
    
     <View style={style.mainS}></View>


  );
}
  const style = StyleSheet.create({
    mainS:{
        flex:2,
        backgroundColor:'#e1b8d4ff',
        paddingTop:Platform.OS === 'android' ? StatusBar.currentHeight: 44,
        padding: 15
    },

  });