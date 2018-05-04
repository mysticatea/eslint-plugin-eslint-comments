/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 *
 * This rule is special.
 * This rule patches `Linter#verify` method and:
 *
 * 1. enables `reportUnusedDisableDirectives` option.
 * 2. verifies the code.
 * 3. converts `reportUnusedDisableDirectives` errors to `no-unused-disable` errors.
 *
 * So it cannot test with `eslint.RuleTester`.
 * This test confirmes that this rule works file in eslint CLI command.
 */
"use strict"

const assert = require("assert")
const fs = require("fs")
const path = require("path")
const spawn = require("cross-spawn")
const rimraf = require("rimraf")

/**
 * Run eslint CLI command with a given source code.
 * @param {string} code The source code to lint.
 * @param {boolean} [reportUnusedDisableDirectives] The flag to enable `--report-unused-disable-directives` option.
 * @returns {Promise<Message[]>} The result message.
 */
function runESLint(code, reportUnusedDisableDirectives = false) {
    return new Promise((resolve, reject) => {
        const cp = spawn(
            "eslint",
            [
                "--stdin",
                "--stdin-filename",
                "test.js",
                "--no-eslintrc",
                "--plugin",
                "eslint-comments",
                "--rule",
                "eslint-comments/no-unused-disable:error",
                "--format",
                "json",
                ...(reportUnusedDisableDirectives
                    ? ["--report-unused-disable-directives"]
                    : []),
            ],
            { stdio: ["pipe", "pipe", "inherit"] }
        )
        const chunks = []
        let totalLength = 0

        cp.stdout.on("data", chunk => {
            chunks.push(chunk)
            totalLength += chunk.length
        })
        cp.stdout.on("end", () => {
            try {
                const resultsStr = String(Buffer.concat(chunks, totalLength))
                const results = JSON.parse(resultsStr)
                resolve(results[0].messages)
            } catch (error) {
                reject(error)
            }
        })
        cp.on("error", reject)

        cp.stdin.end(code)
    })
}

