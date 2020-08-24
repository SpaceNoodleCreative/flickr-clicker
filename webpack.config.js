const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "none",
  entry: "./src/index.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 8080,
  },
  devtool: "cheap-module-eval-source-map",
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "./src/index.html", to: __dirname + "/dist" }],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
