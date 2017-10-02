/**
 * @author Toru Nagashima
 * @copyright 2016 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const utils = require("./utils")

//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------

const COMMENT_DIRECTIVE = /^\s*(eslint-(?:en|dis)able(?:(?:-next)?-line)?)\s*(?:(\S[\s\S]+\S)\s*)?$/
const DELIMITER = /[\s,]+/g
const pool = new WeakMap()

//------------------------------------------------------------------------------
// Exports
//------------------------------------------------------------------------------

module.exports = class DisabledArea {
    /**
     * Get singleton instance for the given source code.
     *
     * @param {eslint.SourceCode} sourceCode - The source code to get.
     * @returns {DisabledArea} The singleton object for the source code.
     */
    static get(sourceCode) {
        let retv = pool.get(sourceCode.ast)

        if (retv == null) {
            retv = new DisabledArea()
            retv._scan(sourceCode)
            pool.set(sourceCode.ast, retv)
        }

        return retv
    }

    /**
     * Constructor.
     */
    constructor() {
        this.areas = []
        this.duplicateDisableDirectives = []
        this.unusedEnableDirectives = []
    }

    /**
     * Make disabled area.
     *
     * @param {Token} comment - The comment token to disable.
     * @param {object} location - The start location to disable.
     * @param {string[]|null} ruleIds - The ruleId names to disable.
     * @param {string} kind - The kind of disable-comments to show in reports.
     * @returns {void}
     * @private
     */
    _disable(comment, location, ruleIds, kind) {
        if (ruleIds) {
            for (const ruleId of ruleIds) {
                if (this._getArea(ruleId, location) != null) {
                    this.duplicateDisableDirectives.push({
                        comment,
                        ruleId,
                        kind,
                    })
                }

                this.areas.push({
                    comment,
                    ruleId,
                    kind,
                    start: location,
                    end: null,
                    reported: false,
                })
            }
        }
        else {
            if (this._getArea(null, location) != null) {
                this.duplicateDisableDirectives.push({
                    comment,
                    ruleId: null,
                    kind,
                })
            }

            this.areas.push({
                comment,
                ruleId: null,
                kind,
                start: location,
                end: null,
                reported: false,
            })
        }
    }

    /**
     * Close disabled area.
     *
     * @param {Token} comment - The comment token to enable.
     * @param {object} location - The start location to enable.
     * @param {string[]|null} ruleIds - The ruleId names to enable.
     * @returns {void}
     * @private
     */
    _enable(comment, location, ruleIds) {
        if (ruleIds) {
            for (const ruleId of ruleIds) {
                let used = false

                for (let i = this.areas.length - 1; i >= 0; --i) {
                    const area = this.areas[i]

                    if (area.end === null && area.ruleId === ruleId) {
                        area.end = location
                        used = true
                        break
                    }
                }

                if (!used) {
                    this.unusedEnableDirectives.push({ comment, ruleId })
                }
            }
        }
        else {
            let start = null

            for (let i = this.areas.length - 1; i >= 0; --i) {
                const area = this.areas[i]

                if (start !== null && area.start !== start) {
                    break
                }
                if (area.end === null) {
                    area.end = location
                    start = area.start
                }
            }

            if (start === null) {
                this.unusedEnableDirectives.push({ comment, ruleId: null })
            }
        }
    }

    /**
     * Gets the area of the given ruleId and location.
     *
     * @param {string|null} ruleId - The ruleId name to get.
     * @param {object} location - The location to get.
     * @returns {object|null} The area of the given ruleId and location.
     * @private
     */
    _getArea(ruleId, location) {
        for (let i = this.areas.length - 1; i >= 0; --i) {
            const area = this.areas[i]

            if ((area.ruleId === null || area.ruleId === ruleId) &&
                utils.lte(area.start, location) &&
                (area.end === null || utils.lte(location, area.end))
            ) {
                return area
            }
        }

        return null
    }

    /**
     * Scan the souce code and setup disabled area list.
     *
     * @param {eslint.SourceCode} sourceCode - The source code to scan.
     * @returns {void}
     * @private
     */
    _scan(sourceCode) {
        for (const comment of sourceCode.getAllComments()) {
            const m = COMMENT_DIRECTIVE.exec(comment.value)
            if (m == null) {
                continue
            }
            const kind = m[1]
            const ruleIds = m[2] ? m[2].split(DELIMITER) : null

            if (comment.type === "Block" && kind === "eslint-disable") {
                this._disable(comment, comment.loc.start, ruleIds, kind)
            }
            else if (comment.type === "Block" && kind === "eslint-enable") {
                this._enable(comment, comment.loc.start, ruleIds)
            }
            else if (
                comment.type === "Line" &&
                kind === "eslint-disable-line"
            ) {
                const line = comment.loc.start.line
                const start = { line, column: 0 }
                const end = { line: line + 1, column: -1 }

                this._disable(comment, start, ruleIds, kind)
                this._enable(comment, end, ruleIds)
            }
            else if (
                comment.type === "Line" &&
                kind === "eslint-disable-next-line"
            ) {
                const line = comment.loc.start.line
                const start = { line: line + 1, column: 0 }
                const end = { line: line + 2, column: -1 }

                this._disable(comment, start, ruleIds, kind)
                this._enable(comment, end, ruleIds)
            }
        }
    }

    /**
     * Mark the area of the given ruleId and location as reported.
     *
     * @param {string} ruleId - The ruleId name to mark.
     * @param {object} location - The location to mark.
     * @returns {void}
     */
    report(ruleId, location) {
        const area = this._getArea(ruleId, location)
        if (area != null) {
            area.reported = true
        }
    }
}
