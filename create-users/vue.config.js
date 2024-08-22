module.exports = {
  configureWebpack: {
    output: {
      libraryTarget: 'system',
    },
    devServer: {
      port: 3001,
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    },
  },
};