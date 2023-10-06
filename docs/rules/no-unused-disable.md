# @eslint-community/eslint-comments/no-unused-disable

> disallow unused `eslint-disable` comments

Since refactoring or a bug fix of upstream, an `eslint-disable` directive-comment may become unnecessary.
In that case, you should remove the garbage as soon as possible since the garbage may cause to overlook ESLint warnings in future.

This rule warns unnecessary `eslint-disable` directive-comments.

## Rule Details

Examples of :-1: **incorrect** code for this rule:

<eslint-playground type="bad" reportUnusedDisable >

```js
/*eslint @eslint-community/eslint-comments/no-unused-disable: error, eqeqeq: error, no-undef: error */

var foo = bar() //eslint-disable-line no-undef,eqeqeq
```

</eslint-playground>

<eslint-playground type="bad" reportUnusedDisable >

```js
/*eslint @eslint-community/eslint-comments/no-unused-disable: error, eqeqeq: error, no-undef: error */
/*globals doSomething */

doSomething() //eslint-disable-line
```

</eslint-playground>

Examples of :+1: **correct** code for this rule:

<eslint-playground type="good" reportUnusedDisable >

```js
/*eslint @eslint-community/eslint-comments/no-unused-disable: error, eqeqeq: error, no-undef: error */

var foo = bar() //eslint-disable-line no-undef
```

</eslint-playground>

<eslint-playground type="good" reportUnusedDisable >

```js
/*eslint @eslint-community/eslint-comments/no-unused-disable: error, eqeqeq: error, no-undef: error */
/*globals doSomething */

doSomething()
```

</eslint-playground>

## Known limitations

This rule might not work fine if the rule wasn't loaded from [CLIEngine](https://eslint.org/docs/developer-guide/nodejs-api#cliengine) class because this rule is hacky a bit.

Previously, this rule had depended on a private API of ESLint, but the private API was removed at ESLint 5.0.0 (see [eslint/eslint#10140](https://github.com/eslint/eslint/issues/10140) for details).
So this rule is now using two public APIs as an alternative hack.

- [require.cache](https://nodejs.org/api/modules.html#modules_require_cache)
- [Linter.prototype.verify](https://eslint.org/docs/developer-guide/nodejs-api#linterverify)

And it needs an assumption:

- The rule was loaded from `CLIEngine` API.<br>
  (I.e., the `eslint` module was loaded already, but the `Linter.prototype.verify` method hasn't been called yet.)

### How it works

When the rule is loaded, it searches `eslint` module from `require.cache` API and it overrides `Linter.prototype.verify` method.

The overridden `Linter.prototype.verify` method does the following steps:

1. If `config.rules["@eslint-community/eslint-comments/no-unused-disable"]` is not enabled, it calls `super.verify` and returns the result as is.
2. Otherwise, it calls `super.verify` with `reportUnusedDisableDirectives` option.
3. It converts the result of `super.verify` as from `reportUnusedDisableDirectives` errors to `@eslint-community/eslint-comments/no-unused-disable` errors.
4. It returns the converted result.
