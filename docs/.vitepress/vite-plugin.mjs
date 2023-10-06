import path from "path"
import { fileURLToPath } from "url"
import esbuild from "esbuild"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const pluginRoot = path.join(__dirname, "../..")
const libRoot = path.join(pluginRoot, "lib")
const index = path.join(pluginRoot, "index.js")

export function vitePluginGetLinter() {
    return {
        name: "vite-plugin-get-linter",
        transform(_code, id, _options) {
            if (
                id.startsWith(libRoot) &&
                /internal[\\/]get-linters\.js$/u.test(id)
            ) {
                return 'module.exports = () => [require("eslint").Linter]'
            }
            return undefined
        },
    }
}

export function viteCommonjs() {
    return {
        name: "vite-plugin-cjs-to-esm",
        apply: () => true,
        transform(code, id) {
            if (!id.startsWith(libRoot) && !id.startsWith(index)) {
                return undefined
            }
            const base = transformRequire(code)
            try {
                // eslint-disable-next-line @eslint-community/mysticatea/node/no-sync
                const transformed = esbuild.transformSync(base, {
                    format: "esm",
                })
                return transformed.code
            } catch (e) {
                console.error(`Transform error. base code:\n${base}`, e)
            }
            return undefined
        },
    }
}

/**
 * Transform `require()` to `import`
 */
function transformRequire(code) {
    if (!code.includes("require")) {
        return code
    }
    const modules = new Map()
    const replaced = code.replace(
        /(\/\/[^\n\r]*|\/\*[\s\S]*?\*\/)|\brequire\s*\(\s*(["'].*?["'])\s*\)/gu,
        (match, comment, moduleString) => {
            if (comment) {
                return match
            }

            let id = `__${moduleString.replace(
                /[^a-zA-Z0-9_$]+/gu,
                "_"
            )}${Math.random().toString(32).substring(2)}`
            while (code.includes(id) || modules.has(id)) {
                id += Math.random().toString(32).substring(2)
            }
            modules.set(id, moduleString)
            return id
        }
    )

    return `${[...modules]
        .map(
            ([
                id,
                moduleString,
            ]) => `import * as __temp_${id} from ${moduleString};
const ${id} = __temp_${id}.default || __temp_${id};
`
        )
        .join("")};\n${replaced}`
}
