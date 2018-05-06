/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const RuleTester = require("eslint").RuleTester
const rule = require("../../../lib/rules/no-unlimited-disable")
const tester = new RuleTester()

tester.run("no-unlimited-disable", rule, {
    valid: [
        "/*eslint-enable*/",
        "/*eslint-disable foo*/",
        "//eslint-disable-line foo",
        "//eslint-disable-next-line foo",
        "var foo;\n//eslint-disable-line foo",
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
            code: "// eslint-disable-line ",
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
            code: "// eslint-disable-next-line ",
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
    ],
})
