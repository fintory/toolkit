/* eslint-disable flowtype/require-return-type */

module.exports = function generateBabelConfig(api) {
  api.cache(false)

  return {
    presets: [
      ['@babel/preset-env', { modules: process.env.BABEL_ENV || false }],
      '@babel/preset-react',
      '@babel/preset-flow',
    ],
    plugins: [
      '@babel/plugin-transform-runtime',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-transform-object-assign',
      'babel-plugin-styled-components',
      'babel-plugin-polished',
    ],
  }
}
