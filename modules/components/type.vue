<template>
<div class="type">
	<ul>
		<li v-for="item in list">
			<img :src="'img/item/' + item.img" alt="">
			<div class="content">
				<h3>{{item.title}}</h3>
				<p class="intro">{{'已售' + item.sales + '份'}}</p>
				<p>
					<span class="price">{{'¥' + item.price}}</span>
					<span class="add" @click="addNum(item); $store.commit('addNum', item.price)">+</span>
					<span class="num" v-show="item.num > 0">{{item.num}}</span>
					<span class="reduce" @click="reduceNum(item); $store.commit('reduceNum', item.price)" v-show="item.num > 0">-</span>
				</p>
			</div>
		</li>
	</ul>
	<!-- <h1>{{demo}}</h1> -->
</div>
</template>
<style type="text/css" lang="less">
.type {
	ul {
		padding-left: 5px;
		padding-top: 5px;
	}
	li {
		padding: 10px;
		border-bottom: 1px solid #ccc;
		img {
			height: 50px;
			width: 68px;
			float: left;
		}
		.content {
			margin-left: 78px;
		}
		h3, 
		p {
			font-size: 14px;
			font-weight: normal;
		}
		.intro {
			font-size: 12px;
			color: #999;
		}
		.price {
			color: red;
		}
		.add, 
		.reduce, 
		.num {
			float: right;
		}
		.num {
			margin: 0 5px;
		}
		.add,
		.reduce {
			width: 20px;
			height: 20px;
			text-align: center;
			line-height: 17px;
			border-radius: 50%;
			border: 1px solid #ccc;
			background: #fff;
			font-size: 20px;
			color: red;
			font-weight: bold;
		}
	}
}
</style>
<script type="text/javascript">
export default {
	data() {
		return {
			list: [],
			// 缓存所有类型的商品数据
			all: {}
			// ,demo: ''
		}
	},
	// 定义组件的方法
	methods: {
		getData() {
			// 获取id
			let id = this.$route.params.id;
			// 如果数据已经被缓存了，我们就不要发送了
			if (this.all[id]) {
				// 修改list，渲染视图
				this.list = this.all[id];
			} else {
				this.$http
					// 发送请求
					.get('data/' + id + '.json')
					// 存储数据
					.then(res => {
						// console.log(res)
						// 如果数据返回成功，存储数据
						if (res.data.errno === 0) {
							// 存储数据
							this.list = res.data.data;
							// 缓存数据
							this.all[id] = res.data.data;
						}
					})
			}
		},
		// 购买商品，改变数量
		addNum(item) {
			// 购买商品，数量加一
			item.num++
		},
		// 取消购买，改变数量
		reduceNum(item) {
			// 取消购买，商品减一
			item.num--;
		}
	},
	// 获取数据
	created() {
		this.getData()
		// setTimeout(() => {
		// 	console.log(123)
		// 	this.demo = 500
		// }, 2000)
	},
	// updated() {
	// 	console.log(200)
	// }
	// 监听路由的改变
	watch: {
		$route() {
			this.getData()
		}
	}
}
</script>
