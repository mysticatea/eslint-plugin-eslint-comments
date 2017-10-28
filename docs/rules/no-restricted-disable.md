# disallows `eslint-disable` comments about specific rules (eslint-comments/no-restricted-disable)

This rule warns `eslint-disable` directive-comments if the comment disable specific rules.

## Rule Details

:-1: Examples of **incorrect** code for `["no-undef", "no-unused-vars"]`:

```js
/*eslint no-restricted-disable: ["error", "no-undef", "no-unused-vars"]*/

/*eslint-disable no-undef */
f()
```

```js
/*eslint no-restricted-disable: ["error", "no-undef", "no-unused-vars"]*/

f() //eslint-disable-line no-undef
```

```js
/*eslint no-restricted-disable: ["error", "no-undef", "no-unused-vars"]*/

f() //eslint-disable-line
```

:+1: Examples of **correct** code for this rule:

```js
/*eslint no-restricted-disable: ["error", "no-undef", "no-unused-vars"]*/

f() //eslint-disable-line another-rule
```

## Options

```json
{
    "no-restricted-disable": ["error", ...]
}
```

This rule takes a list of strings, where each string is a glob pattern. For example:

```json
{
    "no-restricted-disable": [
        "error",
        "no-undef",
        "*semi*", // rules which includes `semi`. E.g. `semi`, `semi-style`, `no-extra-semi`, ...
        "react/*" // rules of `eslint-plugin-react`
    ]
}
```

```json
{
    "no-restricted-disable": [
        "error",
        "*",          // any rules
        "!no-console" // but except `no-console`.
    ]
}
```
