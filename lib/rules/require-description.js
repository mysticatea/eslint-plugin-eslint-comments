/**
 * @author Yosuke Ota <https://github.com/ota-meshi>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const utils = require("../internal/utils")

module.exports = {
    meta: {
        docs: {
            description:
                "require include descriptions in ESLint directive-comments",
            category: "Stylistic Issues",
            recommended: false,
            url:
                "https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/require-description.html",
        },
        fixable: null,
        schema: [
            {
                type: "object",
                properties: {
                    ignore: {
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
            },
        ],
        type: "suggestion",
    },

    create(context) {
        const sourceCode = context.getSourceCode()
        const ignores = new Set(
            (context.options[0] && context.options[0].ignore) || []
        )

        const comments = sourceCode.getAllComments()
        const commentMapByLine = utils.keyBy(comments, comment => comment.loc.end.line)

        function previousLineHasComment(comment){
            return !!commentMapByLine[comment.loc.start.line -1]
        }

        return {
            Program() {
                for (const comment of comments) {
                    const directiveComment = utils.parseDirectiveComment(
                        comment
                    )
                    if (directiveComment == null) {
                        continue
                    }
                    if (ignores.has(directiveComment.kind)) {
                        continue
                    }
                    if (!directiveComment.description && !previousLineHasComment(comment)) {
                        context.report({
                            loc: utils.toForceLocation(comment.loc),
                            message:
                                "Unexpected undescribed directive comment. Include descriptions to explain why the comment is necessary.",
                        })
                    }
                }
            },
        }
    },
}
