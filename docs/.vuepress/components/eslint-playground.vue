<template>
    <eslint-editor
        :linter="linter"
        :config="config"
        :code="code"
        :class="`eslint-playground-${type}`"
        :style="{ height }"
        class="eslint-playground"
        dark
    />
</template>

<script>
// https://github.com/vuejs/vuepress/issues/451
import EslintEditor from "../../../node_modules/vue-eslint-editor/dist/index.vue"
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
                config.rules[
                    "@eslint-community/eslint-comments/no-unused-disable"
                ] = "error"
            }

            return config
        },

        height() {
            const numLines = this.code.split("\n").length
            return `${numLines * 20 + 10}px`
        },
    },

    async mounted() {
        // Load linter.
        const { Linter } = await import("eslint/lib/linter")
        const linter = (this.linter = new Linter())

        for (const ruleId of Object.keys(rules)) {
            linter.defineRule(
                `@eslint-community/eslint-comments/${ruleId}`,
                rules[ruleId]
            )
        }
    },
}
</script>

<style>
.eslint-playground {
    width: 100%;
    margin-bottom: 8px;
    box-sizing: border-box;
    border: 2px solid gray;
    border-radius: 3px;
}
.eslint-playground-good {
    border-color: #4caf50;
}
.eslint-playground-bad {
    border-color: #f44336;
}
</style>
