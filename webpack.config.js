var webpack = require('webpack');

// definePlugin takes raw strings and inserts them, so you can put strings of JS if you want.
// `BUILD_PRERELEASE=1 ./node_modules/webpack/bin/webpack.js`
var definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
  __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
});

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
/*/
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin({
  name:      'shared', // Move dependencies to our main file
  children:  true, // Look for common dependencies in all children,
  minChunks: 2, // How many times a dependency must come up before being extracted
});
//*/


module.exports = {
    entry:  {
        Demo: './src/IndexEntry.js',
        About: './src/AboutEntry.js',
    },
    output: {
        path:     'builds',
        filename: '[name].js',
        publicPath: 'builds/',
    },
    plugins: [definePlugin, commonsPlugin],
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
