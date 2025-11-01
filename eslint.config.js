import js from '@eslint/js'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsparser from '@typescript-eslint/parser'
import prettierConfig from 'eslint-config-prettier'
import importPlugin from 'eslint-plugin-import'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import prettier from 'eslint-plugin-prettier'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'

export default [
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        languageOptions: {
            parser: tsparser,
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.es2020,
            },
        },
        plugins: {
            react,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            'jsx-a11y': jsxA11y,
            import: importPlugin,
            prettier,
            '@typescript-eslint': tseslint,
        },
        settings: {
            react: {
                version: 'detect',
            },
            'import/resolver': {
                node: true,
            },
            'import/ignore': [
                '/vite.svg', // Vite public assets
            ],
        },
        rules: {
            // Base recommended rules
            ...js.configs.recommended.rules,
            ...react.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,
            ...jsxA11y.configs.recommended.rules,
            ...importPlugin.configs.recommended.rules,
            ...tseslint.configs.recommended.rules,

            // Prettier integration
            'prettier/prettier': 'error',

            // React specific rules
            'react/react-in-jsx-scope': 'off', // Not needed in React 17+
            'react/prop-types': 'off', // Using TypeScript for prop validation
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],

            // Import rules
            'import/order': [
                'error',
                {
                    groups: [
                        'builtin',
                        'external',
                        'internal',
                        'parent',
                        'sibling',
                        'index',
                    ],
                    'newlines-between': 'always',
                    alphabetize: { order: 'asc', caseInsensitive: true },
                },
            ],
            'import/no-unused-modules': 'warn',
            'import/no-duplicates': 'error',
            'import/no-unresolved': [
                'error',
                {
                    ignore: ['/.*', '@vitejs/.*', 'react-router-dom', '@/.*'], // Ignore Vite public assets, plugins, react-router-dom, and @ aliases
                },
            ],

            // General best practices
            'no-console': 'warn',
            'no-debugger': 'error',
            'no-alert': 'error',
            'prefer-const': 'error',
            'no-var': 'error',
            'object-shorthand': 'error',
            'prefer-template': 'error',
            'no-unused-vars': [
                'error',
                { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
            ],

            // Accessibility rules
            'jsx-a11y/alt-text': 'error',
            'jsx-a11y/aria-props': 'error',
            'jsx-a11y/aria-proptypes': 'error',
        },
    },
    {
        ignores: ['dist/**', 'eslint.config.js', 'vite.config.js'],
    },
    // Apply prettier config last to override other configs
    prettierConfig,
]
