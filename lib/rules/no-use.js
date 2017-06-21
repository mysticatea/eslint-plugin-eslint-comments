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
    Block: /^\s*(eslint(?:-disable|-enable|-env)?|exported|globals?)(?:\s|$)/,
    Line: /^\s*(eslint-disable(?:-next)?-line)(?:\s|$)/,
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "disallows ESLint directive-comments",
            category: "Best Practices",
            recommended: false,
        },
        fixable: false,
        schema: [{
            type: "object",
            properties: {
                allow: {
                    type: "array",
                    items: {
                        enum: [
                            "eslint",
                            "eslint-disable",
                            "eslint-disable-line",
                            "eslint-disable-next-line",
                            "eslint-enable",
                            "eslint-env",
                            "exported",
                            "global",
                            "globals",
                        ],
                    },
                    additionalItems: false,
                    uniqueItems: true,
                },
            },
            additionalProperties: false,
        }],
    },

    create(context) {
        const sourceCode = context.getSourceCode()
        const allowed = new Set(
            (context.options[0] && context.options[0].allow) || []
        )

        return {
            Program() {
                for (const comment of sourceCode.getAllComments()) {
                    const pattern = PATTERNS[comment.type]
                    if (pattern == null) {
                        continue
                    }

                    const m = pattern.exec(comment.value)
                    if (m != null && !allowed.has(m[1])) {
                        context.report({
                            loc: utils.toForceLocation(comment.loc),
                            message: "Unexpected ESLint directive comment.",
                        })
                    }
                }
            },
        }
    },
}
