/**
 * @author Toru Nagashima
 * @copyright 2016 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const fs = require("fs")
const path = require("path")

//------------------------------------------------------------------------------
// Main
//------------------------------------------------------------------------------

fs.writeFileSync(path.resolve(__dirname, "../index.js"), `/**
 * @author Toru Nagashima
 * @copyright 2016 Toru Nagashima. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict"

module.exports = {
    rules: {
${
    fs.readdirSync(path.resolve(__dirname, "../lib/rules"))
        .map(fileName => path.basename(fileName, ".js"))
        .map(ruleId => `        "${ruleId}": require("./lib/rules/${ruleId}"),`)
        .join("\n")
}
    },
}
`)
