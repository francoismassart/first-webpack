module.exports = {
    entry:  {
        Demo: './src/index.js',
    },
    output: {
        path:     'builds',
        filename: '[name].js',
        publicPath: 'builds/',
    },
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
