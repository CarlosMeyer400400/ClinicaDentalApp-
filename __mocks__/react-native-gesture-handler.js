// __mocks__/react-native-gesture-handler.js
export const gestureHandlerRootHOC = jest.fn();
export const Directions = {};
export default {
  Direction: Directions,
  gestureHandlerRootHOC,
  Swipeable: jest.fn(),
  DrawerLayout: jest.fn(),
};

// __mocks__/react-native-gesture-handler.js
export const PanGestureHandler = ({ children }) => children;
export const GestureHandlerRootView = ({ children }) => children;
export const State = {};
