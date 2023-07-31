/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const semver = require("semver")
const eslintVersion = require("eslint/package").version
const { Linter, RuleTester } = require("eslint")
const rule = require("../../../lib/rules/no-restricted-disable")
const coreRules = new Linter().getRules()
const tester = new RuleTester()

tester.defineRule("foo/no-undef", coreRules.get("no-undef"))
tester.defineRule("foo/no-redeclare", coreRules.get("no-redeclare"))

tester.run("no-restricted-disable", rule, {
    valid: [
        "/*eslint-disable*/",
        "//eslint-disable-line",
        "//eslint-disable-next-line",
        "/*eslint-disable-line*/",
        "/*eslint-disable-next-line*/",
        {
            code: "/*eslint-disable eqeqeq*/",
            options: ["no-unused-vars"],
        },
        {
            code: "/*eslint-enable eqeqeq*/",
            options: ["eqeqeq"],
        },
        {
            code: "/*eslint-disable eqeqeq*/",
            options: ["*", "!eqeqeq"],
        },
    ],
    invalid: [
        {
            code: "/*eslint-disable eqeqeq*/",
            options: ["eqeqeq"],
            errors: ["Disabling 'eqeqeq' is not allowed."],
        },
        {
            code: "/*eslint-disable*/",
            options: ["eqeqeq"],
            errors: ["Disabling 'eqeqeq' is not allowed."],
        },
        {
            code: "//eslint-disable-line eqeqeq",
            options: ["eqeqeq"],
            errors: ["Disabling 'eqeqeq' is not allowed."],
        },
        {
            code: "/*eslint-disable-line eqeqeq*/",
            options: ["eqeqeq"],
            errors: ["Disabling 'eqeqeq' is not allowed."],
        },
        {
            code: "//eslint-disable-line",
            options: ["eqeqeq"],
            errors: ["Disabling 'eqeqeq' is not allowed."],
        },
        {
            code: "/*eslint-disable-line*/",
            options: ["eqeqeq"],
            errors: ["Disabling 'eqeqeq' is not allowed."],
        },
        {
            code: "//eslint-disable-next-line eqeqeq",
            options: ["eqeqeq"],
            errors: ["Disabling 'eqeqeq' is not allowed."],
        },
        {
            code: "/*eslint-disable-next-line eqeqeq*/",
            options: ["eqeqeq"],
            errors: ["Disabling 'eqeqeq' is not allowed."],
        },
        {
            code: "//eslint-disable-next-line",
            options: ["eqeqeq"],
            errors: ["Disabling 'eqeqeq' is not allowed."],
        },
        {
            code: "/*eslint-disable-next-line*/",
            options: ["eqeqeq"],
            errors: ["Disabling 'eqeqeq' is not allowed."],
        },

        {
            code: "/*eslint-disable eqeqeq, no-undef, no-redeclare*/",
            options: ["*", "!no-undef", "!no-redeclare"],
            errors: ["Disabling 'eqeqeq' is not allowed."],
        },
        {
            code: "/*eslint-disable*/",
            options: ["*", "!no-undef", "!no-redeclare"],
            errors: ["Disabling '*,!no-undef,!no-redeclare' is not allowed."],
        },
        {
            code: "//eslint-disable-line eqeqeq, no-undef, no-redeclare",
            options: ["*", "!no-undef", "!no-redeclare"],
            errors: ["Disabling 'eqeqeq' is not allowed."],
        },
        {
            code: "/*eslint-disable-line eqeqeq, no-undef, no-redeclare*/",
            options: ["*", "!no-undef", "!no-redeclare"],
            errors: ["Disabling 'eqeqeq' is not allowed."],
        },
        {
            code: "//eslint-disable-line",
            options: ["*", "!no-undef", "!no-redeclare"],
            errors: ["Disabling '*,!no-undef,!no-redeclare' is not allowed."],
        },
        {
            code: "/*eslint-disable-line*/",
            options: ["*", "!no-undef", "!no-redeclare"],
            errors: ["Disabling '*,!no-undef,!no-redeclare' is not allowed."],
        },
        {
            code: "//eslint-disable-next-line eqeqeq, no-undef, no-redeclare",
            options: ["*", "!no-undef", "!no-redeclare"],
            errors: ["Disabling 'eqeqeq' is not allowed."],
        },
        {
            code: "/*eslint-disable-next-line eqeqeq, no-undef, no-redeclare*/",
            options: ["*", "!no-undef", "!no-redeclare"],
            errors: ["Disabling 'eqeqeq' is not allowed."],
        },
        {
            code: "//eslint-disable-next-line",
            options: ["*", "!no-undef", "!no-redeclare"],
            errors: ["Disabling '*,!no-undef,!no-redeclare' is not allowed."],
        },
        {
            code: "/*eslint-disable-next-line*/",
            options: ["*", "!no-undef", "!no-redeclare"],
            errors: ["Disabling '*,!no-undef,!no-redeclare' is not allowed."],
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
            code:
                "/*eslint-disable no-undef, no-redeclare, foo/no-undef, foo/no-redeclare*/",
            options: ["foo/*"],
            errors: [
                "Disabling 'foo/no-undef' is not allowed.",
                "Disabling 'foo/no-redeclare' is not allowed.",
            ],
        },
        // -- description
        ...(semver.satisfies(eslintVersion, ">=7.0.0")
            ? [
                  {
                      code: "/*eslint-disable -- description*/",
                      options: ["eqeqeq"],
                      errors: ["Disabling 'eqeqeq' is not allowed."],
                  },
              ]
            : []),
    ],
})
