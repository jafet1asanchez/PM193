// ZONA A: Importaciones necesarias
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

// Creamos un componente de texto que se repetirá
// Agregammos el parametro props para recibir propiedades
const Texto = (props) => {
  // Desestructuramos el contenido de las propiedades
  const { contenido } = props;
  return (
    // Mostramos el contenido recibido como propiedad
      <Text> { contenido } </Text>
  )
}

// ZONA B: Componente principal de la aplicación (MAIN)
export default function App() {
  return (
  //Llamamos al componente de texto varias veces
    <View style={styles.container}>
      <Texto contenido = 'Hola'></Texto>
      <Texto contenido = 'Mundo'></Texto>
      <Texto contenido = 'React Native'></Texto>
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
