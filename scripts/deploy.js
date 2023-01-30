"use strict"

const { spawn } = require("child_process")
const path = require("path")
const fs = require("fs-extra")
const GH_TOKEN = process.argv[2]
const BUILD_ROOT = path.resolve(__dirname, "../docs/.vuepress/dist")
const DEPLOY_ROOT = path.resolve(__dirname, "..")

/**
 * Execute a command.
 * @param {string} command The command to execute.
 * @returns {Promise<void>}
 */
function exec(command) {
    console.log(`> ${command.replace(GH_TOKEN, "****")}`)
    return new Promise((resolve, reject) => {
        const cp = spawn(command, [], { shell: true, stdio: "inherit" })

        cp.on("close", code => {
            if (code) {
                reject(new Error(`Exited with ${code}.`))
            } else {
                resolve()
            }
        })
    })
}

//eslint-disable-next-line @mysticatea/node/no-unsupported-features/es-syntax
;(async () => {
    // Checkout.
    await exec("git fetch origin gh-pages")
    await exec("git checkout gh-pages")

    // Clean.
    for (const filename of await fs.readdir(DEPLOY_ROOT)) {
        if (filename === "docs" || filename.startsWith(".")) {
            continue
        }

        console.log(`> rm -rf ${filename}`)
        await fs.remove(filename)
    }

    // Move.
    for (const filename of await fs.readdir(BUILD_ROOT)) {
        console.log(`> mv docs/.vuepress/dist/${filename} ${filename}`)
        await fs.rename(
            path.join(BUILD_ROOT, filename),
            path.join(DEPLOY_ROOT, filename)
        )
    }

    // Commit.
    await exec('git config --global user.email "public@mysticatea.dev"')
    await exec('git config --global user.name "Toru Nagashima"')
    await exec("git add -A")
    let updated = false
    try {
        await exec('git commit -m "Update: website"')
        updated = true
    } catch (_error) {
        console.log("NO UPDATE")
    }

    // Push.
    if (updated) {
        await exec(
            `git push https://mysticatea:${GH_TOKEN}@github.com/eslint-community/eslint-plugin-eslint-comments.git gh-pages:gh-pages`
        )
    }
})().catch(error => {
    console.error(error.stack)
    process.exitCode = 1
})
