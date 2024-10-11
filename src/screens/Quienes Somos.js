import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { getDataInformacion } from '../services/LoginService'; // Asegúrate de que la ruta sea correcta

const QuienesSomos = () => {
  const [dataInformacion, setDataInformacion] = useState({
    mision: '',
    vision: '',
    quienessomos: '',
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulación de ID de información obtenida del token (debería ser reemplazado por el valor real)
    const idInformacion = '1'; 

    getDataInformacion(idInformacion)
      .then((data) => {
        setDataInformacion(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <FlatList
      ListHeaderComponent={() => (
        <View style={styles.container}>
          <Text style={styles.title}>Quiénes Somos</Text>
          <View style={styles.imageContainer}>
            <Image source={require('../assets/somos.jpg')} style={styles.image} />
          </View>
          <Text style={styles.description}>{dataInformacion.quienessomos}</Text>

          <Text style={styles.subTitle}>Misión</Text>
          <Text style={styles.description}>{dataInformacion.mision}</Text>

          <Text style={styles.subTitle}>Visión</Text>
          <Text style={styles.description}>{dataInformacion.vision}</Text>

          <Text style={styles.subTitle}>Equipo Médico</Text>
        </View>
      )}
      data={doctores} // Array de información de doctores
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.doctorInfo}>
          <Image source={item.image} style={styles.doctorImage} />
          <Text style={styles.doctorName}>{item.name}</Text>
          <Text style={styles.doctorDescription}>{item.description}</Text>
        </View>
      )}
    />
  );
};

const doctores = [
  {
    id: 1,
    name: 'Dr. Nombre 1',
    description: 'Descripción breve del Dr. Nombre 1.',
    image: require('../assets/doctora1.jpg'),
  },
  {
    id: 2,
    name: 'Dr. Nombre 2',
    description: 'Descripción breve del Dr. Nombre 2.',
    image: require('../assets/doctor2.jpg'),
  },
  {
    id: 3,
    name: 'Dr. Nombre 3',
    description: 'Descripción breve del Dr. Nombre 3.',
    image: require('../assets/doctora3.jpg'),
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'justify',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 200,
  },
  doctorInfo: {
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 15,
  },
  doctorImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  doctorDescription: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 5,
  },
});

export default QuienesSomos;
