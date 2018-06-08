/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const { withCategories } = require("../../scripts/lib/rules")
require("../../scripts/update-docs-headers")
require("../../scripts/update-docs-index")

module.exports = {
    base: "/eslint-plugin-eslint-comments/",
    title: "eslint-plugin-eslint-comments",
    description: "ESLint plugin about ECMAScript syntax.",
    serviceWorker: true,
    ga: "UA-12936571-6",
    evergreen: true,

    themeConfig: {
        repo: "mysticatea/eslint-plugin-eslint-comments",
        docsRepo: "mysticatea/eslint-plugin-eslint-comments",
        docsDir: "docs",
        docsBranch: "master",
        editLinks: true,
        lastUpdated: true,
        serviceWorker: {
            updatePopup: true,
        },

        nav: [{ text: "Guide", link: "/" }, { text: "Rules", link: "/rules/" }],

        sidebarDepth: 0,
        sidebar: {
            "/rules/": [
                "/rules/",
                ...withCategories.map(({ category, rules }) => ({
                    title: category,
                    collapsable: false,
                    children: rules.map(rule => [
                        `/rules/${rule.name}`,
                        rule.id,
                    ]),
                })),
            ],
            "/": ["/", "/getting-started", "/rules/"],
        },
    },

    configureWebpack: {
        module: {
            rules: [
                {
                    test: new RegExp(String.raw`internal[\\/]get-linters\.js$`),
                    loader: "string-replace-loader",
                    options: {
                        search: "[\\s\\S]+", // whole file.
                        replace:
                            'module.exports = () => [require("eslint4b/dist/linter")]',
                        flags: "g",
                    },
                },
            ],
        },
    },
}
