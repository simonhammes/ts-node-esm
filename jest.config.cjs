/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    extensionsToTreatAsEsm: ['.ts'],
    globals: {
        'ts-jest': {
            useESM: true,
        },
    },
    // https://github.com/kulshekhar/ts-jest/issues/1057#issuecomment-1068342692
    moduleNameMapper: {
        "(.+)\\.js": "$1"
    },
    preset: 'ts-jest/presets/default-esm',
    testEnvironment: 'node',
    // https://github.com/kulshekhar/ts-jest/issues/1057#issuecomment-1068342692
/*    transform: {
        "\\.[jt]sx?$": "ts-jest",
    },*/
};
