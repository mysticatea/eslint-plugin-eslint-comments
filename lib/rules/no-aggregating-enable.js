/**
 * @author Toru Nagashima
 * @copyright 2016 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const DisabledArea = require("../disabled-area")
const utils = require("../utils")

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/**
 * Creates AST event handlers for no-aggregating-enable.
 *
 * @param {RuleContext} context - The rule context.
 * @returns {object} AST event handlers.
 */
function create(context) {
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
                        message: "This `eslint-enable` comment affects {{count}} `eslint-disable` comments. An `eslint-enable` comment should be for an `eslint-disable` comment.",
                        data: { count },
                    })
                }
            }
        },
    }
}

module.exports = {
    create,
    meta: {
        docs: {
            description: "disallows `eslint-enable` comments for multiple `eslint-disable` comments",
            category: "Best Practices",
            recommended: true,
            url: "https://github.com/mysticatea/eslint-plugin-eslint-comments/tree/master/docs/rules/no-aggregating-enable.md",
        },
        fixable: false,
        schema: [],
    },
}
