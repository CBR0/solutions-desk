module.exports = [{
    entry: './app.scss',
    output: {
        filename: 'style-bundle.js'
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: 'bundle.css',
                    },

                },
                { loader: 'extract-loader' },
                { loader: 'css-loader' },
                { loader: 'sass-loader' },
            ]
        }]
    }
}]