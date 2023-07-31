/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const fs = require("fs")
const path = require("path")
const { ESLint } = require("eslint")
const linter = new ESLint({ fix: true })

/**
 * Format a given text.
 * @param {string} text The text to format.
 * @returns {Promise<string>} The formatted text.
 */
function format(text) {
    return linter.lintText(text).then(([{ output }]) => output || text)
}

/**
 * Create the index file content of a given directory.
 * @param {string} dirPath The path to the directory to create index.
 * @returns {Promise<string>} The index file content.
 */
function createIndex(dirPath) {
    const dirName = path.basename(dirPath)
    return format(`/** DON'T EDIT THIS FILE; was created by scripts. */
    "use strict"

    module.exports = {
        ${fs
            .readdirSync(dirPath)
            .map((file) => path.basename(file, ".js"))
            .map((id) => `"${id}": require("./${dirName}/${id}"),`)
            .join("\n    ")}
    }
    `)
}

module.exports = {
    createIndex,
    format,
}
