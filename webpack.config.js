/**
 * TODO LIST
 * - Try the require.ensure with all possible modules (commonjs, amd, ES6, System)
 *   @see https://webpack.github.io/docs/code-splitting.html
 * - Try multiple properties on module.exports + multiple import
 * - eslint
 * - Pre/Post compile
 * - Common chunks children
 * - Vendor custom builds
 * - E2E
 * 
 * - @done Unit Test (chai/mocha)
 * - @done Unit Test in browser
 *   @see https://www.youtube.com/watch?v=_sLLjPzOrXI
 *   @see https://github.com/jesseskinner/webpack-mocha-demo
 * - @done Source map
 * - @done Error reports
 * - @done We can move some files out of the bundles
 *   @ see https://github.com/webpack/extract-text-webpack-plugin
 * - @done We can ignore some file e.g. unnecessary translations files
 *   @see http://stackoverflow.com/questions/25384360/how-to-prevent-moment-js-from-loading-locales-with-webpack
 *   @see https://github.com/webpack/docs/wiki/list-of-plugins#ignoreplugin
 */

 var webpack = require('webpack');

/** 
 * definePlugin takes raw strings and inserts them, so you can put strings of JS if you want.
 * `BUILD_PRERELEASE=1 ./node_modules/webpack/bin/webpack.js`
 */
var definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
  __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
});

/**
 * @see https://github.com/webpack/docs/wiki/list-of-plugins#commonschunkplugin
 */
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin({
  name: 'shared',
  //filename:,
  minChunks: 2,
  //chunks:,
  children: true,
  //async:,
  //minSize:,
});

/**
 * #1 Commons chunk for entries
 * !!! Only check each entry and not the related require.ensure !!!
 * 
 * @see https://github.com/webpack/docs/wiki/list-of-plugins#1-commons-chunk-for-entries
 */
commonsPlugin = new webpack.optimize.CommonsChunkPlugin({
  name: 'commons',
  filename: 'commons.js',
  //minChunks: 2,
  //chunks:,
  //children: true,
  //async:,
  //minSize:,
});

/**
 * #2 Explicit vendor chunk
 * !!! Works but it is a manual process !!!
 * 
 * You must add this `common: ['jquery', 'mustache'],` in entry
 * and add this in the html `<script src="vendor.js" charset="utf-8"></script>`
 * @see https://github.com/webpack/docs/wiki/list-of-plugins#2-explicit-vendor-chunk
 */
commonsPlugin = new webpack.optimize.CommonsChunkPlugin({
  name: 'vendor',
  //filename: 'vendor.js',
  minChunks: Infinity,
  //chunks:,
  //children: true,
  //async:,
  //minSize:,
});

/**
 * #3 Move common modules into the parent chunk
 * !!! Does NOT seem to work !!!
 * 
 * @see https://github.com/webpack/docs/wiki/list-of-plugins#3-move-common-modules-into-the-parent-chunk
 */
commonsPlugin = new webpack.optimize.CommonsChunkPlugin({
  //name: 'vendor',
  //filename: 'vendor.js',
  //minChunks: Infinity,
  //chunks:,
  children: true,
  //async:,
  //minSize:,
});

/**
 * #4 Extra async commons chunk
 * !!! Only looks into children and not within the entry files !!!
 * @see https://github.com/webpack/docs/wiki/list-of-plugins#4-extra-async-commons-chunk
 */
commonsPlugin = new webpack.optimize.CommonsChunkPlugin({
  //name: 'vendor',
  //filename: 'vendor.js',
  //minChunks: Infinity,
  //chunks:,
  children: true,
  async: true,
  //minSize:,
});

/**
 * Combining #2 + #4
 * You must add this `common: ['jquery', 'mustache'],` in entry
 * and add this in the html `<script src="vendor.js" charset="utf-8"></script>`
 */
var vendorCommonsPlugin = new webpack.optimize.CommonsChunkPlugin({
  name: 'vendor',
  filename: 'vendor.js',
  minChunks: Infinity,
  //chunks:,
  //children: true,
  //async:,
  //minSize:,
});
commonsPlugin = new webpack.optimize.CommonsChunkPlugin({
  //name: 'shared',
  //filename: 'shared.js',
  //minChunks: Infinity,
  //chunks:,
  children: true,
  async: true,
  //minSize:,
});

module.exports = {
    entry:  {
        vendor: ['jquery', 'mustache'],
        Demo: './src/index-entry',
        About: './src/about-entry',
    },
    output: {
        path:     'builds',
        filename: '[name].js',
        publicPath: 'builds/',
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.js', '.es6']
    },
    plugins: [definePlugin, commonsPlugin, vendorCommonsPlugin],
    module: {
        loaders: [
            {
                test:    /\.es6$/,
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
    },
    devtool: ((process.env.BUILD_DEV) ? 'source-map' : ''),
};
