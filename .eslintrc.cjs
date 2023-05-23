/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    root: true,
    plugins: ['prettier'],
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-prettier',
        'plugin:prettier/recommended',
    ],
    rules: {
        'vue/multi-word-component-names': 'off',
        'prettier/prettier': 'off',
    },
};
