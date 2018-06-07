/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const fs = require("fs")
const path = require("path")
const rules = require("./lib/rules")
const README_FILE_PATH = path.resolve(__dirname, "../docs/rules/README.md")
const CATEGORIES = ["Best Practices", "Stylistic Issues"]

/**
 * Convert a given rule to a table row.
 * @param {{id:string,name:string,category:string,description:string,recommended:boolean,fixable:boolean,deprecated:boolean,replacedBy:string[]}} rule The rule object.
 * @returns {string} The table row of the rule.
 */
function toTableRow(rule) {
    const mark = `${rule.recommended ? "🌟" : ""}${rule.fixable ? "✒️" : ""}`
    const link = `[${rule.id}](./${rule.name}.html)`
    const description = rule.description || "(no description)"
    return `| ${link} | ${description} | ${mark} |`
}

/**
 * Convert a given category to the section of the category.
 * @param {string} category The category to convert.
 * @returns {string} The section of the category.
 */
function toCategorySection(category) {
    return `## ${category}

| Rule ID | Description |    |
|:--------|:------------|:---|
${rules
        .filter(rule => rule.category === category && !rule.deprecated)
        .map(toTableRow)
        .join("\n")}
`
}

fs.writeFileSync(
    README_FILE_PATH,
    `# All Rules

- 🌟 mark: the rule which is enabled by \`eslint-comments/recommended\` preset.
- ✒️ mark: the rule which is fixable by \`eslint --fix\` command.

${CATEGORIES.map(category => toCategorySection(category, rules)).join("\n")}
`
)
