module.exports = {
  bail: true,
  roots: ["<rootDir>/src"],
  clearMocks: true,
  testEnvironment: "jsdom",
  coverageDirectory: "coverage",
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
  transform: {
    ".+\\.(ts|tsx)$": "ts-jest",
  },
};
