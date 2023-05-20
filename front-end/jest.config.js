module.exports = {
  testMatch: ['**/__tests__/**/index.js'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  testEnvironment: 'jsdom',
};
