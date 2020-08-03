<template>
	<div class="m-products-list">
		<ul>
			<li v-for="item in nav" :key="item.key" :class="{ 's-nav-active': item.active }">{{ item.name }}</li>
		</ul>
		<el-row>
			<m-item :meta="item" v-for="item in productList" :key="item.itemId"/>
		</el-row>
	</div>
</template>

<script>
import api from '@/api/index.js'	
import MItem from '@/components/products/item.vue'	
export default {
	data() {
		return {
			nav: [
				{
					key: 's-default',
					name: '智能排序',
					active: true
				},
				{
					key: 's-price',
					name: '价格最低',
					active: false
				},
				{
					key: 's-sale',
					name: '人气最高',
					active: false
				},
				{
					key: 's-comment',
					name: '评价最高',
					active: false
				}
			],
			productList: []
		};
	},
	components:{
		MItem
	},
	mounted(){
		//产品展示列表数据获取
		api.getProductsList().then(res => {
			this.productList = res.data.data
		})
	}
};
</script>

<style></style>
