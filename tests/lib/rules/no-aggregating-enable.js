/**
 * @author Toru Nagashima
 * @copyright 2016 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const RuleTester = require("eslint").RuleTester
const rule = require("../../../lib/rules/no-aggregating-enable")

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const tester = new RuleTester()

tester.run("no-aggregating-enable", rule, {
    valid: [
        `
            /*eslint-disable a*/
            /*eslint-enable a*/
        `,
        `
            /*eslint-disable a*/
            /*eslint-enable b*/
        `,
        `
            /*eslint-disable a, b*/
            /*eslint-enable*/
        `,
        `
            /*eslint-disable a, b*/
            /*eslint-enable a, b*/
        `,
        `
            /*eslint-disable a, b*/
            /*eslint-enable a*/
            /*eslint-enable b*/
        `,
    ],
    invalid: [
        {
            code: `
                /*eslint-disable a*/
                /*eslint-disable b*/
                /*eslint-enable*/
            `,
            errors: ["This `eslint-enable` comment affects 2 `eslint-disable` comments. An `eslint-enable` comment should be for an `eslint-disable` comment."],
        },
        {
            code: `
                /*eslint-disable a*/
                /*eslint-disable b*/
                /*eslint-disable c*/
                /*eslint-enable*/
            `,
            errors: ["This `eslint-enable` comment affects 3 `eslint-disable` comments. An `eslint-enable` comment should be for an `eslint-disable` comment."],
        },
        {
            code: `
                /*eslint-disable a*/
                /*eslint-disable b*/
                /*eslint-enable a, b*/
            `,
            errors: ["This `eslint-enable` comment affects 2 `eslint-disable` comments. An `eslint-enable` comment should be for an `eslint-disable` comment."],
        },
    ],
})
