# disallows `eslint-disable` comments without rule names (eslint-comments/no-unlimited-disable)

Disable-comments disable all rules by default. This may cause to overlook some ESLint warnings unintentionally.
So you should specify the rules to disable accurately.

## Rule Details

Examples of **incorrect** code for this rule:

```js
/*eslint eslint-comments/no-unlimited-disable: error */

var foo; //eslint-disable-line
```

Examples of **correct** code for this rule:

```js
/*eslint eslint-comments/no-unlimited-disable: error */

var foo; //eslint-disable-line no-unused-vars
```
