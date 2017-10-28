/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * @copyright 2017 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const fs = require("fs")
const path = require("path")
const generateIndex = require("./generate-index")
const updateDocHeaders = require("./update-doc-headers")
const updateReadme = require("./update-readme")

//------------------------------------------------------------------------------
// Main
//------------------------------------------------------------------------------

const rules =
    fs.readdirSync(path.resolve(__dirname, "../lib/rules"))
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

generateIndex(rules)
updateDocHeaders(rules)
updateReadme(rules)
