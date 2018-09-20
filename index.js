module.exports = {
  configs: {
    recommended: {
      plugins: ["@furugomu"],
      extends: ["eslint:recommended", "plugin:prettier/recommended"],
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module"
      }
    },
    "+react": {
      extends: ["plugin:react/recommended"],
      overrides: [
        {
          files: ["*.jsx"],
          parserOptions: { ecmaFeatures: { jsx: true } },
          plugins: ["react"]
        }
      ]
    },
    "+ts": {
      overrides: [
        {
          files: ["*.ts"],
          parser: "typescript-eslint-parser",
          parserOptions: {
            sourceType: "module"
          },
          plugins: ["typescript"]
        }
      ]
    },
    "+tsx": {
      extends: ["plugin:@furugomu/+ts", "plugin:react/recommended"],
      overrides: [
        {
          files: ["*.tsx"],
          parser: "typescript-eslint-parser",
          parserOptions: {
            ecmaFeatures: { jsx: true },
            sourceType: "module"
          },
          plugins: ["react", "typescript"],
          rules: {
            "react/prop-types": "off"
          }
        }
      ]
    },
    "+vue": {
      plugins: ["vue"],
      extends: ["plugin:vue/recommended"],
      overrides: [
        {
          files: ["*.vue"],
          parser: "vue-eslint-parser",
          parserOptions: {
            sourceType: "module",
            parser: "typescript-eslint-parser"
          }
        }
      ]
    }
  }
};
