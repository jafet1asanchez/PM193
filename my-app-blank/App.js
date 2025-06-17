// ZONA A: Importaciones necesarias
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
// Importamos React para poder crear componentes
import React, {useState} from 'react';

// Creamos un componente de texto que se repetirá
// Agregammos el parametro props para recibir propiedades
// Componente propio
// PROPIEDAD PADRE DE TEXTO
const Texto = ({style}) => {
  // Desestructuramos el contenido de las propiedades
  // Agregamos children para recibir el contenido del componente
  //Con el use state ya arrancamos el contenido con 'Hola Mundo'
  const [contenido, setContenido ] = useState('Hola Mundo')
  // Declaramos una nueva constante que con la ayuda de una 
  // funcion arrow modificará el contenido a 'Estado Modificado'
  const actualizaTexto = () => {
    setContenido('Estado Modificado')
  }
  return (
    // Mostramos el contenido recibido como propiedad
    // Aqui lo que hacemos es que al presionar el texto
    // cambia de contenido a actualiza texto
      <Text  style= {[styles.Text, style]} onPress={actualizaTexto}> { contenido } </Text>
  )
}

const Boton = () => {
  const [titulo, setTitulo] = useState('Puchale')
  const cambiarTitulo = () => {
    setTitulo('Pucheado')
  }
  return (
    <Button onPress={cambiarTitulo} title={titulo}> </Button>
  )
}

  

// ZONA B: Componente principal de la aplicación (MAIN)
export default function App() {
  return (
  //Llamamos al componente de texto varias veces
    <View style={styles.container}>
      {/* Ahora ya no debemos mandar a llamar children, 
      con tan solo escribir el texto dentro de Texto 
      es suficiente */}
      <Texto style= {styles.azul}> </Texto>
      <Texto style= {styles.amarillo}> </Texto>
      <Texto style= {styles.negro}> </Texto>
      <Boton> </Boton>
      <StatusBar style="auto" />
    </View>
  );
}

// ZONA C: Estilos de la aplicación 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'strech', // izquierda a derecha
    justifyContent: 'center', // arriba a abajo
    flexDirection: 'column' 
  },
  // Agregamos un estilo para el texto
  Text: {
    color: 'white',
    fontSize: 27,
    
  },
  azul: {
    backgroundColor: 'blue', 
  },
  negro: {
    backgroundColor: 'black',
  },
  amarillo: {
    backgroundColor: 'yellow',
  },
});
