/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
"use strict"

const rules = require("../../scripts/lib/rules")
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

        nav: [
            { text: "Guide", link: "/guide/getting-started" },
            { text: "Rules", link: "/rules/" },
        ],

        sidebarDepth: 0,
        sidebar: [
            {
                title: "Guide",
                collapsable: false,
                children: ["/", "/guide/getting-started"],
            },
            {
                title: "Rules",
                collapsable: false,
                children: [
                    "/rules/",
                    ...rules.map(({ id, name }) => [`/rules/${name}`, id]),
                ],
            },
        ],
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
