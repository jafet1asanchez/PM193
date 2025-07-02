import { use } from 'react';
import { ScrollView, StatusBar, StyleSheet, Text  } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
return (
  // Iniciamos el SafeAreaProvider
  <SafeAreaProvider>
    <SafeAreaView style={styles.container} edges={'top'}>
      <ScrollView horizontal={true}>
        <ScrollView style={styles.scrollView}> 
          <Text style={styles.text}>
            Este es el texto que utilizará todo el espacio
            Este es el texto que utilizará todo el espacio
            Este es el texto que utilizará todo el espacio
            Este es el texto que utilizará todo el espacio
            Este es el texto que utilizará todo el espacio
            Este es el texto que utilizará todo el espacio
            Este es el texto que utilizará todo el espacio
            Este es el texto que utilizará todo el espacio
            Este es el texto que utilizará todo el espacio
            Este es el texto que utilizará todo el espacio
            Este es el texto que utilizará todo el espacio
            Este es el texto que utilizará todo el espacio
            Este es el texto que utilizará todo el espacio
            Este es el texto que utilizará todo el espacio
            Este es el texto que utilizará todo el espacio
            Este es el texto que utilizará todo el espacio
            Este es el texto que utilizará todo el espacio
            Este es el texto que utilizará todo el espacio
            Este es el texto que utilizará todo el espacio
            Este es el texto que utilizará todo el espacio
            Este es el texto que utilizará todo el espacio
            Este es el texto que utilizará todo el espacio
            Este es el texto que utilizará todo el espacio
            Este es el texto que utilizará todo el espacio
            Este es el texto que utilizará todo el espacio
            Este es el texto que utilizará todo el espacio
            Este es el texto que utilizará todo el espacio
            Este es el texto que utilizará todo el espacio
            Este es el texto que utilizará todo el espacio
          </Text>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  </SafeAreaProvider>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'green',        
  },
  text: {
    fontSize: 50,
    padding: 20,
  },
}); 

export default App;