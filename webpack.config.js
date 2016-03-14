var webpack = require('webpack');

// definePlugin takes raw strings and inserts them, so you can put strings of JS if you want.
// `BUILD_PRERELEASE=1 ./node_modules/webpack/bin/webpack.js`
var definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
  __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
});

module.exports = {
    entry:  {
        Demo: './src/index.js',
    },
    output: {
        path:     'builds',
        filename: '[name].js',
        publicPath: 'builds/',
    },
    plugins: [definePlugin],
    module: {
        loaders: [
            {
                test:    /\.js$/,
                exclude: /node_modules/,
                loader:  'babel-loader?presets[]=es2015',
                include: __dirname + '/src',
            },
            {
                test:   /\.scss$/,
                loader: 'style!css!sass',
            },
            {
                test:   /\.html$/,
                loader: 'html',
            },
        ],
    }
};
