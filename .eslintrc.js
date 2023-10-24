module.exports = {
    // parser: "babel-eslint",
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:jsx-a11y/recommended",
    ],
    plugins: ["react", "jsx-a11y"],
    rules: {
      // Add or modify rules as needed
      "jsx-a11y/anchor-is-valid": "off", // Example rule to disable anchor-is-valid warning
      "no-unused-vars": "off", // Example rule to disable unused variables warning
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  };
  