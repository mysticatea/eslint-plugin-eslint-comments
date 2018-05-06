/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const RuleTester = require("eslint").RuleTester
const rule = require("../../../lib/rules/no-use")
const tester = new RuleTester()

tester.run("no-use", rule, {
    valid: [
        "// eslint foo",
        "// eslint-disable",
        "// eslint-enable",
        "// exported",
        "// global",
        "// globals",
        "// eslint-env",
        "/* eslint-disable-line */",
        "/* eslint-disable-next-line */",
        "/* just eslint in a normal comment */",
        {
            code: "/* eslint */",
            options: [{ allow: ["eslint"] }],
        },
        {
            code: "/* eslint-env */",
            options: [{ allow: ["eslint-env"] }],
        },
        {
            code: "/* eslint-enable */",
            options: [{ allow: ["eslint-enable"] }],
        },
        {
            code: "/* eslint-disable */",
            options: [{ allow: ["eslint-disable"] }],
        },
        {
            code: "// eslint-disable-line",
            options: [{ allow: ["eslint-disable-line"] }],
        },
        {
            code: "// eslint-disable-next-line",
            options: [{ allow: ["eslint-disable-next-line"] }],
        },
        {
            code: "/* exported */",
            options: [{ allow: ["exported"] }],
        },
        {
            code: "/* global */",
            options: [{ allow: ["global"] }],
        },
        {
            code: "/* globals */",
            options: [{ allow: ["globals"] }],
        },
    ],
    invalid: [
        {
            code: "/* eslint */",
            errors: ["Unexpected ESLint directive comment."],
        },
        {
            code: "/* eslint-env */",
            errors: ["Unexpected ESLint directive comment."],
        },
        {
            code: "/* eslint-enable */",
            errors: ["Unexpected ESLint directive comment."],
        },
        {
            code: "/* eslint-disable */",
            errors: ["Unexpected ESLint directive comment."],
        },
        {
            code: "// eslint-disable-line",
            errors: ["Unexpected ESLint directive comment."],
        },
        {
            code: "// eslint-disable-next-line",
            errors: ["Unexpected ESLint directive comment."],
        },
        {
            code: "/* exported */",
            errors: ["Unexpected ESLint directive comment."],
        },
        {
            code: "/* global */",
            errors: ["Unexpected ESLint directive comment."],
        },
        {
            code: "/* globals */",
            errors: ["Unexpected ESLint directive comment."],
        },
    ],
})
