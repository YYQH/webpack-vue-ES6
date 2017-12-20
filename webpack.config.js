// 配置定义在接口中
module.exports = {
	// 入口文件
	entry: './modules/app.js',
	// 发布的文件
	output: {
		filename: './pack/ickt.js'
	},
	// 定义处理的文件
	resolve: {
		// 为引入的模块起别名
		alias: {
			vue: 'vue/dist/vue.js'
		}
	},
	// 模块
	module: {
		// 加载机
		loaders: [
			// 编译ES6
			{
				test: /\.js$/,
				// es2015
				loader: 'babel-loader?presets[]=es2015',
				// 不要处理npm安装的模块
				exclude: '/node_modules/'
			},
			// 编译vue
			{
				test: /\.vue$/,
				// 加载机
				loader: 'vue-loader'
			},
			// 加载less
			{
				test: /\.less$/,
				loader: 'vue-style-loader!css-loader!less-loader'
			}

		]
	}
}