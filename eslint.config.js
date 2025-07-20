import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
// globalIgnores is no longer needed if using 'ignores' property directly in the config object

export default tseslint.config([
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended, // Spread operator for flat config arrays
      ...reactHooks.configs.recommended, // Corrected config name and spread operator
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
  {
    // Define global ignores directly in a config object
    ignores: ['dist', 'node_modules'], // Added node_modules as common ignore
  }
])