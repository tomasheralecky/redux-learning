/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.jsx', '.ts', '.d.ts', '.tsx'], // Alias resolution
        },
        'import/resolver': { typescript: { extensions: ['.js', '.jsx', '.ts', '.d.ts', '.tsx'] } }, // Alias resolution
        'import/ignore': ['node_modules'],
        react: {
            version: 'detect',
        },
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'prettier',
        'prettier/@typescript-eslint', // overwrites for typescript prettier
        'prettier/react', // overwrites for react prettier
        // This will display prettier errors as ESLint errors.
        // Make sure this is always the last configuration in the extends array.
        'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: path.resolve(__dirname, 'tsconfig.json'),
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: [
        'react', // react support
        '@typescript-eslint', // typescript support
        'import', // Checks import validity
        'jsx-a11y', // Accessability checks
        'sort-imports-es6-autofix', // So we can sort with autofix
    ],
    rules: {
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'import/no-cycle': 'off',
        'import/namespace': 'error',
        'import/named': 'error',
        'sort-imports-es6-autofix/sort-imports-es6': [
            2,
            {
                ignoreCase: false,
                ignoreMemberSort: true,
                memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
            },
        ],
        // Next includes it by defuault
        'react/react-in-jsx-scope': 'off',
        // Because of react components, it would be ambiguous to check the return value of functional components
        '@typescript-eslint/explicit-function-return-type': 'off',
        // '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/require-await': 'error',
        '@typescript-eslint/no-unsafe-return': 'error',
        '@typescript-eslint/no-unsafe-assignment': 'error',
        '@typescript-eslint/no-unsafe-call': 'error',
        '@typescript-eslint/no-unsafe-member-access': 'error',
        '@typescript-eslint/restrict-template-expressions': [
            'warn',
            {
                allowNumber: true,
                allowBoolean: true,
                allowAny: false,
                allowNullish: true,
            },
        ],
        'react/self-closing-comp': 'error',
        'react-hooks/exhaustive-deps': 'off',
        'array-callback-return': 'off',
        'padding-line-between-statements': [
            'error',
            { blankLine: 'always', prev: '*', next: 'block-like' },
            { blankLine: 'always', prev: 'import', next: '*' },
            { blankLine: 'always', prev: 'export', next: '*' },
            { blankLine: 'any', prev: 'import', next: 'import' },
            { blankLine: 'any', prev: 'const', next: '*' },
            { blankLine: 'any', prev: 'let', next: '*' },
            { blankLine: 'any', prev: 'expression', next: '*' },
        ],
        'react/prop-types': 'off',
    },
};
