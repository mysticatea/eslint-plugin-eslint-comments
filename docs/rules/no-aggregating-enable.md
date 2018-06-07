# disallow a `eslint-enable` comment for multiple `eslint-disable` comments (eslint-comments/no-aggregating-enable)

- 🌟 The `"extends": "plugin:eslint-comments/recommended"` property in a configuration file enables this rule.

`eslint-enable` directive-comments can enable rules which are disabled by different `eslint-disable` directive-comments.
It can enable a rule unintentionally.

```js
f()
/*eslint-disable no-var */
var a
/*eslint-enable */ "※ Enables both no-undef and no-var."
```

This rule warns `eslint-enable` directive-comments which enable rules for multiple `eslint-disable` directive-comments.

## Rule Details

:-1: Examples of **incorrect** code for this rule:

<eslint-playground type="bad" code="/*eslint eslint-comments/no-aggregating-enable: error*/

/*eslint-disable no-undef */
f()
/*eslint-disable no-var */
var a
/*eslint-enable */
" />

<eslint-playground type="bad" code="/*eslint eslint-comments/no-aggregating-enable: error*/

/*eslint-disable no-undef */
f()
/*eslint-disable no-var */
var a
/*eslint-enable no-undef, no-var */
" />

:+1: Examples of **correct** code for this rule:

<eslint-playground type="good" code="/*eslint eslint-comments/no-aggregating-enable: error*/

/*eslint-disable no-undef */
f()
/*eslint-disable no-var */
var a
/*eslint-enable no-var */

/*eslint-enable no-undef */
" />
