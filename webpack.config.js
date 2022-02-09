//const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // installed via npm
const path = require('path');
//const HtmlWebpackPlugin = require('html-webpack-plugin');
//require("@babel/polyfill");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const webpack = require("webpack-dev-server");


module.exports = {
  mode: "production",
  /*
  entry: {
    polyfill: '@babel/polyfill',
    app: "./src/index.js"
  },*/
  entry:{
      polyfill: './assets/js/Others/polyfills',
      index:['./assets/js/settings/settings.js','./assets/js/sections/sectionContents.js',
      './assets/js/form/validationForm.js','./assets/js/mail/sendMail.js','./assets/js/main.js'],

},

  plugins: [
    new MiniCssExtractPlugin({filename:"[name].css"}),
    //new HtmlWebpackPlugin({minify: false}) /*Update the html file after modify the entry.*/,
 ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, /*Clean the output dist folder*/
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
        {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'postcss-loader', // post process the compiled CSS
                'sass-loader' // compiles Sass to CSS, using Node Sass by default
            ]
        },
        // For newer versions of Webpack it should be
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i, 
          //loader: 'file-loader',
          type: 'asset/resource'
          /*
          options: {
            name: '/public/icons/[name].[ext]'
          }*/
        }
    ]
  },
  /*
  plugins: [
    //new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    //new HtmlWebpackPlugin({ template: './src/index.html' }),
],*/
  optimization: {
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
        new CssMinimizerPlugin(),
       new TerserPlugin(),//Minify output js file.
        /*new TerserPlugin({
            test: /\.js(\?.*)?$/i,
        })
         */
    ],
      minimize: true,
  },
    devServer:{
      contentBase : path.resolve(__dirname, "test"),
        writeToDisk: false,
        hot:true,
        port: 3000
    },
  
};