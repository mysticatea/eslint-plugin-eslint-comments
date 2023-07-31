/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const semver = require("semver")
const { Linter, RuleTester } = require("eslint")
const rule = require("../../../lib/rules/no-aggregating-enable")
const tester = new RuleTester()

tester.run("no-aggregating-enable", rule, {
    valid: [
        `
            /*eslint-disable no-redeclare*/
            /*eslint-enable no-redeclare*/
        `,
        `
            /*eslint-disable no-redeclare*/
            /*eslint-enable no-shadow*/
        `,
        `
            /*eslint-disable no-redeclare, no-shadow*/
            /*eslint-enable*/
        `,
        `
            /*eslint-disable no-redeclare, no-shadow*/
            /*eslint-enable no-redeclare, no-shadow*/
        `,
        `
            /*eslint-disable no-redeclare, no-shadow*/
            /*eslint-enable no-redeclare*/
            /*eslint-enable no-shadow*/
        `,
    ],
    invalid: [
        {
            code: `
                /*eslint-disable no-redeclare*/
                /*eslint-disable no-shadow*/
                /*eslint-enable*/
            `,
            errors: [
                "This `eslint-enable` comment affects 2 `eslint-disable` comments. An `eslint-enable` comment should be for an `eslint-disable` comment.",
            ],
        },
        {
            code: `
                /*eslint-disable no-redeclare*/
                /*eslint-disable no-shadow*/
                /*eslint-disable no-undef*/
                /*eslint-enable*/
            `,
            errors: [
                "This `eslint-enable` comment affects 3 `eslint-disable` comments. An `eslint-enable` comment should be for an `eslint-disable` comment.",
            ],
        },
        {
            code: `
                /*eslint-disable no-redeclare*/
                /*eslint-disable no-shadow*/
                /*eslint-enable no-redeclare, no-shadow*/
            `,
            errors: [
                "This `eslint-enable` comment affects 2 `eslint-disable` comments. An `eslint-enable` comment should be for an `eslint-disable` comment.",
            ],
        },
        // -- description
        ...(semver.satisfies(Linter.version, ">=7.0.0")
            ? [
                  {
                      code: `
                /*eslint-disable no-redeclare*/
                /*eslint-disable no-shadow*/
                /*eslint-enable -- description*/
            `,
                      errors: [
                          "This `eslint-enable` comment affects 2 `eslint-disable` comments. An `eslint-enable` comment should be for an `eslint-disable` comment.",
                      ],
                  },
              ]
            : []),
    ],
})
