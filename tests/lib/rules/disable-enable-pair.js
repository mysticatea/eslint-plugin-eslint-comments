/**
 * @author Toru Nagashima
 * @copyright 2016 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const RuleTester = require("eslint").RuleTester
const rule = require("../../../lib/rules/disable-enable-pair")

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const tester = new RuleTester()

tester.run("disable-enable-pair", rule, {
    valid: [
        `
/*eslint-disable*/
/*eslint-enable*/
`,
        `
/*eslint-disable no-undef,no-unused-vars*/
/*eslint-enable no-undef,no-unused-vars*/
`,
        `
/*eslint-disable no-undef,no-unused-vars*/
/*eslint-enable*/
`,
        "//eslint-disable-line",
        "//eslint-disable-next-line",
        "/*eslint no-undef: off */",
        `
function foo() {
    /*eslint-disable*/
    /*eslint-enable*/
}
`,
        `
/*eslint-disable no-undef*/
/*eslint-disable no-unused-vars*/
/*eslint-enable*/
/*eslint-enable*/
`,
        {
            code: `
console.log('This code does not even have any special comments')
`,
            options: [{ allowWholeFile: true }],
        },
        {
            code: `
/*eslint-disable*/
`,
            options: [{ allowWholeFile: true }],
        },
        {
            code: `
/*eslint-disable no-undef*/
/*eslint-disable no-unused-vars*/
/*eslint-enable*/
`,
            options: [{ allowWholeFile: true }],
        },
        {
            code: `

/**
 * @file This test case makes sure comments and blank lines
 * before "whole-file" eslint-disable are allowed.
 */

/*eslint-disable*/
`,
            options: [{ allowWholeFile: true }],
        },
    ],
    invalid: [
        {
            code: `
/*eslint-disable*/
`,
            errors: [
                {
                    message: "Requires 'eslint-enable' directive.",
                    line: 2,
                    column: 0,
                    endLine: 2,
                    endColumn: 19,
                },
            ],
        },
        {
            code: `
/*eslint-disable no-undef*/
`,
            errors: [
                {
                    message: "Requires 'eslint-enable' directive for 'no-undef'.",
                    line: 2,
                    column: 18,
                    endLine: 2,
                    endColumn: 26,
                },
            ],
        },
        {
            code: `
/*eslint-disable no-undef,no-unused-vars*/
/*eslint-enable no-undef*/
`,
            errors: [
                {
                    message: "Requires 'eslint-enable' directive for 'no-unused-vars'.",
                    line: 2,
                    column: 27,
                    endLine: 2,
                    endColumn: 41,
                },
            ],
        },
        {
            code: `
/*eslint-disable no-undef*/
/*eslint-disable no-unused-vars*/
/*eslint-enable*/
`,
            errors: [
                {
                    message: "Requires 'eslint-enable' directive for 'no-undef'.",
                    line: 2,
                    column: 18,
                    endLine: 2,
                    endColumn: 26,
                },
            ],
        },
        {
            code: `
/*eslint-disable no-undef*/
console.log();
/*eslint-disable no-unused-vars*/
`,
            options: [{ allowWholeFile: true }],
            errors: [
                {
                    message: "Requires 'eslint-enable' directive for 'no-unused-vars'.",
                    line: 4,
                    column: 18,
                    endLine: 4,
                    endColumn: 32,
                },
            ],
        },
        {
            code: `
console.log();
/*eslint-disable no-unused-vars*/
`,
            options: [{ allowWholeFile: true }],
            errors: [
                {
                    message: "Requires 'eslint-enable' directive for 'no-unused-vars'.",
                    line: 3,
                    column: 18,
                    endLine: 3,
                    endColumn: 32,
                },
            ],
        },
        {
            code: `
{
/*eslint-disable no-unused-vars*/
}
`,
            options: [{ allowWholeFile: true }],
            errors: [
                {
                    message: "Requires 'eslint-enable' directive for 'no-unused-vars'.",
                    line: 3,
                    column: 18,
                    endLine: 3,
                    endColumn: 32,
                },
            ],
        },
    ],
})
