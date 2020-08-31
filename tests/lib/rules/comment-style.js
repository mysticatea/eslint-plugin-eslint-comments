/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const RuleTester = require("eslint").RuleTester
const rule = require("../../../lib/rules/comment-style")
const tester = new RuleTester()

tester.run("comment-style", rule, {
    valid: [
        "// eslint-disable-line",
        "// eslint-disable-next-line",
        "// eslint-disable-line semi",
        "// eslint-disable-next-line semi",
        {
            code: "<div>{/* eslint-disable-line */}</div>",
            parserOptions: { ecmaFeatures: { jsx: true } },
        },
        {
            code: "<div>{/* eslint-disable-line-next */}</div>",
            parserOptions: { ecmaFeatures: { jsx: true } },
        },
        {
            code: "<div>{/* eslint-disable-line semi */}</div>",
            parserOptions: { ecmaFeatures: { jsx: true } },
        },
        {
            code: "<div>{/* eslint-disable-line-next semi */}</div>",
            parserOptions: { ecmaFeatures: { jsx: true } },
        },
    ],
    invalid: [
        {
            code: "/* eslint-disable-next-line */",
            output: "// eslint-disable-next-line",
            errors: ["Expected a line comment."],
        },
        {
            code: "/* eslint-disable-next-line semi */",
            output: "// eslint-disable-next-line semi",
            errors: ["Expected a line comment."],
        },
        {
            code: "/* eslint-disable-line semi */",
            output: "// eslint-disable-line semi",
            errors: ["Expected a line comment."],
        },
    ],
})
