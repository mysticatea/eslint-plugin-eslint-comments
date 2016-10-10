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
            description: "disallows unused `eslint-enable` comments",
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
                for (const item of disabledArea.unusedEnableDirectives) {
                    context.report({
                        loc: utils.toRuleIdLocation(item.comment, item.ruleId),
                        message: (item.ruleId) ?
                            "'{{ruleId}}' rule is re-enabled but it has not been disabled." :
                            "ESLint rules are re-enabled but those have not been disabled.",
                        data: item,
                    })
                }
            },
        }
    },
}
