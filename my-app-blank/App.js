import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, SectionList, StyleSheet} from 'react-native';

export default function App() {
  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    fetch("https://localhost:8000/nombres")
      .then((res => res.json())) //Si la respuesta llega bien, entonces
      .then((data) => setPersonas(data)) //Se guarda la data en el estado personas
      .catch((error) => console.error(err)); //Si hay error, lo muestra en consola
  }, []);

  //Datos para la lista simple (FlatList)
  const flatData = personas.map((p, index) => ({
    key: index.toString(),
    nombre: p.Nombre,
    apellido: p.Apellido
  }));

  //Datos para la lista por secciones (SectionList)
  const sectionData = personas.map((p) => ({
    title: p.Apellido,
    data: [p.Nombre]
  }));

  return(
    //Renderizar lista simple
    <View style={styles.container}>
      <Text style={styles.title}>
        Solo nombres
      </Text>
      <FlatList
        data={flatData}
        renderItem={({item}) => <Text style={styles.item}> {item.apellido} {item.nombre} </Text>}
        keyExtractor={item => item.key}
      />

      {/* Esto es para SectionList */}
      <Text style={styles.title}>SectionList - Agrupado por Apellido</Text> {/* Muestra el título */}
      <SectionList
        sections={sectionData} /* Se pasan los datos a mostrar en la SectionList */
        keyExtractor={(item, index) => item + index} /* Se identifica de manera unica el item, Andrea0, Carol1 */
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>} /* defino cada elemento de una sección (nombres)*/
        renderSectionHeader={({ section: { title } }) => ( /* defino como mostrar cada seccion (apellidos) */
          <Text style={styles.header}>{title}</Text> 
        )}
      />
    </View>
  );
}

// Son los estilos que le dare a la interfaz
const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 50, paddingHorizontal: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginVertical: 10 },
  item: { padding: 10, fontSize: 16 },
  header: { fontSize: 18, fontWeight: 'bold', backgroundColor: '#ddd', padding: 5 },
});
