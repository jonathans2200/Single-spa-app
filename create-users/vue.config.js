module.exports = {
  configureWebpack: {
    output: {
      libraryTarget: 'system',
      filename: 'js/[name].js',
      chunkFilename: 'js/[name].js',
    },
    devServer: {
      port: 3001,
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    },
  },
  filenameHashing: false,
  css: {
    extract: {
      filename: 'css/[name].css',
      chunkFilename: 'css/[name].css',
    },
  },
};