const path = require('path');

module.exports = {
    mode: "development", 
    entry: "./scripts/build.js", 
    devtool:"eval-source-map",
    output: {
        path: path.resolve(__dirname, "dist"), 
        filename: "bundle.js", 
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
        ],
      },
}

