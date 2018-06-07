# require a `eslint-enable` comment for every `eslint-disable` comment (eslint-comments/disable-enable-pair)

- 🌟 The `"extends": "plugin:eslint-comments/recommended"` property in a configuration file enables this rule.

`eslint-disable` directive-comments disable ESLint rules in all lines preceded by the comment.
If you forget `eslint-enable` directive-comment, you may overlook ESLint warnings unintentionally.

This rule warns `eslint-disable` directive-comments if the `eslint-enable` directive-comment for that does not exist.

## Rule Details

Examples of :-1: **incorrect** code for this rule:

<eslint-playground type="bad" code="/*eslint eslint-comments/disable-enable-pair: error */

/*eslint-disable no-undef, no-unused-vars */
var foo = bar()
" />

<eslint-playground type="bad" code="/*eslint eslint-comments/disable-enable-pair: error */

/*eslint-disable no-undef, no-unused-vars */
var foo = bar()
/*eslint-enable no-unused-vars */
" />

Examples of :+1: **correct** code for this rule:

<eslint-playground type="good" code="/*eslint eslint-comments/disable-enable-pair: error */

/*eslint-disable no-undef, no-unused-vars */
var foo = bar()
/*eslint-enable no-undef, no-unused-vars */
" />

<eslint-playground type="good" code="/*eslint eslint-comments/disable-enable-pair: error */

/*eslint-disable no-undef, no-unused-vars */
var foo = bar()
/*eslint-enable*/
" />

## Options

The `allowWholeFile` option lets you allow disabling rules for the entire file while still catching "open" `eslint-disable` directives in the middle of a file.

```json
{
    "eslint-comments/disable-enable-pair": ["error", {"allowWholeFile": true}]
}
```

Examples of :-1: **incorrect** code for this rule:

<eslint-playground type="bad" code="/*eslint eslint-comments/disable-enable-pair: [error, {allowWholeFile: true}] */

/*eslint-disable no-undef */
var foo = bar()
/*eslint-disable no-unused-vars */
var fizz = buzz()
" />

Examples of :+1: **correct** code for this rule:

<eslint-playground type="good" code="/*eslint eslint-comments/disable-enable-pair: [error, {allowWholeFile: true}] */

/*eslint-disable no-undef */
var foo = bar()
/*eslint-disable no-unused-vars */
var fizz = buzz()
/*eslint-enable no-unused-vars */
" />
