module.exports = {
  verbose: true,
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  testEnvironment: 'jsdom',
  collectCoverageFrom: ['components/**/*.js'],
}
