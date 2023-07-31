/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const utils = require("../internal/utils")

module.exports = {
    meta: {
        docs: {
            description:
                "disallow `eslint-disable` comments without rule names",
            category: "Best Practices",
            recommended: true,
            url: "https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/no-unlimited-disable.html",
        },
        fixable: null,
        messages: {
            unexpected:
                "Unexpected unlimited '{{kind}}' comment. Specify some rule names to disable.",
        },
        schema: [],
        type: "suggestion",
    },

    create(context) {
        const sourceCode = context.getSourceCode()

        return {
            Program() {
                for (const comment of sourceCode.getAllComments()) {
                    const directiveComment =
                        utils.parseDirectiveComment(comment)
                    if (directiveComment == null) {
                        continue
                    }

                    const kind = directiveComment.kind
                    if (
                        kind !== "eslint-disable" &&
                        kind !== "eslint-disable-line" &&
                        kind !== "eslint-disable-next-line"
                    ) {
                        continue
                    }
                    if (!directiveComment.value) {
                        context.report({
                            loc: utils.toForceLocation(comment.loc),
                            messageId: "unexpected",
                            data: { kind: directiveComment.kind },
                        })
                    }
                }
            },
        }
    },
}