describe("no-unused-disable", () => {
    before(() => {
        // Register this plugin.
        const selfPath = path.resolve(__dirname, "../../../")
        const pluginPath = path.resolve(
            __dirname,
            "../../../node_modules/eslint-plugin-eslint-comments"
        )

        if (fs.existsSync(pluginPath)) {
            rimraf.sync(pluginPath)
        }
        fs.symlinkSync(selfPath, pluginPath, "junction")
    })

    describe("valid", () => {
        for (const code of [
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
        ]) {
            it(code, () =>
                runESLint(code).then(messages => {
                    assert.strictEqual(messages.length, 0)
                })
            )
        }
    })

    describe("invalid", () => {
        for (const testCase of [
            {
                title: "Generic same line",
                code: `/*eslint no-undef:off*/
var a = b //eslint-disable-line`,
                output: `/*eslint no-undef:off*/
var a = b `,
                errors: [
                    {
                        message:
                            "ESLint rules are disabled but never reported.",
                        line: 2,
                        column: 11,
                        endLine: 2,
                        endColumn: 32,
                    },
                ],
            },
            {
                title: "Specific same line",
                code: `/*eslint no-undef:off*/
var a = b //eslint-disable-line no-undef`,
                output: `/*eslint no-undef:off*/
var a = b `,
                errors: [
                    {
                        message:
                            "'no-undef' rule is disabled but never reported.",
                        line: 2,
                        column: 33,
                        endLine: 2,
                        endColumn: 41,
                    },
                ],
            },
            {
                title: "Multiple in a same line",
                code: `/*eslint no-undef:off, no-unused-vars:off*/
var a = b //eslint-disable-line no-undef,no-unused-vars`,
                errors: [
                    {
                        message:
                            "'no-undef' rule is disabled but never reported.",
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
                title: "Generic next line",
                code: `/*eslint no-undef:off*/
//eslint-disable-next-line
var a = b`,
                output: `/*eslint no-undef:off*/

var a = b`,
                errors: [
                    {
                        message:
                            "ESLint rules are disabled but never reported.",
                        line: 2,
                        column: 1,
                        endLine: 2,
                        endColumn: 27,
                    },
                ],
            },
            {
                title: "Specific next line",
                code: `/*eslint no-undef:off*/
//eslint-disable-next-line no-undef
var a = b`,
                output: `/*eslint no-undef:off*/

var a = b`,
                errors: [
                    {
                        message:
                            "'no-undef' rule is disabled but never reported.",
                        line: 2,
                        column: 28,
                        endLine: 2,
                        endColumn: 36,
                    },
                ],
            },
            {
                title: "Multiple next line",
                code: `/*eslint no-undef:off, no-unused-vars:off*/
//eslint-disable-next-line no-undef,no-unused-vars
var a = b`,
                errors: [
                    {
                        message:
                            "'no-undef' rule is disabled but never reported.",
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
                title: "Generic block",
                code: `/*eslint no-undef:off*/
/*eslint-disable*/
var a = b`,
                output: `/*eslint no-undef:off*/

var a = b`,
                errors: [
                    {
                        message:
                            "ESLint rules are disabled but never reported.",
                        line: 2,
                        column: 1,
                        endLine: 2,
                        endColumn: 19,
                    },
                ],
            },
            {
                title: "Replaces multi-line block comments with a newline",
                code: `foo/* eslint-disable
*/ bar`,
                output: `foo
 bar`,
                errors: [
                    {
                        message:
                            "ESLint rules are disabled but never reported.",
                        line: 1,
                        column: 4,
                        endLine: 2,
                        endColumn: 3,
                    },
                ],
            },
            {
                title: "Specific block",
                code: `/*eslint no-undef:off*/
/*eslint-disable no-undef*/
var a = b`,
                output: `/*eslint no-undef:off*/

var a = b`,
                errors: [
                    {
                        message:
                            "'no-undef' rule is disabled but never reported.",
                        line: 2,
                        column: 18,
                        endLine: 2,
                        endColumn: 26,
                    },
                ],
            },
            {
                title: "Multiple block",
                code: `/*eslint no-undef:off, no-unused-vars:off*/
/*eslint-disable no-undef,no-unused-vars*/
var a = b`,
                errors: [
                    {
                        message:
                            "'no-undef' rule is disabled but never reported.",
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
                title: "Generic block with enable after",
                code: `/*eslint no-undef:off*/
/*eslint-disable*/
var a = b
/*eslint-enable*/`,
                output: `/*eslint no-undef:off*/

var a = b
/*eslint-enable*/`,
                errors: [
                    {
                        message:
                            "ESLint rules are disabled but never reported.",
                        line: 2,
                        column: 1,
                        endLine: 2,
                        endColumn: 19,
                    },
                ],
            },
            {
                title: "Specific block with enable after",
                code: `/*eslint no-undef:off*/
/*eslint-disable no-undef*/
var a = b
/*eslint-enable*/`,
                output: `/*eslint no-undef:off*/

var a = b
/*eslint-enable*/`,
                errors: [
                    {
                        message:
                            "'no-undef' rule is disabled but never reported.",
                        line: 2,
                        column: 18,
                        endLine: 2,
                        endColumn: 26,
                    },
                ],
            },
            {
                title: "Multiple block with enable after",
                code: `/*eslint no-undef:off, no-unused-vars:off*/
/*eslint-disable no-undef,no-unused-vars*/
var a = b
/*eslint-enable*/`,
                errors: [
                    {
                        message:
                            "'no-undef' rule is disabled but never reported.",
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
                title: "Generic block disable with no error inside",
                code: `/*eslint no-undef:error*/
/*eslint-disable*/
/*eslint-enable*/
var a = b//eslint-disable-line no-undef`,
                output: `/*eslint no-undef:error*/

/*eslint-enable*/
var a = b//eslint-disable-line no-undef`,
                errors: [
                    {
                        message:
                            "ESLint rules are disabled but never reported.",
                        line: 2,
                        column: 1,
                        endLine: 2,
                        endColumn: 19,
                    },
                ],
            },
            {
                title: "Specific block disable with no error inside",
                code: `/*eslint no-undef:error*/
/*eslint-disable no-undef*/
/*eslint-enable no-undef*/
var a = b//eslint-disable-line no-undef`,
                output: `/*eslint no-undef:error*/

/*eslint-enable no-undef*/
var a = b//eslint-disable-line no-undef`,
                errors: [
                    {
                        message:
                            "'no-undef' rule is disabled but never reported.",
                        line: 2,
                        column: 18,
                        endLine: 2,
                        endColumn: 26,
                    },
                ],
            },
            {
                title: "Multiple specific block disable with no error inside",
                code: `/*eslint no-undef:error, no-unused-vars:error*/
/*eslint-disable no-undef,no-unused-vars*/
/*eslint-enable no-undef*/
var a = b//eslint-disable-line no-undef`,
                errors: [
                    {
                        message:
                            "'no-undef' rule is disabled but never reported.",
                        line: 2,
                        column: 18,
                        endLine: 2,
                        endColumn: 26,
                    },
                ],
            },
            {
                title:
                    "Multiple specific block disable with only one error inside",
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
                title: "Specific block disable at end of input",
                code:
                    "/* eslint new-parens:error*/ /*eslint-disable new-parens*/",
                output: "/* eslint new-parens:error*/ ",
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
            {
                title: "Generic same line with rule off",
                code: `/*eslint no-undef:off*/
var a = b //eslint-disable-line`,
                output: `/*eslint no-undef:off*/
var a = b `,
                errors: [
                    {
                        message:
                            "Unused eslint-disable directive (no problems were reported).",
                    },
                    {
                        message:
                            "ESLint rules are disabled but never reported.",
                        line: 2,
                        column: 11,
                        endLine: 2,
                        endColumn: 32,
                    },
                ],
                reportUnusedDisableDirectives: true,
            },
            {
                title: "Specific same line with rule off",
                code: `/*eslint no-undef:off*/
var a = b //eslint-disable-line no-undef`,
                output: `/*eslint no-undef:off*/
var a = b `,
                errors: [
                    {
                        message:
                            "Unused eslint-disable directive (no problems were reported from 'no-undef').",
                    },
                    {
                        message:
                            "'no-undef' rule is disabled but never reported.",
                        line: 2,
                        column: 33,
                        endLine: 2,
                        endColumn: 41,
                    },
                ],
                reportUnusedDisableDirectives: true,
            },

            {
                title: "Don't crash even if the source code has a parse error",
                code:
                    "/*eslint no-undef:error*/\nvar a = b c //eslint-disable-line no-undef",
                errors: [
                    {
                        message: "Parsing error: Unexpected token c",
                    },
                ],
            },
        ]) {
            it(testCase.title || testCase.code, () =>
                runESLint(
                    testCase.code,
                    testCase.reportUnusedDisableDirectives
                ).then(actualMessages => {
                    assert.strictEqual(
                        actualMessages.length,
                        testCase.errors.length
                    )

                    let actualOutput = testCase.code

                    for (let i = 0; i < testCase.errors.length; ++i) {
                        const actual = actualMessages[i]
                        const expected = testCase.errors[i]

                        // We need to duplicate the simple logic in ESLint's
                        // source-code-fixer.js to apply the fix. If we run
                        // ESLint with --fix-dry-run, it won't report any
                        // errors since it would have fixed them.
                        if (actual.fix) {
                            actualOutput =
                                actualOutput.slice(0, actual.fix.range[0]) +
                                actual.fix.text +
                                actualOutput.slice(actual.fix.range[1])
                        }

                        for (const key of Object.keys(expected)) {
                            assert.strictEqual(
                                actual[key],
                                expected[key],
                                `'${key}' is not expected.`
                            )
                        }
                    }

                    if (testCase.output) {
                        assert.strictEqual(
                            actualOutput,
                            testCase.output,
                            "output is not expected"
                        )
                    }
                })
            )
        }
    })
})
