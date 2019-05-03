module.exports = {
  verbose: true,
  transform: {
    "^.+\\.js$": "babel-jest"
  },
  testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)(spec|test).js?(x)"],
  coverageReporters: ["html", "text-summary", "lcov"],
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/**/*.js"]
};
