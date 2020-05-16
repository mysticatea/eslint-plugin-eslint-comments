# Getting Started

[![npm version](https://img.shields.io/npm/v/eslint-plugin-eslint-comments.svg)](https://www.npmjs.com/package/eslint-plugin-eslint-comments)
[![Downloads/month](https://img.shields.io/npm/dm/eslint-plugin-eslint-comments.svg)](http://www.npmtrends.com/eslint-plugin-eslint-comments)
[![Build Status](https://github.com/mysticatea/eslint-plugin-eslint-comments/workflows/CI/badge.svg)](https://github.com/mysticatea/eslint-plugin-eslint-comments/actions)
[![codecov](https://codecov.io/gh/mysticatea/eslint-plugin-eslint-comments/branch/master/graph/badge.svg)](https://codecov.io/gh/mysticatea/eslint-plugin-eslint-comments)
[![Dependency Status](https://david-dm.org/mysticatea/eslint-plugin-eslint-comments.svg)](https://david-dm.org/mysticatea/eslint-plugin-eslint-comments)

Additional ESLint rules for ESLint directive comments (e.g. `//eslint-disable-line`).

## 🏁 Goal

The purpose of this plugin is to apply best practices on directive comments such as `/* eslint-disable */`.

For example,

- to disallow unused disabling.
- to disallow non-effect enabling.
- to require rule IDs for disabling and enabling.

## 💿 Installation

Use [npm](https://www.npmjs.com/) or a compatible tool.

```console
npm install --save-dev eslint eslint-plugin-eslint-comments
```

::: tip Requirements
- Node.js `6.5.0` or newer.
- ESLint `4.19.1` or newer.
:::

## 📖 Usage

Configure your `.eslintrc.*` file.

For example:

```jsonc
{
    "extends": [
        "eslint:recommended",
        "plugin:eslint-comments/recommended"
    ],
    "rules": {
        // Optional.
        "eslint-comments/no-unused-disable": "error"
    }
}
```

::: tip
The [eslint-comments/no-unused-disable](./rules/no-unused-disable.html) rule has the same effect as [--report-unused-disable-directives](https://eslint.org/docs/user-guide/command-line-interface#--report-unused-disable-directives) option.
However, the `eslint-comments/no-unused-disable` rule is relatively useful since it can be configured in shareable configs.
:::
