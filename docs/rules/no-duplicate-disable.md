# disallow duplicate `eslint-disable` comments (eslint-comments/no-duplicate-disable)

- 🌟 The `"extends": "plugin:eslint-comments/recommended"` property in a configuration file enables this rule.

Duplicate of `eslint-disable` directive-comments implies that there is a mix of wide-range directive-comments and narrow-range directive-comments.
The mix may cause to overlook ESLint warnings in future.

This rule warns duplicate `eslint-disable` directive-comments.

## Rule Details

Examples of :-1: **incorrect** code for this rule:

<eslint-playground type="bad" code="/*eslint eslint-comments/no-duplicate-disable: error */

/*eslint-disable no-undef */

var foo = bar() //eslint-disable-line no-undef
" />

Examples of :+1: **correct** code for this rule:

<eslint-playground type="good" code="/*eslint eslint-comments/no-duplicate-disable: error */

/*eslint-disable no-undef */

var foo = bar()
" />

<eslint-playground type="good" code="/*eslint eslint-comments/no-duplicate-disable: error */

var foo = bar() //eslint-disable-line no-undef
" />
