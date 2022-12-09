const path = require('path')
const configs = require('./config')
const utils = require('./build/utils')

// 用于做相应的merge处理
const isPro = process.env.NODE_ENV === 'production'
const cfg = isPro ? configs.build.env : configs.dev.env

const resolve = dir => {
    return path.join(__dirname, dir)
}

let publicPath = '/vue/';

module.exports = {
    publicPath: publicPath,
    productionSourceMap: true,
    pages: utils.setPages({
        addScript() {
            if (isPro) {
                return `
                    <script src="https://s95.cnzz.com/z_stat.php?id=xxx&web_id=xxx" language="JavaScript"></script>
                `
            }
            return ''
        }
    }),
    /*css: {
        modules: true,
    },*/
    chainWebpack: config => {

        config.resolve.alias
            .set('@', resolve('src'))
            .set('_lib', resolve('src/common'))
            .set('_com', resolve('src/components'))
            .set('_img', resolve('src/images'))
            .set('_ser', resolve('src/services'))
    },

    configureWebpack: config => {
        
    },

    devServer: {
        historyApiFallback: {
            rewrites: [
                { from: new RegExp(publicPath + 'page1'), to: publicPath + 'page1.html' },
                { from: new RegExp(publicPath + 'page2'), to: publicPath + 'page2.html' },
            ]
        },
        host: '127.0.0.1', // 指定使用一个 host。默认是 localhost
        port: 8080, // 端口地址
        https: false, // 使用https提供服务

        // string | Object 代理设置
        proxy: {
            '/repos': {
                target: 'https://api.github.com',
                changeOrigin: true
                // pathRewrite: {'^/api': ''}
            }
        },
    }
}