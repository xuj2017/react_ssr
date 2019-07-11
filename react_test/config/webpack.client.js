const path = require('path');
const merge = require('webpack-merge');
const config = require('./webpack.base.js')

module.exports =merge(config, {
    entry:{
        main:path.resolve(__dirname,'../src/client/index.js')
    },
    output:{
        filename:'index.js',
        path:path.resolve(__dirname,'../public')
    }
})