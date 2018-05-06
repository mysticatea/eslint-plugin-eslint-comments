/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const Ignore = require("ignore")
const DisabledArea = require("../disabled-area")
const utils = require("../utils")

module.exports = {
    meta: {
        docs: {
            description:
                "disallows `eslint-disable` comments about specific rules",
            category: "Stylistic Issues",
            recommended: false,
            url:
                "https://github.com/mysticatea/eslint-plugin-eslint-comments/blob/v2.0.2/docs/rules/no-restricted-disable.md",
        },
        fixable: null,
        schema: {
            type: "array",
            items: { type: "string" },
            uniqueItems: true,
        },
    },

    create(context) {
        const sourceCode = context.getSourceCode()
        const disabledArea = DisabledArea.get(sourceCode)

        if (context.options.length === 0) {
            return {}
        }

        const ig = new Ignore()
        for (const pattern of context.options) {
            ig.add(pattern)
        }

        return {
            Program() {
                for (const area of disabledArea.areas) {
                    if (area.ruleId == null || ig.ignores(area.ruleId)) {
                        context.report({
                            loc: utils.toRuleIdLocation(
                                area.comment,
                                area.ruleId
                            ),
                            message: "Disabling '{{ruleId}}' is not allowed.",
                            data: {
                                ruleId: area.ruleId || String(context.options),
                            },
                        })
                    }
                }
            },
        }
    },
}
