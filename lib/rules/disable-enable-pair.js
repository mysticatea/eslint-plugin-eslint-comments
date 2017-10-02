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
        let thereAreNodesBeforeFirstDisabledArea = false

        return {
            "Program > *"(node) {
                if (!firstDisabledArea) {
                    return
                }

                if (utils.lte(firstDisabledArea.start, node.loc.start)) {
                    return
                }

                thereAreNodesBeforeFirstDisabledArea = true
            },

            "Program:exit"() {
                for (const area of disabledArea.areas) {
                    if (area.end != null) {
                        continue
                    }

                    if (allowWholeFile &&
                        area === firstDisabledArea &&
                        !thereAreNodesBeforeFirstDisabledArea &&
                        !area.end
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
