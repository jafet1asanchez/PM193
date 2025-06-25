// ZONA A: Importaciones necesarias
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, ScrollView, Touchable, TouchableOpacity, 
         TouchableHighlight, TouchableNativeFeedback, Pressable, Switch } from 'react-native';
// Importamos React para poder crear componentes
import React, {useState} from 'react';
//Agregar importaciones de react native paper
import { Button as ButtonPaper, Provider as ProveedorPaper } from 'react-native-paper';
import { Button as ButtonElements } from 'react-native-elements'
import { TouchableWithoutFeedback } from 'react-native';

// ZONA B: Componente principal de la aplicación (MAIN)
export default function App() {
  
  const AlertaBasica = () => {
    window.alert('Hola, soy una alerta');
  }

  const AlertaConfirmacion = () => {
    const confirmacion = window.confirm('Gus es Gustambo')
    if (confirmacion) {
      window.alert('Exactamente');
    } else {
      window.alert('Como que no!');
    }
  }

  const AlertTexto = () => {
    const confirm = window.prompt('Erick esta aqui?', 'nero');
    if (confirm) {
      window.alert(`Exactamente, ${confirm}`);
    } else {
      window.alert('Responde!');
    }
  }

  const AlertConf = () => {
    const conf = window.prompt('Que edad tienes?');
    const numero = parseInt(conf, 50)
    if (numero >= 1 && numero <= 70) {
      window.alert(`Tu edad es:, ${numero}`);
    } else {
      window.alert('Incorrecto!');
    }
  }

  return (
    //ALERTA BASICA, SOLO MUESTRA TEXTO
   <View style={styles.container}>
    <Button title='Alerta básica' onPress={AlertaBasica}></Button>
    <Button title='Alerta confirmación' onPress={AlertaConfirmacion}></Button>
    <Button title='Alerta prompt' onPress={AlertTexto}></Button>
    <Button title='Alerta comprobación parametro' onPress={AlertConf}></Button>
   </View>
  );
}

// ZONA C: Estilos de la aplicación 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center', // izquierda a derecha
    paddingHorizontal: 16,
    paddingBottom: 50,
    // flexDirection: 'row' 
  }
});
