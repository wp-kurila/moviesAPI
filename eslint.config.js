// import js from '@eslint/js';
// import globals from 'globals';
// import reactHooks from 'eslint-plugin-react-hooks';
// import reactRefresh from 'eslint-plugin-react-refresh';
// import tseslint from 'typescript-eslint';
// import prettier from 'eslint-plugin-prettier';
// import eslintConfigPrettier from 'eslint-config-prettier';

// export default tseslint.config(
// 	{ ignores: ['dist'] },
// 	{
// 		extends: [
// 			js.configs.recommended,
// 			...tseslint.configs.recommended,
// 			'plugin:prettier/recommended',
// 			'eslint-config-prettier',
// 		],
// 		files: ['**/*.{ts,tsx}'],
// 		languageOptions: {
// 			ecmaVersion: 2020,
// 			globals: globals.browser,
// 		},
// 		plugins: {
// 			'react-hooks': reactHooks,
// 			'react-refresh': reactRefresh,
// 			prettier: prettier,
// 		},
// 		rules: {
// 			'prettier/prettier': 'warn',
// 			...reactHooks.configs.recommended.rules,
// 			'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
// 			semi: 'off',
// 			'@/semi': ['warn'],
// 		},
// 	}
// );

import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettier from 'eslint-plugin-prettier';

export default [
	js.configs.recommended,
	...tseslint.configs.recommended,
	eslintConfigPrettier,

	{
		files: ['**/*.{ts,tsx}'],
		ignores: ['dist'],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
			parser: tsParser,
		},
		plugins: {
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
			prettier,
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			semi: 'off',
			'@typescript-eslint/semi': ['warn'],
		},
	},
];
