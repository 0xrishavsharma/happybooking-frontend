module.exports = {
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(scss)$': '<rootDir>/_mocks/styleMock.js',
    '\\.(css)$': '<rootDir>/_mocks/styleMock.js',
    '\\.(svg)$': '<rootDir>/_mocks/fileMock.js',
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  transformIgnorePatterns: [
    '/node_modules/(?!axios|date-fns/esm)',
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
