/**
 * @author Toru Nagashima
 * @copyright 2016 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const escapeStringRegexp = require("escape-string-regexp")
const pkg = require("../package")

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const LINE_PATTERN = /[^\r\n\u2028\u2029]*(?:\r\n|[\r\n\u2028\u2029]|$)/g
const REPO_URL = "https://github.com/mysticatea/eslint-plugin-eslint-comments"

//------------------------------------------------------------------------------
// Exports
//------------------------------------------------------------------------------

module.exports = {
    /**
     * Make the location ignoring `eslint-disable` comments.
     *
     * @param {object} location - The location to convert.
     * @returns {object} Converted location.
     */
    toForceLocation(location) {
        return {
            start: {
                line: location.start.line,
                column: -1,
            },
            end: location.end,
        }
    },

    /**
     * Calculate the location of the given rule in the given comment token.
     *
     * @param {Token} comment - The comment token to calculate.
     * @param {string|null} ruleId - The rule name to calculate.
     * @returns {object} The location of the given information.
     */
    toRuleIdLocation(comment, ruleId) {
        if (ruleId == null) {
            return module.exports.toForceLocation(comment.loc)
        }

        const lines = comment.value.match(LINE_PATTERN)
        const ruleIdPattern = new RegExp(
            `([\\s,]|^)${escapeStringRegexp(ruleId)}(?:[\\s,]|$)`
        )

        {
            const m = ruleIdPattern.exec(lines[0])
            if (m != null) {
                const start = comment.loc.start
                return {
                    start: {
                        line: start.line,
                        column: 2 + start.column + m.index + m[1].length,
                    },
                    end: {
                        line: start.line,
                        column: 2 + start.column + m.index + m[1].length +
                                ruleId.length,
                    },
                }
            }
        }

        for (let i = 1; i < lines.length; ++i) {
            const m = ruleIdPattern.exec(lines[i])
            if (m != null) {
                const start = comment.loc.start
                return {
                    start: {
                        line: start.line + i,
                        column: m.index + m[1].length,
                    },
                    end: {
                        line: start.line + i,
                        column: m.index + m[1].length + ruleId.length,
                    },
                }
            }
        }

        /*istanbul ignore next : foolproof */
        return comment.loc
    },

    /**
     * Checks `a` is less than `b` or `a` equals `b`.
     *
     * @param {{line: number, column: number}} a - A location to compare.
     * @param {{line: number, column: number}} b - Another location to compare.
     * @returns {boolean} `true` if `a` is less than `b` or `a` equals `b`.
     */
    lte(a, b) {
        return a.line < b.line || (a.line === b.line && a.column <= b.column)
    },

    /**
     * Generates the URL to documentation for the given rule name. It uses the
     * package version to build the link to a tagged version of the
     * documentation file.
     *
     * @param {string} ruleName - Name of the eslint rule
     * @returns {string} URL to the documentation for the given rule
     */
    getDocsUrl(ruleName) {
        return `${REPO_URL}/blob/v${pkg.version}/docs/rules/${ruleName}.md`
    },
}
