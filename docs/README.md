# Introduction

[![npm version](https://img.shields.io/npm/v/eslint-plugin-eslint-comments.svg)](https://www.npmjs.com/package/eslint-plugin-eslint-comments)
[![Downloads/month](https://img.shields.io/npm/dm/eslint-plugin-eslint-comments.svg)](http://www.npmtrends.com/eslint-plugin-eslint-comments)
[![Build Status](https://travis-ci.org/mysticatea/eslint-plugin-eslint-comments.svg?branch=master)](https://travis-ci.org/mysticatea/eslint-plugin-eslint-comments)
[![codecov](https://codecov.io/gh/mysticatea/eslint-plugin-eslint-comments/branch/master/graph/badge.svg)](https://codecov.io/gh/mysticatea/eslint-plugin-eslint-comments)
[![Dependency Status](https://david-dm.org/mysticatea/eslint-plugin-eslint-comments.svg)](https://david-dm.org/mysticatea/eslint-plugin-eslint-comments)

Additional ESLint rules for ESLint directive comments (e.g. `//eslint-disable-line`).

## 🏁 Goal

The purpose of this plugin is to apply best practices on directive comments like `/* eslint-disable */`.

For example,

- to disallow unused disabling.
- to disallow non-effect enabling.
- to require rule IDs for disabling and enabling.
