<template>
	<div>
		<span>按省份选择: </span>
		<my-select 
			:list="provinceList" 
			:value="province" 
			title="省份" 
			:showWrapperActive="provinceActive"
			@change_active="changeProvinceActive"
			@change="changeProvince"
			className="province"
		>
		</my-select>
		<my-select 
			:list="cityList" 
			:value="city" 
			title="城市" 
			:showWrapperActive="cityActive"
			@change_active="changeCityActive"
			@change="changeCity"
			:disabled="cityDisabled"
			className="city"
		>
		</my-select>
		<span>直接搜索：</span>
		<el-select
			v-model="searchWord"
			filterable
			remote
			reserve-keyword
			placeholder="请输入城市中文或拼音"
			:remote-method="remoteMethod"
			:loading="loading"
		>
			<el-option
				v-for="item in searchList"
				:key="item"
				:label="item"
				:value="item"
			>
			</el-option>
		</el-select>
	</div>
</template>

<script>
	import api from '@/api/index.js'
	import MySelect from './select.vue'
	export default{
		components:{
			MySelect
		},
		data(){
			return {
				provinceList: [],
				province: '省份',
				cityList: [],
				city: '城市',
				//给子组件传递的信息
				provinceActive: false,
				cityActive: false,
				searchList: ['河间', '任丘', '沧州', '保定', '秦皇岛', '石家庄'],
				searchWord: '',
				//加载中样式
				loading: false,
				cityDisabled: true,
			}
		},
		methods:{
			//自定义事件 通过接收子组件返回的值 更改组件的状态
			changeProvinceActive(flag){
				this.provinceActive = flag;
				//只能同时显示一个 城市或省份列表
				if(flag){
					this.cityActive = false
				}
			},	
			changeCityActive(flag){
				this.cityActive = flag
				if(flag){
					this.provinceActive = false
				}
			},
			//省份文本框中的值
			changeProvince(item){
				this.province = item.name;
				this.cityDisabled = false;
				this.cityList = item.cityInfoList;
			},
			//城市文本框中的值
			changeCity(item){
				this.city = item.name
				this.$store.dispatch('setPosition', item)
				this.$router.push({name: 'index'})
			},
			//文本框 change 时获取里面的文本
			remoteMethod(val){
				//请求后端接口
			}
		},
		mounted() {
			api.getProvince().then( res => {
				this.provinceList = res.data.data.map(item => {
					item.name = item.provinceName;
					return item;
				})
			})
		}
	}
</script>

<style lang="scss">
	@import  '@/assets/css/changeCity/iselect.scss'
</style>
