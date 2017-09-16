/**
 * @author Toru Nagashima
 * @copyright 2016 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const utils = require("../utils")

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const PATTERNS = {
    Block: /^\s*(eslint-disable)\s*(\S)?/,
    Line: /^\s*(eslint-disable(?:-next)?-line)\s*(\S)?/,
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallows `eslint-disable` comments without rule names",
            category: "Best Practices",
        },
        fixable: false,
        schema: [],
    },

    create(context) {
        const sourceCode = context.getSourceCode()

        return {
            Program() {
                for (const comment of sourceCode.getAllComments()) {
                    const pattern = PATTERNS[comment.type]
                    if (pattern == null) {
                        continue
                    }

                    const m = pattern.exec(comment.value)
                    if (m && !m[2]) {
                        context.report({
                            loc: utils.toForceLocation(comment.loc),
                            message: "Unexpected unlimited '{{kind}}' comment. Specify some rule names to disable.",
                            data: { kind: m[1] },
                        })
                    }
                }
            },
        }
    },
}
