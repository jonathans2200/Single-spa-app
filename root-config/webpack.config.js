const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackAssetsManifest = require('webpack-assets-manifest');

module.exports = (webpackConfigEnv, argv) => {
  const orgName = "ups";
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName: "root-config",
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true,
  });

  return merge(defaultConfig, {
    output: {
      filename: '[name].[contenthash].js',
      publicPath: '/',
    },
    devServer: {
      port: 9000,
      compress: true,
      historyApiFallback: true,
      proxy: {
        '/api': {
          target: 'http://185.209.230.19:8081',
          pathRewrite: {'^/api' : ''},
          changeOrigin: true,
          secure: false,
          logLevel: 'debug'
        }
      }
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: false,
        template: "src/index.ejs",
        templateParameters: {
          isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
          orgName,
        },
      }),
      new WebpackAssetsManifest({
        output: 'asset-manifest.json',
        writeToDisk: true,
        publicPath: true,
      }),
    ],
    externals: ["single-spa"],
  });
};