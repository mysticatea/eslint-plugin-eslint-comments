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
            description:
                "requires a `eslint-enable` comment for every `eslint-disable` comment",
            category: "Best Practices",
            recommended: true,
            url:
                "https://github.com/mysticatea/eslint-plugin-eslint-comments/blob/v3.0.0-beta.0/docs/rules/disable-enable-pair.md",
        },
        fixable: null,
        schema: [
            {
                type: "object",
                properties: {
                    allowWholeFile: {
                        type: "boolean",
                    },
                },
                additionalProperties: false,
            },
        ],
    },

    create(context) {
        const allowWholeFile =
            context.options[0] && context.options[0].allowWholeFile
        const sourceCode = context.getSourceCode()
        const disabledArea = DisabledArea.get(sourceCode)

        return {
            Program(node) {
                if (allowWholeFile && node.body.length === 0) {
                    return
                }

                for (const area of disabledArea.areas) {
                    if (area.end != null) {
                        continue
                    }
                    if (
                        allowWholeFile &&
                        utils.lte(area.start, node.loc.start)
                    ) {
                        continue
                    }

                    context.report({
                        loc: utils.toRuleIdLocation(area.comment, area.ruleId),
                        message: area.ruleId
                            ? "Requires 'eslint-enable' directive for '{{ruleId}}'."
                            : "Requires 'eslint-enable' directive.",
                        data: area,
                    })
                }
            },
        }
    },
}
