const webpack = require('webpack')
const CleanPlugin = require('clean-webpack-plugin')
const { join } = require('path')

const paths = {
    src: join(__dirname, 'src'),
    dist: join(__dirname, 'dist'),
    root: join(__dirname, 'root')
}

module.exports = {
    mode: 'production',
    entry: join(paths.src, 'index'),
    output: {
        path: paths.dist,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: paths.src,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [['env', { module: false }], 'stage-0', 'react'],
                            plugins: [
                                // ['transform-runtime', {
                                //     helpers: false,
                                //     polyfill: false,
                                //     regenerator: true
                                // }]
                            ]
                        }
                    }
                ]
            }
        ]
    },
    optimization: {
        minimize: true
    },
    plugins: [
        new CleanPlugin(['dist'], {
            root: paths.root
        })
    ]
}