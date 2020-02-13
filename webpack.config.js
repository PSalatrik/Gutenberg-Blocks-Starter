const autoprefixer = require("autoprefixer");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
  function isDevelopment() {
    return argv.mode === "development";
  }

  var config = {
    entry: {
      editor: "./src/editor.js",
      script: "./src/script.js"
    },
    output: {
      filename: "[name].js"
    },
    plugins: [
      new MiniCSSExtractPlugin({
        filename: "[name].css"
        // chunkFilename: '[id].css',
        // filename: (chunkData) => {
        // 	return chunkData.chunk.name === 'script' ? 'style.css' : '[name].css';
        // }
      })
    ],
    devtool: isDevelopment() ? "cheep-module-eval-source-map" : "source-map",
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                [
                  "@babel/preset-react",
                  {
                    pragma: "React.createElement",
                    pregmaFrag: "React.Fragment",
                    development: isDevelopment()
                  }
                ]
              ]
            }
          }
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            MiniCSSExtractPlugin.loader,
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                plugins: [autoprefixer()]
              }
            },
            "sass-loader"
          ]
        }
      ]
    },
    externals: {
      jquery: "jQuery",
      "@wordpress/blocks": ["wp", "blocks"],
      "@wordpress/i18n": ["wp", "i18n"]
    }
  };
  return config;
};
