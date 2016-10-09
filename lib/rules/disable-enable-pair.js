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
        schema: [],
    },

    create(context) {
        const sourceCode = context.getSourceCode()
        const disabledArea = DisabledArea.get(sourceCode)

        return {
            Program() {
                for (const area of disabledArea.areas) {
                    if (area.end != null) {
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
