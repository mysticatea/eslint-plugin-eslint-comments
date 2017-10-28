/**
 * @author Toru Nagashima
 * @copyright 2016 Toru Nagashima. All rights reserved.
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

const INDEX_FILE_PATH = path.resolve(__dirname, "../index.js")

//------------------------------------------------------------------------------
// Exports
//------------------------------------------------------------------------------

/**
 * Generate `index.js` file.
 * @param {{id:string,name:string,category:string,description:string,recommended:boolean,fixable:boolean,deprecated:boolean,replacedBy:string[]}[]} rules The rules to generate index.js.
 * @returns {void}
 */
module.exports = (rules) => {
    fs.writeFileSync(INDEX_FILE_PATH, `/**
 * @author Toru Nagashima
 * @copyright 2016 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

module.exports = {
    configs: {
        recommended: {
            plugins: ["eslint-comments"],
            rules: {
${rules.map(rule => `                "${rule.id}": "${rule.recommended ? "error" : "off"}",`).join("\n")}
            },
        },
    },
    rules: {
${rules.map(rule => `        "${rule.name}": require("./lib/rules/${rule.name}"),`).join("\n")}
    },
}
`)
}
