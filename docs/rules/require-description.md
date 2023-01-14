# eslint-comments/require-description

> require include descriptions in ESLint directive-comments

This rule warns directive comments without description.

:::warning
This rule can only be used with ESLint v7.x or later.
:::

## Rule Details

Examples of :-1: **incorrect** code for this rule:

<eslint-playground type="bad" code="/*eslint eslint-comments/require-description: error */

/* eslint no-undef: off */
/* eslint-env browser */
/* eslint-disable eqeqeq */
/* eslint-enable eqeqeq */
// eslint-disable-line
// eslint-disable-next-line
/* exported foo */
/* global $ */
/* globals a, b, c */
" />

Examples of :+1: **correct** code for this rule:

<eslint-playground type="good" code="/*eslint eslint-comments/require-description: error -- If you use directive comments, you should explain why you use them. */

/* eslint no-undef: off -- Here's a description about why this directive-comment is necessary. */
/* eslint-env browser -- This script works in browser. */
// eslint-disable-next-line -- Temporarily avoids the lint error problem. See issue XXX.
/* global $ -- This script using jQuery. */
" />

## Options

You can specify ignored directive-comments.

```json
{
    "eslint-comments/require-description": ["error", {"ignore": []}]
}
```

- `ignore` option is an array to ignore specified directive-comments. The value of the array is some of the following strings:
    - `"eslint"`
    - `"eslint-disable"`
    - `"eslint-disable-line"`
    - `"eslint-disable-next-line"`
    - `"eslint-enable"`
    - `"eslint-env"`
    - `"exported"`
    - `"global"`
    - `"globals"`

## Further Reading

- [ESLint RFCs - Description in directive comments]

[ESLint RFCs - Description in directive comments]: https://github.com/eslint/rfcs/blob/main/designs/2019-description-in-directive-comments/README.md
