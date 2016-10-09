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

const BLOCK_COMMENT_DIRECTIVE = /^\s*(eslint-disable)\s*(\S)?/
const LINE_COMMENT_DIRECTIVE = /^\s*(eslint-disable(?:-next)?-line)\s*(\S)?/
const MESSAGE = "Unexpected unlimited '{{kind}}' comment. Specify some rule names to disable."

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
        return {
            BlockComment(token) {
                const m = BLOCK_COMMENT_DIRECTIVE.exec(token.value)
                if (m && !m[2]) {
                    context.report({
                        loc: utils.toForceLocation(token.loc),
                        message: MESSAGE,
                        data: {kind: m[1]},
                    })
                }
            },

            LineComment(token) {
                const m = LINE_COMMENT_DIRECTIVE.exec(token.value)
                if (m && !m[2]) {
                    context.report({
                        loc: utils.toForceLocation(token.loc),
                        message: MESSAGE,
                        data: {kind: m[1]},
                    })
                }
            },
        }
    },
}
