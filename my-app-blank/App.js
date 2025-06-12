// ZONA A: Importaciones necesarias
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

// Creamos un componente de texto que se repetirá
// Agregammos el parametro props para recibir propiedades
const Texto = (props) => {
  // Desestructuramos el contenido de las propiedades
  // Agregamos children para recibir el contenido del componente
  const { children } = props;
  return (
    // Mostramos el contenido recibido como propiedad
      <Text> { children } </Text>
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
      <Texto> Hola </Texto>
      <Texto> Mundo</Texto>
      <Texto> React Native </Texto>
      <Button title='Presionar'></Button>
      <StatusBar style="auto" />
    </View>
  );
}

// ZONA C: Estilos de la aplicación 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
