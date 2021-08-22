const { merge } = require('webpack-merge')

var config = require("./config/webpack.defaults.js")

// Add any overrides to the default webpack config here:
//
// Eg:
//
//  ```
//    const path = require("path")
//    config.resolve.modules.push(path.resolve(__dirname, 'frontend', 'components'))
//    config.resolve.alias.frontendComponents = path.resolve(__dirname, 'frontend', 'components')
//  ```
//
// You can also merge in a custom config using the included `webpack-merge` package.
// Complete docs available at: https://github.com/survivejs/webpack-merge
//
// Eg:
//
//  ```
//    const customConfig = { ..... }
//    config = merge(config, customConfig)
//  ```

const StylelintPlugin = require('stylelint-webpack-plugin');
const path = require("path");
const rootDir = path.resolve(__dirname, "..")

config.plugins.push(
    new StylelintPlugin({fileName: path.resolve(rootDir, ".stylelintrc.json")})
)

////////////////////////////////////////////////////////

module.exports = config