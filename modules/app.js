// 引入vue
import Vue from 'vue';
// 引入axios模块
import axios from 'axios';
// 引入路由
import router from './router/router.js';
import AppStyle from './app.less';
// 引入store
import store from './store/store.js';

// 安装axios
// Vue.prototype.$ickt = axios;
// Vue.prototype.$ajax = axios;
Vue.prototype.$http = axios;

// 创建vue实例化对象
new Vue({
	el: '#ickt',
	data: {},
	// 注册路由
	router,
	// 注册store
	store
})