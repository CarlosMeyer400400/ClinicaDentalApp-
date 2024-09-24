import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAllCitasByUserId } from '../services/LoginService'; // Adjust the path as needed

const Historial = () => {
  const [citas, setCitas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCitas = async () => {
      try {
        const token = await AsyncStorage.getItem('token'); // Fetch the token instead of user data
        if (!token) {
          console.log('No token found');
          setLoading(false);
          return;
        }

        const userId = token; // Assuming token is the user ID based on your description
        console.log('User ID (Token):', userId);

        const data = await getAllCitasByUserId(userId);
        setCitas(data);
      } catch (error) {
        console.error('Error fetching citas:', error);
        setError('Error al cargar las citas.');
      } finally {
        setLoading(false);
      }
    };

    fetchCitas();
  }, []);

  const renderCita = ({ item }) => (
    <View style={styles.citaContainer}>
      <Text style={styles.citaText}>Fecha: {item.fecha}</Text>
      <Text style={styles.citaText}>Hora: {item.hora}</Text>
      <Text style={styles.citaText}>Motivo: {item.motivo}</Text>
      <Text style={styles.citaText}>Dentista: {item.dentista}</Text>
      <Text style={styles.citaText}>Estado: {item.estado}</Text>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Historial de Citas</Text>
      <FlatList
        data={citas}
        renderItem={renderCita}
        keyExtractor={(item) => item.id_cita.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  citaContainer: {
    backgroundColor: '#ffffff',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 3,
  },
  citaText: {
    fontSize: 16,
    marginBottom: 4,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default Historial;
