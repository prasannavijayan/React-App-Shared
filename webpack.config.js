// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require('webpack').container;

const isProduction = process.env.NODE_ENV == "production";

const config = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    open: true,
    host: "localhost",
    static: path.resolve(__dirname, "public/"),
    port: 8080,
    hot: true,
    historyApiFallback: true
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'app',
      filename: 'remoteEntry.js',
      exposes: {
        './Starwars': './src/App',
      },
      shared: { react: { singleton: true }, 'react-dom': { singleton: true } },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: "babel-loader",
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};