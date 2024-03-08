export default [
  {
    files: ["src/**/*.js"],
    ignores: ["src/Person.js"],
    rules: {
      semi: "error",
      "prefer-const": "error",
      "require-await": "error",
    },
  },
];
