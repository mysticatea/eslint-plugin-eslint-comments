"use strict"

const path = require("path")
const webpack = require("webpack")
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
                link: "https://github.com/eslint-community/eslint-plugin-eslint-comments/releases",
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
                    children: rules.map((rule) => `/rules/${rule.name}`),
                })),
            ],
        },
    },

    enhanceAppFiles: require.resolve("./enhanceApp.mjs"),
    configureWebpack: {
        plugins: [
            new webpack.DefinePlugin({
                "process.env.TIMING": JSON.stringify(""),
            }),
        ],
        resolve: {
            alias: {
                esquery: path.resolve(
                    __dirname,
                    "../../node_modules/esquery/dist/esquery.min.js"
                ),
                "@eslint/eslintrc/universal": path.resolve(
                    __dirname,
                    "../../node_modules/@eslint/eslintrc/dist/eslintrc-universal.cjs"
                ),
            },
        },
        module: {
            rules: [
                {
                    test: /internal[\\/]get-linters\.js$/u,
                    loader: "string-replace-loader",
                    options: {
                        search: "[\\s\\S]+", // whole file.
                        replace:
                            'module.exports = () => [require("eslint/lib/linter").Linter]',
                        flags: "g",
                    },
                },
            ],
        },
    },
}
