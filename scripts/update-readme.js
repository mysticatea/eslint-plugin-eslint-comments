/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const fs = require("fs")
const path = require("path")
const README_FILE_PATH = path.resolve(__dirname, "../README.md")
const CATEGORIES = ["Best Practices", "Stylistic Issues"]
const PLACE_HOLDER = /<!--RULES_TABLE_START-->[\s\S]*<!--RULES_TABLE_END-->/

/**
 * Convert a given rule to a table row.
 * @param {{id:string,name:string,category:string,description:string,recommended:boolean,fixable:boolean,deprecated:boolean,replacedBy:string[]}} rule The rule object.
 * @returns {string} The table row of the rule.
 */
function toTableRow(rule) {
    const mark = `${rule.recommended ? "🌟" : ""}${rule.fixable ? "✒️" : ""}`
    const link = `[${rule.id}](./docs/rules/${rule.name}.md)`
    const description = rule.description || "(no description)"
    return `| ${mark} | ${link} | ${description} |\n`
}

/**
 * Convert a given category to the section of the category.
 * @param {string} category The category to convert.
 * @param {{id:string,name:string,category:string,description:string,recommended:boolean,fixable:boolean,deprecated:boolean,replacedBy:string[]}[]} rules The rules to convert.
 * @returns {string} The section of the category.
 */
function toCategorySection(category, rules) {
    return `### ${category}

|    | Rule ID | Description |
|:---|:--------|:------------|
${rules
        .filter(rule => rule.category === category && !rule.deprecated)
        .map(toTableRow)
        .join("")}
`
}

/**
 * Update `README.md` files.
 * @param {{id:string,name:string,category:string,description:string,recommended:boolean,fixable:boolean,deprecated:boolean,replacedBy:string[]}[]} rules The rules to update `README.md`.
 * @returns {void}
 */
module.exports = rules => {
    fs.writeFileSync(
        README_FILE_PATH,
        fs
            .readFileSync(README_FILE_PATH, "utf8")
            .replace(
                PLACE_HOLDER,
                `<!--RULES_TABLE_START-->\n${CATEGORIES.map(category =>
                    toCategorySection(category, rules)
                ).join("")}<!--RULES_TABLE_END-->`
            )
    )
}
