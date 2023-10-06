"use strict"

module.exports = {
    rules: {
        "n/no-missing-import": "off",
        "n/no-extraneous-import": "off",
        "n/file-extension-in-import": "off",
        "n/no-extraneous-require": "off",
    },
    globals: {
        window: "readonly",
        document: "readonly",
    },
    overrides: [
        {
            files: ["*.vue"],
            rules: {
                "vue/multiline-html-element-content-newline": "off",
                "vue/singleline-html-element-content-newline": "off",
                "vue/name-property-casing": "off",
                "vue/html-self-closing": "off",
                "vue/comma-dangle": "off",
            },
        },
    ],
}
