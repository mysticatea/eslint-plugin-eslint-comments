/**
 * @author Toru Nagashima
 * @copyright 2016 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

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
}
