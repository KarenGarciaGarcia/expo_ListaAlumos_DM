
import { SafeAreaView } from "react-native-safe-area-context";
import {TouchableOpacity, Image, ScrollView, StyleSheet, Platform, Text, StatusBar, View, Dimensions, } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';




const { width } = Dimensions.get('window');
export default function FormularioV2() {
    return (

        <SafeAreaView style={style.mainS}>
            <ScrollView>
                <Text style={style.title}> Formulario V2</Text>
                <View style={style.container}>
                    <TouchableOpacity style={style.cerrarBoton}>
                        < MaterialIcons name="close" size={20} color={'#ffffffff'}/>

                    </TouchableOpacity>
                    <Image source={{ uri: 'https://static.vecteezy.com/system/resources/previews/006/631/105/original/portrait-of-brunette-woman-avatar-of-female-person-icon-of-adult-in-flat-style-vector.jpg' }} style={style.avatar} />
                    <Text style={style.name}>KAREN GARCIA GARCIA </Text>
                    <View style={style.infoContainer}>
                        <Text style={style.label}>Correo</Text>
                        <Text style={style.info}>garcia@gmail.com</Text>
                        <Text style={style.label}>Telefono</Text>
                        <Text style={style.info}>9374797391</Text>
                        <Text style={style.label}>Carrera</Text>
                        <Text style={style.info}>Ing Sistemas Computacionales</Text>
                        <Text style={style.label}>Especialidad</Text>
                        <Text style={style.info}>Desarrollo de Software</Text>
                        <Text style={style.label}>No. Control</Text>
                        <Text style={style.info}>2134679</Text>
                        <Text style={style.label}>Materia</Text>
                        <Text style={style.info}>Desarrollo Móvil</Text>
                        <Text style={style.label}>Grupo</Text>
                        <Text style={style.info}>7BS</Text>
                    </View>
                    {/* Boton Grande con Icono */}
                    <TouchableOpacity style={style.botonConIcono}>
                        <MaterialIcons name="save" size={20} color={'#fff'} style={style.iconoIzquierda} />
                        <Text style={style.textoBoton}> Guardar</Text>
                    </TouchableOpacity>
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
        textAlign: 'center',
        marginBottom:15,
    },
    container: {
        width: '100%',
        backgroundColor: '#f7f7f7ff',
        borderRadius: 15,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 10,
        elevation: 5
    },
    avatar: {
        width: width * 0.35,
        height: width * 0.35,
        borderRadius: (width * 0.35) / 2,
        marginBottom: 20,
        borderWidth: 2,
        borderColor: '#dddd'

    },
    name: {
        fontWeight: 'bold',
        fontSize: 17,
        marginBottom: 10,
        borderRadius:20,
        backgroundColor: '#e79bf1ff',
        padding:5
    },
    infoContainer: {
        width: '100%',
        marginBottom: 15,
    },
    label: {
        fontWeight: 'bold',
        fontSize: 13,
        marginBottom: 19,

    },
    info: {
        fontSize: 13,
        marginBottom: 10,
        borderRadius: 15,
        backgroundColor: '#e5dee6ff',
        padding: 10
    },
    textoBoton:{
        color:'#ffffffff',
        fontWeight: 'bold',
        fontSize:15,
        textAlign:'center'

    },
     botonConIcono:{
        backgroundColor:'#2c67d4ff',
        marginTop: 10,
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'center',
        paddingVertical:12,
        borderRadius:15,
        width:'40%'
    },
    iconoIzquierda:{
        marginRight:10
    },
    cerrarBoton:{
        position:'absolute',
        top:15,
        right:15,
        zIndex:10,
        borderRadius:30,
        backgroundColor:'#f11b1bff',
        width:30,
        height:30,
        justifyContent:'center',
        alignItems:'center',
        elevation:3

    }


})