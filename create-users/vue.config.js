module.exports = {
  configureWebpack: {
    output: {
      libraryTarget: 'system',
      filename: '[name].[contenthash].js',
      chunkFilename: '[name].[contenthash].js',
    },
    devServer: {
      port: 3001,
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    },
  },
  filenameHashing: true,
  css: {
    extract: {
      filename: '[name].[contenthash].css',
      chunkFilename: '[name].[contenthash].css',
    },
  },
};