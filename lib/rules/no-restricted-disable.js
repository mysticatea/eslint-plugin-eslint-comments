/**
 * @author Toru Nagashima
 * @copyright 2016 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const Ignore = require("ignore")
const DisabledArea = require("../disabled-area")
const utils = require("../utils")

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/**
 * Creates AST event handlers for no-restricted-disable.
 *
 * @param {RuleContext} context - The rule context.
 * @returns {object} AST event handlers.
 */
function create(context) {
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
                        loc: utils.toRuleIdLocation(area.comment, area.ruleId),
                        message: "Disabling '{{ruleId}}' is not allowed.",
                        data: { ruleId: area.ruleId || String(context.options) },
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
            description: "disallows `eslint-disable` comments about specific rules",
            category: "Stylistic Issues",
            recommended: false,
            url: "https://github.com/mysticatea/eslint-plugin-eslint-comments/tree/master/docs/rules/no-restricted-disable.md",
        },
        fixable: false,
        schema: {
            type: "array",
            items: { type: "string" },
            uniqueItems: true,
        },
    },
}
