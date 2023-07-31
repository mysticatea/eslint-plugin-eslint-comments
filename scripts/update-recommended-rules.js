/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const fs = require("fs")
const path = require("path")
const rules = require("./lib/rules")
const { format } = require("./lib/utils")

// recommended.js
format(`/** DON'T EDIT THIS FILE; was created by scripts. */
"use strict"

module.exports = {
    plugins: ["@eslint-community/eslint-comments"],
    rules: {
        ${rules
            .filter((rule) => rule.recommended)
            .map((rule) => `"${rule.id}": "error",`)
            .join("\n        ")}
    },
}
`).then((content) =>
    fs.writeFileSync(
        path.resolve(__dirname, "../lib/configs/recommended.js"),
        content
    )
)
