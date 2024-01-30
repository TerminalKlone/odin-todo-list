const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

moduels.export = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                // CSS
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    plugins: [new HtmlWebpackPlugin()],
};