# Getting Started

## 💿 Installation

Use [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/).

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

```json
{
    "extends": [
        "eslint:recommended",
        "plugin:eslint-comments/recommended"
    ],
    "rules": {
        "eslint-comments/no-unused-disable": "error"
    }
}
```

::: tip
The [eslint-comments/no-unused-disable](./rules/no-unused-disable.html) rule has the same effect as [--report-unused-disable-directives](https://eslint.org/docs/user-guide/command-line-interface#--report-unused-disable-directives) option.
However, the `eslint-comments/no-unused-disable` rule is relatively useful since it can be configured in shareable configs.
:::
