/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const utils = require("../internal/utils")

const directives = new Set(["eslint-disable-line", "eslint-disable-next-line"])

module.exports = {
    meta: {
        docs: {
            description:
                "require `eslint-disable-line` and `eslint-disable-next-line` to be line comments",
            category: "Stylistic Issues",
            recommended: false,
            url:
                "https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/comment-style.html",
        },
        fixable: "code",
        type: "layout",
    },

    create(context) {
        const sourceCode = context.getSourceCode()
        const ignore = new Set()

        return {
            JSXExpressionContainer(node) {
                ignore.add(...sourceCode.getCommentsInside(node))
            },
            "Program:exit"() {
                for (const comment of sourceCode.getAllComments()) {
                    if (comment.type === "Line") {
                        continue
                    }
                    if (ignore.has(comment)) {
                        continue
                    }
                    const directiveComment = utils.parseDirectiveComment(
                        comment
                    )
                    if (directiveComment == null) {
                        continue
                    }
                    if (!directives.has(directiveComment.kind)) {
                        continue
                    }
                    context.report({
                        message: "Expected a line comment.",
                        node: comment,
                        fix: fixer =>
                            fixer.replaceText(
                                comment,
                                `//${comment.value.replace(/\s+$/u, "")}`
                            ),
                    })
                }
            },
        }
    },
}
