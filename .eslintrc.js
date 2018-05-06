/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const { version } = require("./package.json")

module.exports = {
    extends: ["plugin:mysticatea/es2015", "plugin:mysticatea/+eslint-plugin"],
    overrides: [
        {
            files: ["**/rules/**"],
            rules: {
                "mysticatea/eslint-plugin/require-meta-docs-url": [
                    "error",
                    {
                        pattern: `https://github.com/mysticatea/eslint-plugin-eslint-comments/blob/v${version}/docs/rules/{{name}}.md`,
                    },
                ],
            },
        },
    ],
}
