module.exports = {
    preset: 'react-native',
    setupFilesAfterEnv: [
        '@testing-library/jest-native/extend-expect',
        '<rootDir>/jest.setup.js'
    ],
    transformIgnorePatterns: [
        'node_modules/(?!(react-native|@react-native|@react-navigation|expo-linear-gradient|expo-modules-core|expo|@expo|@unimodules|react-native-gesture-handler|@stripe|react-native-vector-icons|@react-native-community/datetimepicker)/)',
    ],
    moduleNameMapper: {
        '^@react-native-async-storage/async-storage$': '<rootDir>/__mocks__/@react-native-async-storage/async-storage.js',
    },
};
