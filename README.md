# eslint-plugin-eslint-comments

[![npm version](https://img.shields.io/npm/v/eslint-plugin-eslint-comments.svg)](https://www.npmjs.com/package/eslint-plugin-eslint-comments)
[![Downloads/month](https://img.shields.io/npm/dm/eslint-plugin-eslint-comments.svg)](http://www.npmtrends.com/eslint-plugin-eslint-comments)
[![Build Status](https://travis-ci.org/mysticatea/eslint-plugin-eslint-comments.svg?branch=master)](https://travis-ci.org/mysticatea/eslint-plugin-eslint-comments)
[![codecov](https://codecov.io/gh/mysticatea/eslint-plugin-eslint-comments/branch/master/graph/badge.svg)](https://codecov.io/gh/mysticatea/eslint-plugin-eslint-comments)
[![Dependency Status](https://david-dm.org/mysticatea/eslint-plugin-eslint-comments.svg)](https://david-dm.org/mysticatea/eslint-plugin-eslint-comments)

Additional ESLint rules for ESLint's directive-comments (e.g. `//eslint-disable-line`).

## 💿 Installation

```
npm install --save-dev eslint eslint-plugin-eslint-comments
```

### Requirements

- Node.js `^4.0.0`, `^6.0.0`, or newer.
- ESLint `^4.7.0`, or newer.

## 📖 Usage

Write in your ESLint configurations: http://eslint.org/docs/user-guide/configuring#using-the-configuration-from-a-plugin

### Example

**.eslintrc.json**

```json
{
    "extends": [
        "eslint:recommended",
        "plugin:eslint-comments/recommended"
    ],
}
```

Or you can specify for each rule:

```json
{
    "plugins": [
        "eslint-comments"
    ],
    "rules": {
        "eslint-comments/no-unused-disable": "error",
        "eslint-comments/no-unused-enable": "error",
        // ...
    }
}
```

## Rules

- 🌟 mark: the rule is enabled by `eslint-comments/recommended` preset.
- ✒️ mark: the rule is fixable by `eslint --fix` command.

<!--RULES_TABLE_START-->
### Best Practices

|    | Rule ID | Description |
|:---|:--------|:------------|
| 🌟 | [eslint-comments/disable-enable-pair](./docs/rules/disable-enable-pair.md) | requires a `eslint-enable` comment for every `eslint-disable` comment |
| 🌟 | [eslint-comments/no-aggregating-enable](./docs/rules/no-aggregating-enable.md) | disallows `eslint-enable` comments for multiple `eslint-disable` comments |
| 🌟 | [eslint-comments/no-duplicate-disable](./docs/rules/no-duplicate-disable.md) | disallows duplicate `eslint-disable` comments |
| 🌟 | [eslint-comments/no-unlimited-disable](./docs/rules/no-unlimited-disable.md) | disallows `eslint-disable` comments without rule names |
| 🌟 | [eslint-comments/no-unused-disable](./docs/rules/no-unused-disable.md) | disallows unused `eslint-disable` comments |
| 🌟 | [eslint-comments/no-unused-enable](./docs/rules/no-unused-enable.md) | disallows unused `eslint-enable` comments |

### Stylistic Issues

|    | Rule ID | Description |
|:---|:--------|:------------|
|  | [eslint-comments/no-restricted-disable](./docs/rules/no-restricted-disable.md) | disallows `eslint-disable` comments about specific rules |
|  | [eslint-comments/no-use](./docs/rules/no-use.md) | disallows ESLint directive-comments |

<!--RULES_TABLE_END-->

## 🚥 Semantic Versioning Policy

`eslint-plugin-eslint-comments` follows [semantic versioning](http://semver.org/) and [ESLint's Semantic Versioning Policy](https://github.com/eslint/eslint#semantic-versioning-policy).

## 📰 Changelog

- [GitHub Releases](https://github.com/mysticatea/eslint-plugin-eslint-comments/releases)

## 🍻 Contributing

Welcome contributing!

Please use GitHub's Issues/PRs.

### Development Tools

- `npm test` runs tests and measures coverage.
- `npm run build` updates `README.md`, `index.js`, and the header of all rule's documents.
- `npm run clean` removes the coverage of the last `npm test` command.
- `npm run coverage` shows the coverage of the last `npm test` command.
- `npm run lint` runs ESLint for this codebase.
- `npm run watch` runs tests and measures coverage when source code are changed.
