"use strict"

const { withCategories } = require("../../scripts/lib/rules")
require("../../scripts/update-docs-headers")
require("../../scripts/update-docs-index")

module.exports = {
    base: "/eslint-plugin-eslint-comments/",
    title: "@eslint-community/eslint-plugin-eslint-comments",
    description: "Additional ESLint rules for ESLint directive comments.",
    evergreen: true,

    plugins: {
        "@vuepress/pwa": { updatePopup: true },
    },

    themeConfig: {
        repo: "eslint-community/eslint-plugin-eslint-comments",
        docsRepo: "eslint-community/eslint-plugin-eslint-comments",
        docsDir: "docs",
        docsBranch: "main",
        editLinks: true,
        search: false,

        nav: [
            {
                text: "Changelog",
                link:
                    "https://github.com/eslint-community/eslint-plugin-eslint-comments/releases",
            },
        ],

        sidebarDepth: 0,
        sidebar: {
            "/": [
                "/",
                "/rules/",
                ...withCategories.map(({ category, rules }) => ({
                    title: `Rules in ${category}`,
                    collapsable: false,
                    children: rules.map(rule => `/rules/${rule.name}`),
                })),
            ],
        },
    },

    configureWebpack: {
        module: {
            rules: [
                {
                    test: /internal[\\/]get-linters\.js$/u,
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
