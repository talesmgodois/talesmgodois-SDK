// Unit and integration test configuration
module.exports = {
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
    rootDir: '.',
    collectCoverage: true,
    testMatch: [
        '**/*.test.js',
        '**/*.test.ts',
        '!**/*.int.test.js',
        '!**/*.int.test.ts',
    ],
    moduleFileExtensions: ['ts', 'js'],
    testResultsProcessor: 'jest-sonar-reporter',
};