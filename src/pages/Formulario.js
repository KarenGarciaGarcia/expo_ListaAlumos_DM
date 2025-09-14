
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Platform, Text, View,StatusBar, ScrollView, TextInput } from 'react-native';


export default function Formulario(){
    return (
        <SafeAreaView style={style.mainS}>
            <Text>Nombre:</Text>
            <TextInput placeholder="Escribe tu nombre"/>
        </SafeAreaView>
    );
 
}
const style = StyleSheet.create({
    mainS:{
        flex:2,
        backgroundColor:'#eee6ebff',
        paddingTop:Platform.OS === 'android' ? StatusBar.currentHeight: 44,
        padding: 15
    },
    

})