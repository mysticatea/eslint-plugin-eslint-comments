/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const path = require("path")
const needle = `${path.sep}eslint${path.sep}`

module.exports = () => {
    const eslintPaths = new Set(
        Object.keys(require.cache)
            .filter(id => id.includes(needle))
            .map(id => id.slice(0, id.indexOf(needle) + needle.length))
    )
    return Array.from(eslintPaths).map(eslintPath => require(eslintPath).Linter)
}
