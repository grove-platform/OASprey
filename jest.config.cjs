module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^oasprey$': '<rootDir>/src/oasprey',
  },
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: 'tsconfig.json' }],
  },
  testMatch: ['<rootDir>/tests/**/*.test.ts'],
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
};
