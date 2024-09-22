import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { getAllCitasByUserId } from '../services/LoginService'; // Ajusta la ruta

const Historial = () => {
  const [citas, setCitas] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const userId = 1; // Ajusta esto para obtener el ID de usuario correctamente

  useEffect(() => {
    const fetchCitas = async () => {
      try {
        const data = await getAllCitasByUserId(userId);
        setCitas(data);
      } catch (error) {
        console.error('Error fetching citas:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCitas();
  }, [userId]);

  const renderCita = ({ item }) => (
    <View style={styles.citaContainer}>
      <Text style={styles.citaText}>Fecha: {item.fecha}</Text>
      <Text style={styles.citaText}>Hora: {item.hora}</Text>
      <Text style={styles.citaText}>Motivo: {item.motivo}</Text>
      <Text style={styles.citaText}>Dentista: {item.dentista}</Text>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
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
    color: '#333',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Historial;
