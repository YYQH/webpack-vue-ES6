import Vue from "vue";
import Vuex, { Store } from "vuex";

// 安装vuex
Vue.use(Vuex);

// 创建store并暴露接口
export default new Store({
	// 定义状态
	state: {
		num: 0
	},
	// 改变的方法
	mutations: {
		// 购买商品
		addNum(state, num) {
			state.num += +num;
		},
		// 取消购买
		reduceNum(state, num) {
			state.num -= num;
		}
	}
	// 如果有异步操作，定义actions
})