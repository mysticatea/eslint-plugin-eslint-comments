/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const DisabledArea = require("../disabled-area")
const utils = require("../utils")

module.exports = {
    meta: {
        docs: {
            description: "disallows unused `eslint-disable` comments",
            category: "Best Practices",
            recommended: true,
            url:
                "https://github.com/mysticatea/eslint-plugin-eslint-comments/blob/v2.0.2/docs/rules/no-unused-disable.md",
        },
        fixable: null,
        schema: [],
    },

    create(context) {
        const linter = context.eslint || context._linter
        const originalReport = linter.report
        const sourceCode = context.getSourceCode()
        const disabledArea = DisabledArea.get(sourceCode)

        // Override `report` method to mark disabled-area as reported.
        linter.report = function(ruleId, _severity, node, locationArg) {
            const location =
                typeof locationArg === "string"
                    ? node.loc.start
                    : locationArg.start || locationArg

            disabledArea.report(ruleId, location)

            //eslint-disable-next-line prefer-rest-params
            originalReport.apply(this, arguments)
        }

        /**
         * Reports the result.
         *
         * @returns {void}
         */
        function report() {
            for (const area of disabledArea.areas) {
                if (area.reported) {
                    continue
                }

                context.report({
                    loc: utils.toRuleIdLocation(area.comment, area.ruleId),
                    message: area.ruleId
                        ? "'{{ruleId}}' rule is disabled but never reported."
                        : "ESLint rules are disabled but never reported.",
                    data: area,
                })
            }

            // Restore
            linter.report = originalReport
        }

        return {
            Program() {
                // Ensure that this listener is the last in `Program:exit` listeners
                // even if this rule was initialized before other rules.
                linter.on("Program:exit", report)
            },
            "Program:exit"() {
                // Ensure that at least one Program:exit listener exists so that the report listener will be called.
            },
        }
    },
}
