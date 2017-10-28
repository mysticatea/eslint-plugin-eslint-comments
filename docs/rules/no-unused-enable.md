# disallows unused `eslint-enable` comments (eslint-comments/no-unused-enable)

- 🌟 The `"extends": "plugin:eslint-comments/recommended"` property in a configuration file enables this rule.

This rule warns `eslint-enable` directive-comments which have no effect.

## Rule Details

Examples of :-1: **incorrect** code for this rule:

```js
/*eslint eslint-comments/no-unused-enable: error */

/*eslint-disable no-undef */
doSomething()
/*eslint-enable no-undef-init */ "※ 'no-undef-init' rule is re-enabled but it has not been disabled."
```

```js
/*eslint eslint-comments/no-unused-enable: error */

doSomething()
/*eslint-enable */ "※ ESLint rules are re-enabled but those have not been disabled."
```

Examples of :+1: **correct** code for this rule:

```js
/*eslint eslint-comments/no-unused-enable: error */

/*eslint-disable no-undef */
doSomething()
/*eslint-enable no-undef */
```

```js
/*eslint eslint-comments/no-unused-enable: error */

doSomething()
```
