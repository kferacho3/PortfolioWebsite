const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.bundle.js',
        
    },
    devServer:{
        static: path.resolve(__dirname, 'src'),
        port: 3050,
        open: true,
        hot: true
    },
    
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },

            {
              test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2|mp4)$/,
              loader: "url-loader",
              options: {
                limit: 8192,
                fallback: "file-loader",
            
                // fallback options
                name: '[name].[hash].[ext]',
                outputPath: 'images/css-urls/',
              },
            },
             
            {
              test: /\.scss$/,
              use: [
                  MiniCssExtractPlugin.loader,
                  'css-loader',
                  'sass-loader',
              ],
          },
            
        
        ]
    },
    plugins: [new MiniCssExtractPlugin()]
};