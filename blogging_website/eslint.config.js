// eslint.config.js

import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import testingLibrary from 'eslint-plugin-testing-library'

export default [
  {
    ignores: ['dist', 'node_modules'],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.jest, // 🧪 Jest ke test, expect etc.
        React: 'writable', // JSX ke liye global React
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'testing-library': testingLibrary,
    },
    rules: {
      // ✅ Recommended rules
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,

      // ✅ Custom rules
      'no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: true,
          varsIgnorePattern:
            '^use(State|Effect|Ref)$|^motion$|^Routes$|^Route$|^Link$|^render$|^screen$|^test$|^expect$',
        },
      ],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // ✅ Testing library rules (optional)
      'testing-library/no-debugging-utils': 'warn',
      'testing-library/no-dom-import': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
]












// // eslint.config.js

// import js from '@eslint/js'
// import globals from 'globals'
// import react from 'eslint-plugin-react'
// import reactHooks from 'eslint-plugin-react-hooks'
// import reactRefresh from 'eslint-plugin-react-refresh'

// export default [
//   {
//     ignores: ['dist', 'node_modules'],
//   },
//   {
//     files: ['**/*.{js,jsx,ts,tsx}'],
//     languageOptions: {
//       ecmaVersion: 2020,
//       sourceType: 'module',
//       globals: {
//         ...globals.browser,
//         React: 'writable', // React ko global allow karo
//       },
//       parserOptions: {
//         ecmaFeatures: {
//           jsx: true,
//         },
//       },
//     },
//     plugins: {
//       react,
//       'react-hooks': reactHooks,
//       'react-refresh': reactRefresh,
//     },
//     rules: {
//       ...js.configs.recommended.rules,
//       ...react.configs.recommended.rules,
//       ...reactHooks.configs.recommended.rules,
//       'no-unused-vars': [
//         'error',
//         {
//           vars: 'all',
//           args: 'after-used',
//           ignoreRestSiblings: true,
//           varsIgnorePattern:
//             '^use(State|Effect|Ref)$|^motion$|^Routes$|^Route$|^Link$',
//         },
//       ],
//       'react-refresh/only-export-components': [
//         'warn',
//         { allowConstantExport: true },
//       ],
//     },
//     settings: {
//       react: {
//         version: 'detect',
//       },
//     },
//   },
// ]











// // import js from '@eslint/js'
// // import globals from 'globals'
// // import reactHooks from 'eslint-plugin-react-hooks'
// // import reactRefresh from 'eslint-plugin-react-refresh'

// // export default [
// //   { ignores: ['dist'] },
// //   {
// //     files: ['**/*.{js,jsx}'],
// //     languageOptions: {
// //       ecmaVersion: 2020,
// //       globals: globals.browser,
// //       parserOptions: {
// //         ecmaVersion: 'latest',
// //         ecmaFeatures: { jsx: true },
// //         sourceType: 'module',
// //       },
// //     },
// //     plugins: {
// //       'react-hooks': reactHooks,
// //       'react-refresh': reactRefresh,
// //     },
// //     rules: {
// //       ...js.configs.recommended.rules,
// //       ...reactHooks.configs.recommended.rules,
// //       'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
// //       'react-refresh/only-export-components': [
// //         'warn',
// //         { allowConstantExport: true },
// //       ],
// //     },
// //   },
// // ]
