# eslint-plugin-eslint-comments

[![npm version](https://img.shields.io/npm/v/eslint-plugin-eslint-comments.svg)](https://www.npmjs.com/package/eslint-plugin-eslint-comments)
[![Downloads/month](https://img.shields.io/npm/dm/eslint-plugin-eslint-comments.svg)](http://www.npmtrends.com/eslint-plugin-eslint-comments)
[![Build Status](https://travis-ci.org/mysticatea/eslint-plugin-eslint-comments.svg?branch=master)](https://travis-ci.org/mysticatea/eslint-plugin-eslint-comments)
[![codecov](https://codecov.io/gh/mysticatea/eslint-plugin-eslint-comments/branch/master/graph/badge.svg)](https://codecov.io/gh/mysticatea/eslint-plugin-eslint-comments)
[![Dependency Status](https://david-dm.org/mysticatea/eslint-plugin-eslint-comments.svg)](https://david-dm.org/mysticatea/eslint-plugin-eslint-comments)

Additional ESLint rules for ESLint's directive-comments (e.g. `//eslint-disable-line`).

## :cd: Installation

```
npm install --save-dev eslint eslint-plugin-eslint-comments
```

### Requirements

- Node.js `^4.0.0`, `^6.0.0`, or newer.
- ESLint `^3.1.0`, or newer.

## :book: Usage

Write in your ESLint configurations: http://eslint.org/docs/user-guide/configuring#using-the-configuration-from-a-plugin

### Example

**.eslintrc.json**

```json
{
    "plugins": [
        "eslint-comments"
    ],
    "rules": {
        "eslint-comments/disable-enable-pair": "error",
        "eslint-comments/no-duplicate-disable": "error",
        "eslint-comments/no-unlimited-disable": "error",
        "eslint-comments/no-unused-disable": "error",
        "eslint-comments/no-unused-enable": "error",
        "eslint-comments/no-use": "error",
    }
}
```

### Rules

- [eslint-comments/disable-enable-pair](docs/rules/disable-enable-pair.md) requires a `eslint-enable` comment for every `eslint-disable` comment.
- [eslint-comments/no-duplicate-disable](docs/rules/no-duplicate-disable.md) disallows duplicate `eslint-disable` comments.
- [eslint-comments/no-unlimited-disable](docs/rules/no-unlimited-disable.md) disallows `eslint-disable` comments without rule names.
- [eslint-comments/no-unused-disable](docs/rules/no-unused-disable.md) disallows unused `eslint-disable` comments.
- [eslint-comments/no-unused-enable](docs/rules/no-unused-enable.md) disallows unused `eslint-enable` comments.
- [eslint-comments/no-use](docs/rules/no-use.md) disallows ESLint directive-comments.

## :anchor: Semantic Versioning Policy

`eslint-plugin-eslint-comments` follows [semantic versioning](http://semver.org/) and [ESLint's Semantic Versioning Policy](https://github.com/eslint/eslint#semantic-versioning-policy).

- Patch release (intended to not break your lint build)
    - A bug fix in a rule that results in `eslint-plugin-eslint-comments` reporting fewer errors.
    - Improvements to documentation.
    - Non-user-facing changes such as refactoring code, adding, deleting, or modifying tests, and increasing test coverage.
    - Re-releasing after a failed release (i.e., publishing a release that doesn't work for anyone).
- Minor release (might break your lint build)
    - A bug fix in a rule that results in `eslint-plugin-eslint-comments` reporting more errors.
    - A new rule is created.
    - A new option to an existing rule is created.
    - An existing rule is deprecated.
- Major release (likely to break your lint build)
    - A support for old Node version is dropped.
    - A support for old ESLint version is dropped.
    - An existing rule is removed.
    - An existing option of a rule is removed.
    - An existing config is updated.

## :newspaper: Changelog

- [GitHub Releases](https://github.com/mysticatea/eslint-plugin-eslint-comments/releases)

## :muscle: Contributing

Welcome contributing!

Please use GitHub's Issues/PRs.

### Development Tools

- `npm test` runs tests and measures coverage.
- `npm run watch` runs tests and measures coverage when source code are changed.
- `npm run coverage` shows the coverage result of `npm test` command.
- `npm run clean` removes the coverage result of `npm test` command.
