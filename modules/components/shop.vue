<template>
<div class="shop">
	<div class="header">
		<h1>{{data.title}}</h1>
		<p>
			<img v-if="data.logo" :src="'img/' + data.logo" alt="">
			<span>{{data.info}}</span>
		</p>
	</div>
	<div class="menu">
		<router-link :to="'/shop/' + data.store + '/' + item.id" v-for="(item, index) in data.menu" v-text="item.text" :key="index"></router-link>
	</div>
	<!-- 路由容器 -->
	<router-view></router-view>
	<!-- 购物车 -->
	<div class="shoping-car">
		<span>共¥{{$store.state.num}}元</span>
		<span class="ready">选好了</span>
	</div>
</div>
</template>
 <!-- scoped 可以限制组件样式的渲染 -->
<style type="text/css" lang="less">
@navColor: #ed813f;
.shop {
	.header {
		background: @navColor;
		height: 100px;
		color: #fff;
		h1 {
			height: 40px;
			line-height: 40px;
			font-size: 16px;
			text-align: center;
			font-weight: normal;
		}
		img {
			height: 50px;
			width: 50px;
			border-radius: 50%;
			margin-left: 10px;
			margin-right: 5px;
			vertical-align: top;
		}
		span {
			font-size: 12px;
		}
	}
	.menu {
		height: 60px;
		line-height: 60px;
		text-align: center;
		background: #f9fdff;
		a {
			display: inline-block;
			height: 60px;
			line-height: 60px;
			border: 2px solid transparent;
			box-sizing: border-box;
			font-size: 20px;
			padding: 0 20px;
			color: #666;
			text-decoration: none;
			&.router-link-active {
				border-bottom: 2px solid red;
				color: red;
			}
		}
	}
	.shoping-car {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		font-size: 18px;
		color: #fff;
		height: 60px;
		background: #484d54;
		text-align: center;
		line-height: 60px;
		.ready {
			float: right;
			padding: 0 30px;
			background: #fe2947;
		}
	}
}


</style>
<script type="text/javascript">
// 返回组件对象
export default {
	// 绑定数据
	data() {
		return {
			data: {}
		}
	},
	// 组件创建完成，发送请求
	created() {
		console.log(this)
		this.$http
			// 发送get请求
			.get('data/' + this.$route.params.shopName + '.json')
			// 打印返回数据
			.then(res => {
				// 如果返回成功，存数据
				if (res.data.errno === 0) {
					// 第一个data表示返回的数据，第二个data表示data属性数据
					this.data = res.data.data;
				}
			})
	}
}
</script>