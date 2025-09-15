
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity , StyleSheet, Platform, Text, StatusBar, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';



export default function Formulario() {
    return (

        <SafeAreaView style={style.mainS}>
            <Text style={style.title}>Registro de Alumno</Text>
            <Text style={style.label}>Nombre:</Text>
            <TextInput style={style.input} placeholder="Escribe tu nombre" />
            <Text style={style.label}>Carrera:</Text>
            <TextInput editable={false} style={style.input} placeholder="Ingresa tu carrera" />
            <Text style={style.label}>Descripción:</Text>
            <TextInput multiline={true} numberOfLines={4} style={[style.input, style.textArea]} placeholder="Agrega una Descripción" />
            <Text style={style.label}>Correo Electronico:</Text>
            <TextInput style={style.input} placeholder="Ingresa tu correo" keyboardType="email-address" />
            <Text style={style.label}>Contraseña:</Text>
            <TextInput style={style.input} placeholder="********" secureTextEntry />
            <Text style={style.label}>Telefono:</Text>
            <TextInput style={style.input} placeholder="123456789" keyboardType="numeric" />
            {/* Boton Grande con Icono */}
            <TouchableOpacity style={style.botonConIcono}>
                <MaterialIcons name="send" size={20} color={'#fff'} style={style.iconoIzquierda} />
                <Text style={style.textoBoton}> Boton Grande</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );

}
const style = StyleSheet.create({
    mainS: {
        flex: 2,
        backgroundColor: '#eee6ebff',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 44,
        padding: 15
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center'
    },
    label: {
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10
    },
    input: {
        borderWidth: 1,
        borderColor: '#8b8787ff',
        borderRadius: 10,

    },
    textArea: {
        height: 100,
        textAlignVertical: 'top',
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
    },
    iconoIzquierda:{
        marginRight:10
    },



})