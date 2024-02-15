export default {
    moduleNameMapper: {
      "\\.(css|scss)$": "<rootDir>/__mocks__/style.js",
    },
	setupFilesAfterEnv: [
		"<rootDir>/setup-jest.js",
	],
	testEnvironment: "jsdom",
}
