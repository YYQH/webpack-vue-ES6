<template>
<div class="product">
	<div class="nav">
		<router-link v-for="(item, index) in nav" v-text="item.text" :to="'/shop/' + $route.params.shopName + '/product/type/' + item.id" :key="index"></router-link>
	</div>
	<div class="main">
		<!-- 路由渲染容器 -->
		<router-view></router-view>
	</div>
</div>
</template>
<style type="text/css" lang="less">
.product {
	.nav {
		width: 100px;
		float: left;
		background: #ebedf0;
		a {
			display: block;
			height: 50px;
			line-height: 50px;
			font-size: 16px;
			color: #666;
			border-left: 2px solid transparent;
			text-align: center;
			text-decoration: none;
			&.router-link-active {
				color: red;
				border-left-color: red;
				background: #fff;
			}
		}
	}
	.main {
		margin-left: 100px;
	}
}
</style>
<script type="text/javascript">
export default {
	data() {
		return {
			// 菜单导航数据
			nav: []
		}
	},
	// 组件创建完成，获取数据
	created() {
		// 发送异步请求
		this.$http
			// 发送请求
			.get('data/menu.json', {
				params: {
					id: this.$route.params.shopName
				}
			})
			// 获取数据
			.then(res => {
				// 请求成功，存储数据
				if (res && res.data.errno === 0) {
					// 存储数据
					this.nav = res.data.data;
				}
			})
	}
}
</script>