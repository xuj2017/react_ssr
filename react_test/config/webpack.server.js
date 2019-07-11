const path = require('path');
const nodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');
const config = require('./webpack.base.js')

module.exports =merge(config, {
    target:"node",
    externals: [nodeExternals()],
    entry:{
        main:path.resolve(__dirname,'../src/server/index.js')
    },
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'../build')
    }
})