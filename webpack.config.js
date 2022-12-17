const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/js/main.js",
    logo: "./src/js/logo.js",
    advice: "./src/js/advice.js",
  },
  output: {
    clean: true,
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "docs"),
  },
  mode: "development",
  devtool: "source-map",
  target: ["web", "es5"],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.m?js$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack App",
      filename: "index.html",
      template: "./src/index.html",
      hash: true,
      chunks: ["main", "logo"],
    }),
    new HtmlWebpackPlugin({
      title: "Webpack Help",
      filename: "help.html",
      template: "./src/help.html",
      hash: true,
      chunks: ["main", "logo", "advice"],
    }),
    new FaviconsWebpackPlugin({
      logo: "./src/images/favicon/favicon.png",
      mode: "webapp",
      devMode: "webapp",
      favicons: {
        appName: "Webpack App",
        appDescription: "Working by webpack",
        developerName: "James Alderson",
        developerURL: null,
        background: "#fff",
        theme_color: "#fff",
        icons: {
          appleStartup: false,
          yandex: false,
        },
      },
    }),
  ],
};
