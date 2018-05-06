# disallows unused `eslint-disable` comments (eslint-comments/no-unused-disable)

Since refactoring or a bug fix of upstream, an `eslint-disable` directive-comment may become unnecessary.
In that case, you should remove the garbage as soon as possible since the garbage may cause to overlook ESLint warnings in future.

This rule warns unnecessary `eslint-disable` directive-comments.

## Rule Details

Examples of :-1: **incorrect** code for this rule:

```js
/*eslint eslint-comments/no-unused-disable: error */

var foo = bar() //eslint-disable-line no-undef,eqeqeq
                  "※ 'eqeqeq' rule is disabled but never reported."
```

```js
/*eslint eslint-comments/no-unused-disable: error */
/*globals doSomething */

doSomething() //eslint-disable-line
                "※ ESLint rules are disabled but never reported."
```

Examples of :+1: **correct** code for this rule:

```js
/*eslint eslint-comments/no-unused-disable: error */

var foo = bar() //eslint-disable-line no-undef
```

```js
/*eslint eslint-comments/no-unused-disable: error */
/*globals doSomething */

doSomething()
```
