const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: "./dist/js/bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "postcss-loader", "sass-loader"]
        })
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        query: {
          presets: ["es2015"]
        }
      },
      {
        test: /\.(jpe?g|png|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: "url-loader?limit=100000"
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("./dist/css/style.css"),
    new BrowserSyncPlugin({
      proxy: "localhost/upgrade-test",
      port: 3000,
      files: ["**/*.html"],
      ghostMode: {
        clicks: false,
        location: false,
        forms: false,
        scroll: false
      },
      injectChanges: true,
      logFileChanges: true,
      logLevel: "debug",
      logPrefix: "wepback",
      notify: true,
      reloadDelay: 0
    })
  ],
  watch: true
};
