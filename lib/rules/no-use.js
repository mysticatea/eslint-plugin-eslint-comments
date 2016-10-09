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

const BLOCK_COMMENT_DIRECTIVE = /^\s*(eslint(?:-disable|-enable|-env)?|exported|globals?)(?:\s|$)/
const LINE_COMMENT_DIRECTIVE = /^\s*(eslint-disable(?:-next)?-line)(?:\s|$)/
const MESSAGE = "Unexpected ESLint directive comment."
const NOT_FOUND = -1

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
        const allowed = (context.options[0] && context.options[0].allow) || []

        return {
            BlockComment(token) {
                const m = BLOCK_COMMENT_DIRECTIVE.exec(token.value)
                if (m != null && allowed.indexOf(m[1]) === NOT_FOUND) {
                    context.report({
                        loc: utils.toForceLocation(token.loc),
                        message: MESSAGE,
                    })
                }
            },

            LineComment(token) {
                const m = LINE_COMMENT_DIRECTIVE.exec(token.value)
                if (m != null && allowed.indexOf(m[1]) === NOT_FOUND) {
                    context.report({
                        loc: utils.toForceLocation(token.loc),
                        message: MESSAGE,
                    })
                }
            },
        }
    },
}
