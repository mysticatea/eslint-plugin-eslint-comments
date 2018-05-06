/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const fs = require("fs")
const path = require("path")
const INDEX_FILE_PATH = path.resolve(__dirname, "../index.js")

/**
 * Generate `index.js` file.
 * @param {{id:string,name:string,category:string,description:string,recommended:boolean,fixable:boolean,deprecated:boolean,replacedBy:string[]}[]} rules The rules to generate index.js.
 * @returns {void}
 */
module.exports = rules => {
    fs.writeFileSync(
        INDEX_FILE_PATH,
        `/** DON'T EDIT THIS FILE WHICH WAS CREATED BY 'scripts/generate-index.js'. */
"use strict"

module.exports = {
    configs: {
        recommended: {
            plugins: ["eslint-comments"],
            rules: {
${rules
            .map(
                rule =>
                    `                "${rule.id}": "${
                        rule.recommended ? "error" : "off"
                    }",`
            )
            .join("\n")}
            },
        },
    },
    rules: {
${rules
            .map(
                rule =>
                    `        "${rule.name}": require("./lib/rules/${
                        rule.name
                    }"),`
            )
            .join("\n")}
    },
}
`
    )
}
