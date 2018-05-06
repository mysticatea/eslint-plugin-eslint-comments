/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const fs = require("fs")
const path = require("path")
const updateIndex = require("./update-index")
const updateDocHeaders = require("./update-doc-headers")
const updateReadme = require("./update-readme")
const rules = fs
    .readdirSync(path.resolve(__dirname, "../lib/rules"))
    .map(fileName => path.basename(fileName, ".js"))
    .map(name => {
        const meta = require(`../lib/rules/${name}`).meta
        return {
            id: `eslint-comments/${name}`,
            name,
            category: meta.docs.category,
            description: meta.docs.description,
            recommended: meta.docs.recommended,
            fixable: meta.fixable,
            deprecated: meta.deprecated,
            replacedBy: meta.docs.replacedBy,
        }
    })

updateIndex(rules)
updateDocHeaders(rules)
updateReadme(rules)
