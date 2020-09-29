module.exports = function generateBabelConfig(api) {
  api.cache(false)

  return {
    presets: [
      ['@babel/preset-env', { modules: process.env.BABEL_ENV || false }],
      '@babel/preset-react',
      '@babel/preset-typescript',
    ],
    plugins: [
      'babel-plugin-styled-components',
      '@babel/plugin-proposal-export-default-from',
    ],
  }
}
