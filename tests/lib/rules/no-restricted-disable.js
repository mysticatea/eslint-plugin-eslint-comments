/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const RuleTester = require("eslint").RuleTester
const rule = require("../../../lib/rules/no-restricted-disable")
const tester = new RuleTester()

tester.run("no-restricted-disable", rule, {
    valid: [
        "/*eslint-disable*/",
        "//eslint-disable-line",
        "//eslint-disable-next-line",
        {
            code: "/*eslint-disable b*/",
            options: ["a"],
        },
        {
            code: "/*eslint-enable a*/",
            options: ["a"],
        },
        {
            code: "/*eslint-disable a*/",
            options: ["*", "!a"],
        },
    ],
    invalid: [
        {
            code: "/*eslint-disable a*/",
            options: ["a"],
            errors: ["Disabling 'a' is not allowed."],
        },
        {
            code: "/*eslint-disable*/",
            options: ["a"],
            errors: ["Disabling 'a' is not allowed."],
        },
        {
            code: "//eslint-disable-line a",
            options: ["a"],
            errors: ["Disabling 'a' is not allowed."],
        },
        {
            code: "//eslint-disable-line",
            options: ["a"],
            errors: ["Disabling 'a' is not allowed."],
        },
        {
            code: "//eslint-disable-next-line a",
            options: ["a"],
            errors: ["Disabling 'a' is not allowed."],
        },
        {
            code: "//eslint-disable-next-line",
            options: ["a"],
            errors: ["Disabling 'a' is not allowed."],
        },

        {
            code: "/*eslint-disable a, b, c*/",
            options: ["*", "!b", "!c"],
            errors: ["Disabling 'a' is not allowed."],
        },
        {
            code: "/*eslint-disable*/",
            options: ["*", "!b", "!c"],
            errors: ["Disabling '*,!b,!c' is not allowed."],
        },
        {
            code: "//eslint-disable-line a, b, c",
            options: ["*", "!b", "!c"],
            errors: ["Disabling 'a' is not allowed."],
        },
        {
            code: "//eslint-disable-line",
            options: ["*", "!b", "!c"],
            errors: ["Disabling '*,!b,!c' is not allowed."],
        },
        {
            code: "//eslint-disable-next-line a, b, c",
            options: ["*", "!b", "!c"],
            errors: ["Disabling 'a' is not allowed."],
        },
        {
            code: "//eslint-disable-next-line",
            options: ["*", "!b", "!c"],
            errors: ["Disabling '*,!b,!c' is not allowed."],
        },

        {
            code:
                "/*eslint-disable semi, no-extra-semi, semi-style, comma-style*/",
            options: ["*semi*"],
            errors: [
                "Disabling 'semi' is not allowed.",
                "Disabling 'no-extra-semi' is not allowed.",
                "Disabling 'semi-style' is not allowed.",
            ],
        },
        {
            code: "/*eslint-disable a, b, react/a, react/b*/",
            options: ["react/*"],
            errors: [
                "Disabling 'react/a' is not allowed.",
                "Disabling 'react/b' is not allowed.",
            ],
        },
    ],
})
