# eslint-comments/comment-style

> require eslint-disable-line and eslint-disable-next-line to be line comments

ESLint rules can be disabled using `eslint-disable-line` or `eslint-disable-next-line` comments.
These comments may be either line comments, or block comments. This rule disallows the use of
block comments for these ESLint directives.

## Rule Details

Examples of :-1: **incorrect** code for this rule:

<eslint-playground type="bad" code="/*eslint eslint-comments/comment-style: error */

/* eslint-disable-line */
/* eslint-disable-next-line */
" />

Examples of :+1: **correct** code for this rule:

<eslint-playground type="bad" code="/*eslint eslint-comments/comment-style: error */

// eslint-disable-line
// eslint-disable-next-line
<div>{/* eslint-disable-line */}</div>
<div>{/* eslint-disable-next-line */}</div>
" />
