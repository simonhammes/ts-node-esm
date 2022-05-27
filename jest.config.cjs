/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    extensionsToTreatAsEsm: ['.ts'],
    moduleNameMapper: {
        // https://github.com/swc-project/jest/issues/64#issuecomment-1029753225
        '^(\\.{1,2}/.*)\\.js$': '$1',
    },
    testEnvironment: 'node',
    transform: {
        // https://swc.rs/docs/usage/jest
        '^.+\\.(t|j)sx?$': '@swc/jest',
    },
};
