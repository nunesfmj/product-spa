/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    roots: ['<rootDir>/tests'],
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    transformIgnorePatterns: [
        '/node_modules/(?!uuid)/',
    ],
    transform: {
        '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest',
    },
    testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
    globals: {
        'ts-jest': {
            isolatedModules: true
        }
    }
};
