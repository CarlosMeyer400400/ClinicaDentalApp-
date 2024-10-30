// __mocks__/@react-native-async-storage/async-storage.js
export default {
    getItem: jest.fn(() => {
        return Promise.resolve(null);
    }),
    setItem: jest.fn(() => {
        return Promise.resolve(null);
    }),
    removeItem: jest.fn(() => {
        return Promise.resolve(null);
    }),
    clear: jest.fn(() => {
        return Promise.resolve(null);
    }),
};
