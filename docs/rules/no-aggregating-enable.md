# disallows `eslint-enable` comments for multiple `eslint-disable` comments (no-aggregating-enable)

`eslint-enable` directive-comments can enable rules which are disabled by different `eslint-disable` directive-comments.
It can enable a rule unintentionally.

```js
/*eslint-disable no-undef */
f()
/*eslint-disable no-var */
var a
/*eslint-enable */ "※ Enables both no-undef and no-var."
```

This rule warns `eslint-enable` directive-comments which enable rules for multiple `eslint-disable` directive-comments.

## Rule Details

:-1: Examples of **incorrect** code for this rule:

```js
/*eslint no-aggregating-enable: "error"*/

/*eslint-disable no-undef */
f()
/*eslint-disable no-var */
var a
/*eslint-enable */ "ERROR: This `eslint-enable` comment affects 2 `eslint-disable` comments. An `eslint-enable` comment should be for an `eslint-disable` comment."
```

```js
/*eslint no-aggregating-enable: "error"*/

/*eslint-disable no-undef */
f()
/*eslint-disable no-var */
var a
/*eslint-enable no-undef, no-var */ "ERROR: This `eslint-enable` comment affects 2 `eslint-disable` comments. An `eslint-enable` comment should be for an `eslint-disable` comment."
```

:+1: Examples of **correct** code for this rule:

```js
/*eslint no-aggregating-enable: "error"*/

/*eslint-disable no-undef */
f()
/*eslint-disable no-var */
var a
/*eslint-enable no-var */

/*eslint-enable no-undef */
```
