module.exports = [
  {
      rules: {
        files: ["**/*.js", "**/*.cjs", "**/*.mjs"],
          semi: "error",
          "no-constant-binary-expression": "error",
          "prefer-const": "error"
      }
  }
];
// export default [
//   {
//       files: ["**/*.js", "**/*.cjs", "**/*.mjs"],
//       rules: {
//           "prefer-const": "warn",
//           "no-constant-binary-expression": "error"
//       }
//   }
// ];