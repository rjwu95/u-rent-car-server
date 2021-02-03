var nodeExternals = require("webpack-node-externals");
var path = require("path");

module.exports = {
  // Change to your "entry-point".
  entry: ["@babel/polyfill", "./src/server"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.bundle.js",
  },
  target: "node",
  externals: [nodeExternals()],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        // Include ts, tsx, js, and jsx files.
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [
              "@babel/plugin-proposal-object-rest-spread",
              "@babel/plugin-proposal-export-default-from",
            ],
          },
        },
      },
    ],
  },
};
