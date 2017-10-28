/**
 * @author Toru Nagashima
 * @copyright 2016 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

module.exports = {
    configs: {
        recommended: {
            plugins: ["eslint-comments"],
            rules: {
                "eslint-comments/disable-enable-pair": "error",
                "eslint-comments/no-aggregating-enable": "error",
                "eslint-comments/no-duplicate-disable": "error",
                "eslint-comments/no-restricted-disable": "off",
                "eslint-comments/no-unlimited-disable": "error",
                "eslint-comments/no-unused-disable": "error",
                "eslint-comments/no-unused-enable": "error",
                "eslint-comments/no-use": "off",
            },
        },
    },
    rules: {
        "disable-enable-pair": require("./lib/rules/disable-enable-pair"),
        "no-aggregating-enable": require("./lib/rules/no-aggregating-enable"),
        "no-duplicate-disable": require("./lib/rules/no-duplicate-disable"),
        "no-restricted-disable": require("./lib/rules/no-restricted-disable"),
        "no-unlimited-disable": require("./lib/rules/no-unlimited-disable"),
        "no-unused-disable": require("./lib/rules/no-unused-disable"),
        "no-unused-enable": require("./lib/rules/no-unused-enable"),
        "no-use": require("./lib/rules/no-use"),
    },
}
