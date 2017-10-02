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
// Helpers
//------------------------------------------------------------------------------

/**
 * Checks whether `disabledArea` covers `node`.
 *
 * @param {DisabledArea} disabledArea - Disabled area in question.
 * @param {Node} node - The node that might be covered.
 * @returns {boolean} `true` if `disabledArea` covers `node`.
 * @private
 */
function disabledAreaCoversNode(disabledArea, node) {
    return utils.lte(disabledArea.start, node.loc.start) &&
        (!disabledArea.end || utils.lte(node.loc.end, disabledArea.end))
}

/**
 * Checks whether `disabledArea` covers `node`'s body.
 *
 * @param {DisabledArea} disabledArea - Disabled area in question.
 * @param {Node} node - The node whose body may or may not be covered.
 * Must have a `body` property (a Program or BlockStatement will do).
 * @returns {boolean} `true` if `disabledArea` covers `node`'s body.
 * @private
 */
function disabledAreaCoversNodeBody(disabledArea, node) {
    const body = node.body
    const first = body[0]
    const last = body[body.length - 1]
    return !first ||
        (disabledAreaCoversNode(disabledArea, first) &&
         disabledAreaCoversNode(disabledArea, last))
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "requires a `eslint-enable` comment for every `eslint-disable` comment",
            category: "Best Practices",
            recommended: false,
        },
        fixable: false,
        schema: [{
            type: "object",
            properties: {
                allowWholeFile: {
                    type: "boolean",
                },
            },
            additionalProperties: false,
        }],
    },

    create(context) {
        const allowWholeFile = context.options[0] && context.options[0].allowWholeFile

        const sourceCode = context.getSourceCode()
        const disabledArea = DisabledArea.get(sourceCode)

        const firstDisabledArea = disabledArea.areas[0]

        return {
            Program(node) {
                for (const area of disabledArea.areas) {
                    if (area.end != null) {
                        continue
                    }

                    if (allowWholeFile &&
                        area === firstDisabledArea &&
                        disabledAreaCoversNodeBody(area, node)
                    ) {
                        continue
                    }

                    context.report({
                        loc: utils.toRuleIdLocation(area.comment, area.ruleId),
                        message: (area.ruleId) ?
                            "Requires 'eslint-enable' directive for '{{ruleId}}'." :
                            "Requires 'eslint-enable' directive.",
                        data: area,
                    })
                }
            },
        }
    },
}
