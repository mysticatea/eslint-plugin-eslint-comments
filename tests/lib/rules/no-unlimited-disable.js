/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const semver = require("semver")
const eslintVersion = require("eslint/package").version
const RuleTester = require("eslint").RuleTester
const rule = require("../../../lib/rules/no-unlimited-disable")
const tester = new RuleTester()

tester.run("no-unlimited-disable", rule, {
    valid: [
        "/*eslint-enable*/",
        "/*eslint-disable eqeqeq*/",
        "//eslint-disable-line eqeqeq",
        "//eslint-disable-next-line eqeqeq",
        "/*eslint-disable-line eqeqeq*/",
        "/*eslint-disable-next-line eqeqeq*/",
        "var foo;\n//eslint-disable-line eqeqeq",
        "var foo;\n/*eslint-disable-line eqeqeq*/",
    ],
    invalid: [
        {
            code: "/*eslint-disable */",
            errors: [
                "Unexpected unlimited 'eslint-disable' comment. Specify some rule names to disable.",
            ],
        },
        {
            code: "/* eslint-disable */",
            errors: [
                "Unexpected unlimited 'eslint-disable' comment. Specify some rule names to disable.",
            ],
        },
        {
            code: "//eslint-disable-line",
            errors: [
                "Unexpected unlimited 'eslint-disable-line' comment. Specify some rule names to disable.",
            ],
        },
        {
            code: "/*eslint-disable-line*/",
            errors: [
                "Unexpected unlimited 'eslint-disable-line' comment. Specify some rule names to disable.",
            ],
        },
        {
            code: "// eslint-disable-line ",
            errors: [
                "Unexpected unlimited 'eslint-disable-line' comment. Specify some rule names to disable.",
            ],
        },
        {
            code: "/* eslint-disable-line */",
            errors: [
                "Unexpected unlimited 'eslint-disable-line' comment. Specify some rule names to disable.",
            ],
        },
        {
            code: "//eslint-disable-next-line",
            errors: [
                "Unexpected unlimited 'eslint-disable-next-line' comment. Specify some rule names to disable.",
            ],
        },
        {
            code: "/*eslint-disable-next-line*/",
            errors: [
                "Unexpected unlimited 'eslint-disable-next-line' comment. Specify some rule names to disable.",
            ],
        },
        {
            code: "// eslint-disable-next-line ",
            errors: [
                "Unexpected unlimited 'eslint-disable-next-line' comment. Specify some rule names to disable.",
            ],
        },
        {
            code: "/* eslint-disable-next-line */",
            errors: [
                "Unexpected unlimited 'eslint-disable-next-line' comment. Specify some rule names to disable.",
            ],
        },
        {
            code: "var foo;\n//eslint-disable-line",
            errors: [
                "Unexpected unlimited 'eslint-disable-line' comment. Specify some rule names to disable.",
            ],
        },
        {
            code: "var foo;\n/*eslint-disable-line*/",
            errors: [
                "Unexpected unlimited 'eslint-disable-line' comment. Specify some rule names to disable.",
            ],
        },
        // -- description
        ...(semver.satisfies(eslintVersion, ">=7.0.0 || <6.0.0")
            ? [
                  {
                      code: "/*eslint-disable -- description */",
                      errors: [
                          "Unexpected unlimited 'eslint-disable' comment. Specify some rule names to disable.",
                      ],
                  },
              ]
            : []),
    ],
})
