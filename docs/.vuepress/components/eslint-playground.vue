<template>
    <eslint-editor
        :linter="linter"
        :config="config"
        :code="code"
        :class="`eslint-playground-${type}`"
        class="eslint-playground"
        dark
        fix
    />
</template>

<script>
// https://github.com/vuejs/vuepress/issues/451
import EslintEditor from "../../../node_modules/vue-eslint-editor"
import { rules } from "../../../"

export default {
    name: "ESLintPlayground",
    components: { EslintEditor },

    props: {
        code: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
            validator(value) {
                return value === "bad" || value === "good"
            },
        },
        reportUnusedDisable: {
            type: Boolean,
            default: false,
        },
    },

    data() {
        return {
            linter: null,
        }
    },

    computed: {
        config() {
            const config = {
                globals: {
                    // ES2015 globals
                    ArrayBuffer: false,
                    DataView: false,
                    Float32Array: false,
                    Float64Array: false,
                    Int16Array: false,
                    Int32Array: false,
                    Int8Array: false,
                    Map: false,
                    Promise: false,
                    Proxy: false,
                    Reflect: false,
                    Set: false,
                    Symbol: false,
                    Uint16Array: false,
                    Uint32Array: false,
                    Uint8Array: false,
                    Uint8ClampedArray: false,
                    WeakMap: false,
                    WeakSet: false,
                    // ES2017 globals
                    Atomics: false,
                    SharedArrayBuffer: false,
                },
                rules: {},
                parserOptions: {
                    ecmaVersion: 2018,
                    sourceType: "module",
                },
            }

            if (this.reportUnusedDisable) {
                config.rules["eslint-comments/no-unused-disable"] = "error"
            }

            return config
        },
    },

    async mounted() {
        // Load linter.
        const { default: Linter } = await import("eslint4b")
        const linter = (this.linter = new Linter())

        for (const ruleId of Object.keys(rules)) {
            linter.defineRule(`eslint-comments/${ruleId}`, rules[ruleId])
        }
    },
}
</script>

<style>
.eslint-playground {
    width: 100%;
    min-height: 160px;
    margin-bottom: 8px;
    box-sizing: border-box;
    border: 1.5px solid gray;
}
.eslint-playground-good {
    border-color: #4caf50;
}
.eslint-playground-bad {
    border-color: #f44336;
}
</style>
