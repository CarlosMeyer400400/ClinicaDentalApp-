import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Perfil = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      {/* Aquí puedes agregar el contenido relacionado con el perfil */}
      <Button title="Ir a Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Perfil;
