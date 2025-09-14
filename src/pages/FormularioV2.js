
import { SafeAreaView } from "react-native-safe-area-context";
import {Image, ScrollView,StyleSheet, Platform, Text, StatusBar, View, Dimensions, } from 'react-native';


const {width} = Dimensions.get('window');
export default function FormularioV2() {
    return (

        <SafeAreaView style={style.mainS}>
              <ScrollView>
                <Text style= {style.title}> Formulario V2</Text>
                <View style={style.container}>
                    <Image source={{uri:'https://static.vecteezy.com/system/resources/previews/006/631/105/original/portrait-of-brunette-woman-avatar-of-female-person-icon-of-adult-in-flat-style-vector.jpg'}} style={style.avatar}/>

                </View>
              </ScrollView>
        </SafeAreaView>
    );

}
const style = StyleSheet.create({
    mainS: {
        flex: 2,
        backgroundColor: '#efdff5ff',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
        padding: 15
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center'
    },
    container:{
        width:'100%',
        backgroundColor:'#f7f7f7ff',
        borderRadius:15,
        padding:20,
        alignItems:'center',
        shadowColor:'#000',
        shadowOpacity:0.05,
        shadowOffset:{width:0, height:4},
        shadowRadius:10,
        elevation:5
    },
    avatar:{
        width:width * 0.35,
        height:width*0.35,
        borderRadius:(width*0.35)/2,
        marginBottom:20,
        borderWidth:2,
        borderColor:'#dddd'

    }
    

})