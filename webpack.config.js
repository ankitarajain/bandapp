const webpack = require("webpack");
const path = require("path");
const { CLIENTJS } = require("./settings.js");

const wbConfig = {
  entry: ["./src/index.jsx"],
  output: {
    path: __dirname + "/build",
    publicPath: "/assets/",
    filename: `bundle.js`
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        SERVER_PORT: JSON.stringify(process.env.SERVER_PORT),
        BUILD_VERSION: JSON.stringify(process.env.BUILD_VERSION),
        LIGHTSTEP_MANAGER_API: JSON.stringify(process.env.LIGHTSTEP_MANAGER_API)
      }
    })
  ],

  target: "web",

  resolve: {
    modules: ["node_modules", "client/src/**/*", "./"],
    extensions: [".js", ".jsx", ".json", ".less"]
  },

  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: ["babel-loader"] },
      { test: /\.less$/, use: ["style-loader", "css-loader", "less-loader"] },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "typed-css-modules-loader"]
      }
    ]
  }
};

module.exports = wbConfig;
