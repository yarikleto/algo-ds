module.exports = {
  roots: [
    "<rootDir>/src"
  ],
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  globals: {
    "ts-jest": {
      diagnostics: false,
      ignoreCodes: ['TS2531', 2531, 'TS7005', 7005]
    }
  },
  coverageReporters: [
    "json-summary", 
    "text",
    "lcov"
  ]
}