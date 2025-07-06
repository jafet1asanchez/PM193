/* Zona 1: Lugar de las importaciones */  
import React, { useEffect, useState } from 'react';
import {
  View,
  StatusBar,
  Text,
  TextInput,
  Switch,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';
import SplashScreen from './src/screens/SplashScreen';
import HomeScreen from './src/screens/HomeScreen';

/* Zona 2: Main */
export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [aceptaTerminos, setAceptaTerminos] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleRegistro = () => {
    if (!nombre.trim() && !correo.trim()) {
      Alert.alert('Error', 'Por favor ingresa tu nombre y correo electrónico.');
      return;
    }

    if (!nombre.trim()) {
      Alert.alert('Error', 'Por favor ingresa tu nombre.');
      return;
    }

    if (!correo.trim()) {
      Alert.alert('Error', 'Por favor ingresa tu correo electrónico.');
      return;
    }

    if (!aceptaTerminos) {
      Alert.alert('Aviso', 'Debes aceptar los términos y condiciones.');
      return;
    }

    Alert.alert('Registro exitoso', `Nombre: ${nombre}\nCorreo: ${correo}`);

    // Limpia los campos después del registro exitoso
    setNombre('');
    setCorreo('');
    setAceptaTerminos(false);
  };

  return (
    <View style={styles.mainContainer}>
      <StatusBar hidden />
      {isLoading ? (
        <SplashScreen />
      ) : (
        <View style={styles.formContainer}>
          <Text style={styles.title}>Registro de Usuario</Text>

          <TextInput
            style={styles.input}
            placeholder="Nombre completo"
            placeholderTextColor="#ccc"
            value={nombre}
            onChangeText={setNombre}
          />

          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            placeholderTextColor="#ccc"
            keyboardType="email-address"
            autoCapitalize="none"
            value={correo}
            onChangeText={setCorreo}
          />

          <View style={styles.switchContainer}>
            <Text style={styles.switchText}>Aceptar términos y condiciones</Text>
            <Switch
              value={aceptaTerminos}
              onValueChange={setAceptaTerminos}
            />
          </View>

          <TouchableOpacity onPress={handleRegistro}>
            <Text style={styles.register}>Registrarse</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

/* Zona 3: Estilos */
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: '80%',
    maxWidth: 400,
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 25,
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 6,
    marginBottom: 12,
    fontSize: 25,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  switchText: {
    flex: 1,
    marginRight: 10,
    fontSize: 25,
  },
  register: {
    color: '#0066cc',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
  },
});
