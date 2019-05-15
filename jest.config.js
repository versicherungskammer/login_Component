module.exports = {
  verbose: true,
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'vue',
    'ts',
    'tsx'
  ],
  transform: {
      '^.+\\.js$':  'babel-jest',
      '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  snapshotSerializers: [
    'jest-serializer-vue'
  ],

"transformIgnorePatterns": [
        "/node_modules/(?!@material).+\\.js$"
        ],



  testMatch: [
    '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'
  ],
  testURL: 'http://localhost/',
  globals: {
    'ts-jest': {
      babelConfig: true
    },
    MutationObserver: class {
    constructor(callback) {}
        disconnect() {}
            observe(element, initObject) {}
            }
    }
}
