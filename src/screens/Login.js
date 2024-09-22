import React, { useState } from 'react';
import { View, Text, TextInput, Alert, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { validarUsuario } from '../services/LoginService'; 

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    if (!email || !contrasena) {
      Alert.alert('Error', 'Por favor, ingrese correo electrónico y contraseña.');
      return;
    }

    try {
      const response = await validarUsuario({ email, contrasena });
      if (response.status === 200) {
        Alert.alert('Éxito', 'Inicio de sesión correcto');
        navigation.navigate('Main');
      } else {
        Alert.alert('Error', 'Credenciales incorrectas.');
      }
    } catch (error) {
      Alert.alert('Error', 'Ocurrió un error al intentar iniciar sesión.');
      console.error('Error validando usuario', error);
    }
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  const handleRecoverPassword = () => {
    navigation.navigate('Recuperar'); // Navegar a la pantalla de recuperación
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logosinfondo.png')} style={styles.logo} resizeMode="contain" />
      <Text style={styles.title}>Iniciar sesión</Text>

      <Text style={styles.label}>Correo electrónico</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={styles.input}
      />

      <Text style={styles.label}>Contraseña</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          value={contrasena}
          onChangeText={setContrasena}
          secureTextEntry={!showPassword}
          style={styles.input}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
          <Icon name={showPassword ? "eye" : "eye-slash"} size={20} />
        </TouchableOpacity>
      </View>
      
      <Text style={styles.label}>¿Olvidaste tu contraseña?</Text>
      <TouchableOpacity onPress={handleRecoverPassword}>
        <Text style={[styles.link, { textAlign: 'left' }]}>Recuperar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Iniciar sesión</Text>
      </TouchableOpacity>

      <Text style={styles.message}>¿No tienes una cuenta?</Text>
      <TouchableOpacity onPress={handleRegister}>
        <Text style={styles.link}>Regístrarse</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  logo: {
    width: '100%',
    height: 150,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    alignSelf: 'flex-start',
    width: '100%',
  },
  input: {
    width: '100%',
    padding: 15,
    marginBottom: 20,
    borderRadius: 8,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: 15,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  message: {
    marginBottom: 5,
  },
});

export default Login;
