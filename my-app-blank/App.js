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
  const [ modoOscuro, setModoOscuro ] = useState(false);
  const altenarModoOscuro = () => setModoOscuro(previo => !previo);
  return (
    <ProveedorPaper>
      <ScrollView contentContainerStyle = { styles.ScrollViewContainer}>
        <View style = { [styles.container, { backgroundColor: modoOscuro ? '#111' : '#fff' } ] } >
          <Text style = { styles.title }> Modo de pantalla: {modoOscuro ? 'oscuro' : 'claro'}</Text>
          <Switch value={modoOscuro} onValueChange={altenarModoOscuro} />
        </View>

        {/* Boton 1 */}
        <View style={styles.section}>
          <Text style={styles.title}> 1. Boton basico </Text>
          <Button>
            title = "Boton Nativo"
            color = "#007bff"
            onPress={() => Alert.alert('Boton Nativo Presionado')}
          </Button>
        </View>

        {/* Boton 2 */}
        <View style={styles.section}>
          <Text style={styles.title}> 2. TouchableOpacity </Text>
          <TouchableOpacity 
            style = {[styles.btn, {backgroundColor: '#28a745'}]}
            onPress={() => window.alert('TouchableOpacity')}>
              <Text style = {styles.btnText}> TouchableOpacity </Text>
          </TouchableOpacity>
        </View>

        {/* Boton 3 */}
        <View style={styles.section}>
          <Text style={styles.title}> 3. TouchableHighlight </Text>
          <TouchableHighlight 
            style = {[styles.btn, {backgroundColor: '#ffc107'}]}
            underlayColor= "e0a800"
            onPress={() => Alert.alert('Boton 3')}>
              <Text style = {styles.btnText}> TouchableHighlight </Text>
          </TouchableHighlight>
        </View>

        {/* Boton 4 */}
        <View style={styles.section}>
          <Text style={styles.title}>4. TouchableWithoutFeedback </Text>
          <TouchableWithoutFeedback onPress={() => window.alert('Boton4')}>
            <View style= {[styles.btn, { backgroundColor: '#17a2b8'}]}>
             <Text style= {styles.btnText}> Sin retroalimentación </Text> 
            </View>
          </TouchableWithoutFeedback>
        </View>

        {/* Boton 5 */}
        <View style= {styles.section}> 
          <Text style={styles.title}> 5. Pressable </Text>
          <Pressable
          style={({ pressed }) => [
            styles.btn,
            { backgroundColor: pressed ? '#6c757d' : '#343a40'},
          ]}
          onPress={() => Alert.alert('¡Presionaste Pressable!')}>
            <Text style={styles.btnText}> Pressable </Text>
          </Pressable>
        </View>

        {/* Boton 6 */}
       <View style={styles.section}>
        <Text style={styles.title}> 6. Paper </Text>
        <ButtonPaper
          mode= "contained"
          buttonColor= '#9c27b0'
          textColor= '#fff'
          onPress= {() => Alert.alert('¡Presionaste el boton de papel!')}
          style= {styles.paperButton}
        >
          Boton de papel
        </ButtonPaper>
       </View> 

       {/* Boton 7 */}
       <View style={styles.section}>
        <Text style= {styles.title}> 7. Elements </Text>
        <ButtonElements
          title= "Boton Elements"
          onPress= {() => Alert.alert('¡Presionaste el boton de Elements!')}
          buttonStyle={{
            backgroundColor: '#ff5722',
            borderRadius: 10,
            padding: 10,
          }}
          titleStyle= {{ fontWeight: 'bold', fontSize: 16 }}
        />
       </View>

       <StatusBar style='auto'/>
      </ScrollView>
    </ProveedorPaper>
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
  },
  title: {
    fontSize: 16,
    marginVertical: 6,
    textAlign: 'center',
    color: '#000'
  },
  section: {
    marginVertical: 15,
    alignItems: 'center',
    width: '100%',
  },
  btn: {
    padding: 12,
    borderRadius: 8,
    marginTop: 5,
    width: 220,
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  paperButton: {
    marginTop: 5,
    width: 220,
  },
});
