<template>
	<div class="page-changeCity">
		<el-row>
			<province-choose />
		</el-row>
		<el-row>
			<hot-city title="热门城市: " :list="hotList"/>
		</el-row>
		<el-row>
			<hot-city title="最近访问: " :list="rencentList"/>
		</el-row>
		<el-row>
			<categroy />
		</el-row>
	</div>
</template>

<script>
	import ProvinceChoose from '@/components/changeCity/province.vue'
	import HotCity from '@/components/changeCity/hot.vue'
	import Categroy from '@/components/changeCity/categroy.vue'
	import api from '@/api/index.js'
	export default{
		data(){
			return {
				hotList: [],
				rencentList: [],
			}
		},
		components: {
			ProvinceChoose,
			HotCity,
			Categroy
		},
		mounted() {
			//获取热门城市列表
			api.getHotCity().then(res => {
				this.hotList = res.data.data.map(item => item.name);
			}),
			//获取最近搜索城市列表
			api.getRecents().then(res => {
				this.rencentList = res.data.data.map(item => item.name);
			})
		}
	}
</script>

<style>
</style>

