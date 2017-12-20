// 安装路由
import Vue from 'vue';
import VueRouter from 'vue-router';
// 引入组件
import Shop from "../components/shop.vue";
import Product from "../components/product.vue";
import Type from "../components/type.vue";

// 安装
Vue.use(VueRouter);

export default new VueRouter({
	routes: [
		// 店铺页面
		{
			path: '/shop/:shopName',
			component: Shop,
			// 定义子路由
			children: [
				// 商品路由
				{
					path: 'product',
					component: Product,
					// 子路由
					children: [
						{
							path: 'type/:id',
							component: Type
						}
					]
				}
				// ,{
				// 	path: 'evaluate/type/01',
				// 	component: {template: '<h2>evaluate</h2>'}
				// }
			]
		}

	]
})