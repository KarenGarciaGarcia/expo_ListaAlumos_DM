import {TouchableOpacity, Image, StyleSheet, Text, View } from "react-native";

export default function CardV3() {
    return (
        <View style={style.card}>
            <Image style={style.img} source={{ uri: 'https://i.pinimg.com/originals/85/5b/5b/855b5b7f99eaa6478589cf546089a21e.jpg' }} />
            <View style={style.card_contenido} >
                <Text style={style.titulo}> Card con img</Text>
                <Text style={style.contenido}>Contenido del card</Text>
                {/*Boton Sombreado*/}
                <TouchableOpacity style={style.botonSombreado }>
                    <Text style={style.texto}>Sombra</Text>
                </TouchableOpacity>


            </View>

        </View>
    );
}
const style = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        // padding:16,
        margin: 10,
        borderRadius: 10,
        shadowColor: '#585656ff',
        elevation: 4,
        shadowOpacity: 0.5,
        shadowRadius: 4,
        overflow: 'hidden',
        shadowOffset: { width: 0, height: 3 }
    },
    card_contenido: {
        padding: 16,
        // backgroundColor:'#f77474ff'
    },

    titulo: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    contenido: {
        marginBottom: 12,
        fontSize: 12,
        color: '#0e0d0dff'
    },
    img: {
        width: '100%',
        height: 180,
        // borderRadius:10,
    },
     botonSombreado:{
        backgroundColor: '#f372e8ff',
        paddingVertical:10,
        paddingHorizontal:18,
        borderRadius:10,
        marginTop: 10,
        alignSelf:'flex-start'
        // marginBottom: 15

    },
    texto:{
        fontWeight:'bold',
        fontSize:12
    }

})

