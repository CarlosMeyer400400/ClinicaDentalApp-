// __mocks__/@react-navigation/stack.js
const Stack = {
    Navigator: ({ children }) => children,
    Screen: ({ children }) => children,
};

export const createStackNavigator = () => Stack;
