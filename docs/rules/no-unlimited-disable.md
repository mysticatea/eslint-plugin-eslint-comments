# @eslint-community/eslint-comments/no-unlimited-disable

> disallow `eslint-disable` comments without rule names

- 🌟 The `"extends": "plugin:@eslint-community/eslint-comments/recommended"` property in a configuration file enables this rule.

`eslint-disable` directive-comments disable all rules by default. This may cause to overlook some ESLint warnings unintentionally.
So you should specify the rules to disable accurately.

## Rule Details

Examples of :-1: **incorrect** code for this rule:

<eslint-playground type="bad" code="/*eslint @eslint-community/eslint-comments/no-unlimited-disable: error */

var foo; //eslint-disable-line
" />

Examples of :+1: **correct** code for this rule:

<eslint-playground type="good" code="/*eslint @eslint-community/eslint-comments/no-unlimited-disable: error */

var foo; //eslint-disable-line no-unused-vars
" />
