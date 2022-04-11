const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common.js')

module.exports = (envVars) => {
  const { env } = envVars
  const envConfig = require(`./webpack.config.${env}.js`)
  const config = merge(commonConfig, envConfig)
  return config
}
