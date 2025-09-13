import {Image, StyleSheet, Text, View } from "react-native";

export default function CardBasicoImg() {
    return (
        <View style={style.card}>
            <Image style={style.img} source={{uri:'https://i.pinimg.com/originals/85/5b/5b/855b5b7f99eaa6478589cf546089a21e.jpg'}}/>
            <Text style={style.titulo}> Card con img</Text>
            <Text style={style.contenido}>Contenido del card</Text> 

        </View>
    ); 
}
const style = StyleSheet.create({
    card:{
        backgroundColor: '#fff',
        padding:16,
        margin: 10,
        borderRadius:10,
        shadowColor:'#585656ff',
        elevation:4,
        shadowOpacity:0.5,
        shadowRadius:4,
    },
    titulo:{
        fontSize:14,
        fontWeight: 'bold'
    },
    contenido:{
        marginTop:4,
    },
    img:{
        width:'100%',
        height:150,
        borderRadius:10,
    }

})

