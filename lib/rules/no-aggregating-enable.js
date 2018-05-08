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
                "disallows `eslint-enable` comments for multiple `eslint-disable` comments",
            category: "Best Practices",
            recommended: true,
            url:
                "https://github.com/mysticatea/eslint-plugin-eslint-comments/blob/v3.0.0-beta.1/docs/rules/no-aggregating-enable.md",
        },
        fixable: null,
        schema: [],
    },

    create(context) {
        const sourceCode = context.getSourceCode()
        const disabledArea = DisabledArea.get(sourceCode)

        return {
            Program() {
                for (const entry of disabledArea.numberOfRelatedDisableDirectives) {
                    const comment = entry[0]
                    const count = entry[1]

                    if (count >= 2) {
                        context.report({
                            loc: utils.toForceLocation(comment.loc),
                            message:
                                "This `eslint-enable` comment affects {{count}} `eslint-disable` comments. An `eslint-enable` comment should be for an `eslint-disable` comment.",
                            data: { count },
                        })
                    }
                }
            },
        }
    },
}
