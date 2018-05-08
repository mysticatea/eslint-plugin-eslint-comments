/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const DisabledArea = require("../disabled-area")
const utils = require("../utils")

module.exports = {
    meta: {
        docs: {
            description: "disallows duplicate `eslint-disable` comments",
            category: "Best Practices",
            recommended: true,
            url:
                "https://github.com/mysticatea/eslint-plugin-eslint-comments/blob/v3.0.0-beta.2/docs/rules/no-duplicate-disable.md",
        },
        fixable: null,
        schema: [],
    },

    create(context) {
        const sourceCode = context.getSourceCode()
        const disabledArea = DisabledArea.get(sourceCode)

        return {
            Program() {
                for (const item of disabledArea.duplicateDisableDirectives) {
                    context.report({
                        loc: utils.toRuleIdLocation(item.comment, item.ruleId),
                        message: item.ruleId
                            ? "'{{ruleId}}' rule has been disabled already."
                            : "ESLint rules have been disabled already.",
                        data: item,
                    })
                }
            },
        }
    },
}
