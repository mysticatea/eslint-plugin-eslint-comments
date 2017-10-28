/**
 * @author Toru Nagashima
 * @copyright 2017 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const fs = require("fs")
const path = require("path")

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const PLACE_HOLDER = /^#[^\n]*\n+(?:- .+\n)*\n*/

//------------------------------------------------------------------------------
// Exports
//------------------------------------------------------------------------------

/**
 * Update the header of `docs/rules/*.md` files.
 * @param {{id:string,name:string,category:string,description:string,recommended:boolean,fixable:boolean,deprecated:boolean,replacedBy:string[]}[]} rules The rules to update headers.
 * @returns {void}
 */
module.exports = (rules) => {
    for (const rule of rules) {
        const filePath = path.join(__dirname, `../docs/rules/${rule.name}.md`)
        const headerLines = [
            `# ${rule.description} (${rule.id})`,
        ]

        if (rule.recommended || rule.deprecated || rule.fixable) {
            headerLines.push("")
        }
        if (rule.deprecated) {
            headerLines.push(`- ⚠️ This rule was **deprecated** and replaced by ${rule.replacedBy.map(id => `[${id}](${id}.md) rule`).join(", ")}.`)
        }
        else if (rule.recommended) {
            headerLines.push("- 🌟 The `\"extends\": \"plugin:eslint-comments/recommended\"` property in a configuration file enables this rule.")
        }
        if (rule.fixable) {
            headerLines.push("- ✒️ The `--fix` option on the [command line](http://eslint.org/docs/user-guide/command-line-interface#fix) can automatically fix some of the problems reported by this rule.")
        }
        headerLines.push("", "")

        fs.writeFileSync(
            filePath,
            fs.readFileSync(filePath, "utf8").replace(PLACE_HOLDER, headerLines.join("\n"))
        )
    }
}
