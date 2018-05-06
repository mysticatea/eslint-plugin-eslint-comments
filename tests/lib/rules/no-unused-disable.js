/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const RuleTester = require("eslint").RuleTester
const rule = require("../../../lib/rules/no-unused-disable")
const tester = new RuleTester()

tester.run("no-unused-disable", rule, {
    valid: [
        `/*eslint no-undef:error*/
var a = b //eslint-disable-line`,
        `/*eslint no-undef:error*/
var a = b //eslint-disable-line no-undef`,
        `/*eslint no-undef:error, no-unused-vars:error*/
var a = b //eslint-disable-line no-undef,no-unused-vars`,
        `/*eslint no-undef:error*/
//eslint-disable-next-line
var a = b`,
        `/*eslint no-undef:error*/
//eslint-disable-next-line no-undef
var a = b`,
        `/*eslint no-undef:error, no-unused-vars:error*/
//eslint-disable-next-line no-undef,no-unused-vars
var a = b`,
        `/*eslint no-undef:error*/
/*eslint-disable*/
var a = b`,
        `/*eslint no-undef:error*/
/*eslint-disable no-undef*/
var a = b`,
        `/*eslint no-undef:error, no-unused-vars:error*/
/*eslint-disable no-undef,no-unused-vars*/
var a = b`,
        `/*eslint no-undef:error*/
/*eslint-disable*/
var a = b
/*eslint-enable*/`,
        `/*eslint no-undef:error*/
/*eslint-disable no-undef*/
var a = b
/*eslint-enable no-undef*/`,
        `/*eslint no-undef:error, no-unused-vars:error*/
/*eslint-disable no-undef,no-unused-vars*/
var a = b
/*eslint-enable no-undef*/`,

        `
/*eslint no-shadow:error */
var foo = 1
function bar() {
    var foo = 2  //eslint-disable-line no-shadow
}
function baz() {
    var foo = 3  //eslint-disable-line no-shadow
}
`,
    ],
    invalid: [
        {
            code: `/*eslint no-undef:off*/
var a = b //eslint-disable-line`,
            errors: [
                {
                    message: "ESLint rules are disabled but never reported.",
                    line: 2,
                    column: 0,
                    endLine: 2,
                    endColumn: 32,
                },
            ],
        },
        {
            code: `/*eslint no-undef:off*/
var a = b //eslint-disable-line no-undef`,
            errors: [
                {
                    message: "'no-undef' rule is disabled but never reported.",
                    line: 2,
                    column: 33,
                    endLine: 2,
                    endColumn: 41,
                },
            ],
        },
        {
            code: `/*eslint no-undef:off, no-unused-vars:off*/
var a = b //eslint-disable-line no-undef,no-unused-vars`,
            errors: [
                {
                    message: "'no-undef' rule is disabled but never reported.",
                    line: 2,
                    column: 33,
                    endLine: 2,
                    endColumn: 41,
                },
                {
                    message:
                        "'no-unused-vars' rule is disabled but never reported.",
                    line: 2,
                    column: 42,
                    endLine: 2,
                    endColumn: 56,
                },
            ],
        },
        {
            code: `/*eslint no-undef:off*/
//eslint-disable-next-line
var a = b`,
            errors: [
                {
                    message: "ESLint rules are disabled but never reported.",
                    line: 2,
                    column: 0,
                    endLine: 2,
                    endColumn: 27,
                },
            ],
        },
        {
            code: `/*eslint no-undef:off*/
//eslint-disable-next-line no-undef
var a = b`,
            errors: [
                {
                    message: "'no-undef' rule is disabled but never reported.",
                    line: 2,
                    column: 28,
                    endLine: 2,
                    endColumn: 36,
                },
            ],
        },
        {
            code: `/*eslint no-undef:off, no-unused-vars:off*/
//eslint-disable-next-line no-undef,no-unused-vars
var a = b`,
            errors: [
                {
                    message: "'no-undef' rule is disabled but never reported.",
                    line: 2,
                    column: 28,
                    endLine: 2,
                    endColumn: 36,
                },
                {
                    message:
                        "'no-unused-vars' rule is disabled but never reported.",
                    line: 2,
                    column: 37,
                    endLine: 2,
                    endColumn: 51,
                },
            ],
        },
        {
            code: `/*eslint no-undef:off*/
/*eslint-disable*/
var a = b`,
            errors: [
                {
                    message: "ESLint rules are disabled but never reported.",
                    line: 2,
                    column: 0,
                    endLine: 2,
                    endColumn: 19,
                },
            ],
        },
        {
            code: `/*eslint no-undef:off*/
/*eslint-disable no-undef*/
var a = b`,
            errors: [
                {
                    message: "'no-undef' rule is disabled but never reported.",
                    line: 2,
                    column: 18,
                    endLine: 2,
                    endColumn: 26,
                },
            ],
        },
        {
            code: `/*eslint no-undef:off, no-unused-vars:off*/
/*eslint-disable no-undef,no-unused-vars*/
var a = b`,
            errors: [
                {
                    message: "'no-undef' rule is disabled but never reported.",
                    line: 2,
                    column: 18,
                    endLine: 2,
                    endColumn: 26,
                },
                {
                    message:
                        "'no-unused-vars' rule is disabled but never reported.",
                    line: 2,
                    column: 27,
                    endLine: 2,
                    endColumn: 41,
                },
            ],
        },
        {
            code: `/*eslint no-undef:off*/
/*eslint-disable*/
var a = b
/*eslint-enable*/`,
            errors: [
                {
                    message: "ESLint rules are disabled but never reported.",
                    line: 2,
                    column: 0,
                    endLine: 2,
                    endColumn: 19,
                },
            ],
        },
        {
            code: `/*eslint no-undef:off*/
/*eslint-disable no-undef*/
var a = b
/*eslint-enable*/`,
            errors: [
                {
                    message: "'no-undef' rule is disabled but never reported.",
                    line: 2,
                    column: 18,
                    endLine: 2,
                    endColumn: 26,
                },
            ],
        },
        {
            code: `/*eslint no-undef:off, no-unused-vars:off*/
/*eslint-disable no-undef,no-unused-vars*/
var a = b
/*eslint-enable*/`,
            errors: [
                {
                    message: "'no-undef' rule is disabled but never reported.",
                    line: 2,
                    column: 18,
                    endLine: 2,
                    endColumn: 26,
                },
                {
                    message:
                        "'no-unused-vars' rule is disabled but never reported.",
                    line: 2,
                    column: 27,
                    endLine: 2,
                    endColumn: 41,
                },
            ],
        },
        {
            code: `/*eslint no-undef:error*/
/*eslint-disable*/
/*eslint-enable*/
var a = b//eslint-disable-line no-undef`,
            errors: [
                {
                    message: "ESLint rules are disabled but never reported.",
                    line: 2,
                    column: 0,
                    endLine: 2,
                    endColumn: 19,
                },
            ],
        },
        {
            code: `/*eslint no-undef:error*/
/*eslint-disable no-undef*/
/*eslint-enable no-undef*/
var a = b//eslint-disable-line no-undef`,
            errors: [
                {
                    message: "'no-undef' rule is disabled but never reported.",
                    line: 2,
                    column: 18,
                    endLine: 2,
                    endColumn: 26,
                },
            ],
        },
        {
            code: `/*eslint no-undef:error, no-unused-vars:error*/
/*eslint-disable no-undef,no-unused-vars*/
/*eslint-enable no-undef*/
var a = b//eslint-disable-line no-undef`,
            errors: [
                {
                    message: "'no-undef' rule is disabled but never reported.",
                    line: 2,
                    column: 18,
                    endLine: 2,
                    endColumn: 26,
                },
            ],
        },
        {
            code: `/*eslint no-undef:error, no-unused-vars:error*/
/*eslint-disable
    no-undef,
    no-unused-vars,
    xxxx
*/
var a = b
/*eslint-enable*/`,
            errors: [
                {
                    message: "'xxxx' rule is disabled but never reported.",
                    line: 5,
                    column: 5,
                    endLine: 5,
                    endColumn: 9,
                },
            ],
        },
        {
            code: "/* eslint new-parens:error*/ /*eslint-disable new-parens*/",
            errors: [
                {
                    message:
                        "'new-parens' rule is disabled but never reported.",
                    line: 1,
                    column: 47,
                    endLine: 1,
                    endColumn: 57,
                },
            ],
        },
    ],
})
