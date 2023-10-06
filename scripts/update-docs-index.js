/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const fs = require("fs")
const path = require("path")
const { withCategories } = require("./lib/rules")

/**
 * Convert a given rule to a table row.
 * @param {{id:string,name:string,category:string,description:string,recommended:boolean,fixable:boolean,deprecated:boolean,replacedBy:string[]}} rule The rule object.
 * @returns {string} The table row of the rule.
 */
function toTableRow(rule) {
    const mark = `${rule.recommended ? "🌟" : ""}${rule.fixable ? "✒️" : ""}`
    const link = `[@eslint-community/eslint-comments/<wbr>${rule.name}](./${rule.name}.md)`
    const description = rule.description || "(no description)"
    return `| ${link} | ${description} | ${mark} |`
}

/**
 * Convert a given category to the section of the category.
 * @param {{category:string,rules:{id:string,name:string,category:string,description:string,recommended:boolean,fixable:boolean,deprecated:boolean,replacedBy:string[]}[]}} categoryInfo The category information to convert.
 * @returns {string} The section of the category.
 */
function toCategorySection({ category, rules }) {
    return `## ${category}

| Rule ID | Description |    |
|:--------|:------------|:---|
${rules.map(toTableRow).join("\n")}
`
}

fs.writeFileSync(
    path.resolve(__dirname, "../docs/rules/index.md"),
    `# Available Rules

- 🌟 mark: the rule which is enabled by \`@eslint-community/eslint-comments/recommended\` preset.
- ✒️ mark: the rule which is fixable by \`eslint --fix\` command.

${withCategories.map(toCategorySection).join("\n")}
`
)
