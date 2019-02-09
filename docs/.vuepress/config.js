"use strict"

const { withCategories } = require("../../scripts/lib/rules")
require("../../scripts/update-docs-headers")
require("../../scripts/update-docs-index")

module.exports = {
    base: "/eslint-plugin-eslint-comments/",
    title: "eslint-plugin-eslint-comments",
    description: "Additional ESLint rules for ESLint directive comments.",
    evergreen: true,

    plugins: {
        "@vuepress/google-analytics": { ga: "UA-12936571-6" },
        "@vuepress/last-updated": {},
        "@vuepress/pwa": { updatePopup: true },
    },

    themeConfig: {
        repo: "mysticatea/eslint-plugin-eslint-comments",
        docsRepo: "mysticatea/eslint-plugin-eslint-comments",
        docsDir: "docs",
        docsBranch: "master",
        editLinks: true,
        search: false,

        nav: [
            {
                text: "Changelog",
                link:
                    "https://github.com/mysticatea/eslint-plugin-eslint-comments/releases",
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
