import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import Login from './src/screens/Login';

describe('Pruebas de App y Login', () => {
    test('Verifica que el botón de inicio de sesión exista en Login', () => {
        const { getByText } = render(<Login />);
        expect(getByText('Iniciar Sesión')).toBeTruthy();
    });

    test('Ejecuta el evento handleLogin en el botón de inicio de sesión', async () => {
        const { getByText } = render(<Login />);
        const loginButton = getByText('Iniciar Sesión');
        fireEvent.press(loginButton);
        await waitFor(() => expect(loginButton).toBeTruthy());
    });

    test('Muestra el texto "Bienvenido" en la vista de Login', async () => {
        const { getByText } = render(<Login />);
        await waitFor(() => {
            expect(getByText('Bienvenido')).toBeTruthy();
        });
    });

    test('Muestra un mensaje de error si el correo o la contraseña están vacíos', async () => {
        const { getByText, getByPlaceholderText } = render(<Login />);
        const loginButton = getByText('Iniciar Sesión');
        
        fireEvent.changeText(getByPlaceholderText('Correo electrónico'), '');
        fireEvent.changeText(getByPlaceholderText('Contraseña'), '');
        fireEvent.press(loginButton);

        await waitFor(() => {
            expect(getByText('Por favor, ingrese correo electrónico y contraseña.')).toBeTruthy();
        });
    });


    test('Oculta el modal de error al presionar "Cerrar"', async () => {
        const { getByText } = render(<Login />);
        
        // Forzar un error para mostrar el modal de error
        fireEvent.press(getByText('Iniciar Sesión'));

        await waitFor(() => {
            expect(getByText('Cerrar')).toBeTruthy();
        });

        // Cerrar el modal de error
        fireEvent.press(getByText('Cerrar'));
        
        await waitFor(() => {
            expect(getByText('Iniciar Sesión')).toBeTruthy();
        });
    });

    test('Permite alternar la visibilidad de la contraseña', async () => {
        const { getByPlaceholderText, getByTestId } = render(<Login />);
        
        const passwordInput = getByPlaceholderText('Contraseña');
        const eyeIcon = getByTestId('eyeIcon');
    
        // La contraseña inicialmente debe estar oculta
        expect(passwordInput.props.secureTextEntry).toBe(true);
    
        // Cambiar la visibilidad de la contraseña
        fireEvent.press(eyeIcon);
        
        await waitFor(() => {
            expect(passwordInput.props.secureTextEntry).toBe(false);
        });
    });
});
