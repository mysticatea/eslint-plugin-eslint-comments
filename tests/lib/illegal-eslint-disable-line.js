/**
 * Test that multi-line eslint-disable-line comments are not false positives.
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
 * @returns {Promise<Message[]>} The result message.
 */
function runESLint(code) {
    return new Promise((resolve, reject) => {
        const cp = spawn(
            "eslint",
            [
                "--stdin",
                "--stdin-filename",
                "test.js",
                "--no-eslintrc",
                "--plugin",
                "@eslint-community/eslint-comments",
                "--format",
                "json",
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

describe("multi-line eslint-disable-line comments", () => {
    before(() => {
        // Register this plugin.
        const selfPath = path.resolve(__dirname, "../../")
        const pluginPath = path.resolve(
            __dirname,
            "../../node_modules/@eslint-community/eslint-plugin-eslint-comments"
        )

        if (fs.existsSync(pluginPath)) {
            rimraf.sync(pluginPath)
        } else {
            fs.mkdirSync(
                path.resolve(__dirname, "../../node_modules/@eslint-community")
            )
        }

        fs.symlinkSync(selfPath, pluginPath, "junction")
    })

    describe("`@eslint-community/eslint-comments/*` rules are valid", () => {
        for (const code of [
            `/* eslint @eslint-community/eslint-comments/no-use:[error, {allow: ['eslint']}] */
/* eslint-disable-line
*/
/* eslint-disable-next-line
*/`,
            `/* eslint @eslint-community/eslint-comments/no-duplicate-disable:error */
/*eslint-disable no-undef*/
/*eslint-disable-line
no-undef*/
`,
        ]) {
            it(code, () =>
                runESLint(code).then(messages => {
                    assert.strictEqual(messages.length > 0, true)
                    const normalMessages = messages.filter(
                        message => message.ruleId != null
                    )
                    assert.strictEqual(normalMessages.length, 0)
                })
            )
        }
    })
})
