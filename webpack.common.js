const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { InjectManifest } = require('workbox-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: ["./src/index.js", "./src/styles/index.css"],
  optimization: {
    usedExports: true,
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".css", ".scss"]
  },
  output: {
    path: __dirname + "/build",
    publicPath: "/",
    filename: "bundle.js"
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      favicon: "./src/favicon.ico",
      meta: {
        description: 'A place to learn more about Brian!',
      },
    }),
    new InjectManifest({
      swSrc: './src/workers/sw.js',
      swDest: 'sw.js',
      include: [
        /\.html$/,
        /\.js$/,
        /\.jsx$/,
        /\.css$/,
        /\.woff2$/,
        /\.jpg$/,
        /\.png$/
      ],
    }),
    new ManifestPlugin({
      fileName: "./manifest.json",
      seed: {
        short_name: "BJNunez",
        name: "Learn more about Brian",
        icons: [
          {
            src: "./favicon.ico",
            sizes: "64x64 32x32 24x24 16x16",
            type: "image/x-icon"
          }
        ],
        start_url: ".",
        display: "standalone",
        theme_color: "#000000",
        background_color: "#ffffff"
      }
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
  ],
  devServer: {
    contentBase: "./build",
    hot: true,
    port: 3000,
    compress: true,
    historyApiFallback: true,
    before: function(app, server) {
      app.disable("x-powered-by");
    }
  }
};
