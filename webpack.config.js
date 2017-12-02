const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractPlugin = new ExtractTextPlugin({
  filename: "main.css"
});

const DIST_DIR = path.resolve(__dirname, "dist");
const SRC_DIR = path.resolve(__dirname, "src");

const config = {
  entry: SRC_DIR + "/app/index.js",
  output: {
    path: DIST_DIR + "/app",
    filename: "bundle.js",
    publicPath: "/app/"
  },
  module: {
    loaders: [
      {
         test: /\.js$/,
         include: SRC_DIR,
         loader: "babel-loader",
         query: {
           presets: ["react","es2015","stage-2"]
         }
      },
      {
        test: /\.scss$/,
      use: extractPlugin.extract({
        use: ["css-loader", "sass-loader",]
      })
    }
    ]
  },
  plugins: [
    extractPlugin
  ]
};

module.exports = config;
