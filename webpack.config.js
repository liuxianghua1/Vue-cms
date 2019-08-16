// 这个配置文件 其实就是一个js文件 通过node中的模块操作 向外暴露了一个配置对象
const path = require('path')
// 启动热更新第二步
// 导入htmlWebpackPlugin 在内存中生成html页面
// 只要是插件 都一定要放在plugins节点区
// 插件的两个作用 1.自动在内存中根据指定的页面生成一个内存的页面 2.自动把打包好的bundle.js文件自动追加到页面中
var htmlWebpackPlugin = require('html-webpack-plugin')

// const VueLoaderPlugin = require('vue-loader/lib/plugin')


module.exports = {
    // 指定入口 出口
    entry: path.join(__dirname, './src/main.js'), //入口表示要使用 webpack打包哪个文件
    output: {//输出文件的相关配置
        path: path.join(__dirname, './dist'), //指定打包好的文件输出到哪里
        filename: 'bundle.js' //指定打包的文件名
    },
    devServer: {
        open: true,//自动打开浏览器
        hot: true,//启动热更新第一步
        port: 8000,//端口
        contentBase: 'src',//默认显示页面
        disableHostCheck: true
    },
    plugins: [
        //配置插件的节点
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),//指定路径
            filename: 'index.html'//设置生成的内存页面名称
        })
    ],
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.(jpg|png|gif|jpeg)$/, use: 'url-loader?limit=7631&name=[hash:8]-[name].[ext]'},
            // limit=7631给定的值是字节大小 大于这个值 就不base64 如果小于就转成base64
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use:'url-loader'},
            { test: /\.js$/, use:'babel-loader', exclude: /node_modules/ },
            { test: /\.vue$/, use: 'vue-loader'}

        ],
    },
    // plugins: [
    //     // 请确保引入这个插件！
    //     new VueLoaderPlugin()
    //   ]
}



// 当我们在cmd里面 输入webpack 之后 webpack做了一下几步
// 1.首先 webpack 发现 我们没有通过命令的形式 给他指定的入口和出口
// 2.webpack就回去项目的根目录中 查找一个叫做 webpack.config.js 配置文件
// 3. 当找到配置文件后 webpack 会解析执行这个 配置文件 当解析执行完配置文件后 就得到了配置文件中 导出的配置对象
// 4. 当webpack 拿到了配置对象后 就拿到了入口和出口 然后进行打包构建