/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const fs = require("fs")
const path = require("path")
const { createIndex } = require("./lib/utils")

// docs.
require("./update-docs-headers")
require("./update-docs-index")

// recommended rules.
require("./update-recommended-rules")

// indices.
for (const dirPath of [
    path.resolve(__dirname, "../lib/configs"),
    path.resolve(__dirname, "../lib/rules"),
    path.resolve(__dirname, "../lib/utils"),
]) {
    createIndex(dirPath).then((content) =>
        fs.writeFileSync(`${dirPath}.js`, content)
    )
}
