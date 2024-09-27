module.exports = {
  testEnvironment: 'jsdom', // Simulates a browser environment for React components
  transform: {
    '^.+\\.jsx?$': 'babel-jest', // Uses Babel to transform JavaScript and JSX files
  },
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy', // Mocks CSS imports for testing
  },
};
