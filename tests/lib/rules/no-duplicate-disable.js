/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const RuleTester = require("eslint").RuleTester
const rule = require("../../../lib/rules/no-duplicate-disable")
const tester = new RuleTester()

tester.run("no-duplicate-disable", rule, {
    valid: [
        `
//eslint-disable-line
`,
        `
/*eslint-disable no-undef*/
//eslint-disable-line no-unused-vars
//eslint-disable-next-line semi
/*eslint-disable eqeqeq*/
`,
    ],
    invalid: [
        {
            code: `
/*eslint-disable no-undef*/
//eslint-disable-line no-undef
`,
            errors: [
                {
                    message: "'no-undef' rule has been disabled already.",
                    line: 3,
                    column: 23,
                    endLine: 3,
                    endColumn: 31,
                },
            ],
        },
        {
            code: `
/*eslint-disable no-undef*/
//eslint-disable-next-line no-undef
`,
            errors: [
                {
                    message: "'no-undef' rule has been disabled already.",
                    line: 3,
                    column: 28,
                    endLine: 3,
                    endColumn: 36,
                },
            ],
        },
        {
            code: `
//eslint-disable-next-line no-undef
//eslint-disable-line no-undef
`,
            errors: [
                {
                    message: "'no-undef' rule has been disabled already.",
                    line: 3,
                    column: 23,
                    endLine: 3,
                    endColumn: 31,
                },
            ],
        },
    ],
})
