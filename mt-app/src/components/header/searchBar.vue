<template>
	<div class="search-panel">
		<el-row class="m-header-searchbar">
			<el-col :span="3" class="left">
				<img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团">
			</el-col>
			<el-col :span="15" class="center">
				<div class="wrapper">
					<el-input 
						v-model="searchWord" 
						placeholder="搜索商家或地点"  
						@focus="focusInput" 
						@blur="blurInput"
						@input="input"
					>
					</el-input>
					<el-button type="primary" icon="el-icon-search"></el-button>
					<dl class="hotPlace" v-if="isHotPlace">
						<dt>热门搜索</dt>
						<dd v-for="item in hotPlaceList" :key="item">
							<router-link :to="{name: 'goods', params: {id: item}}">{{ item }}</router-link>
						</dd>
					</dl>
					
					<dl class="searchList" v-if="isSearchList">
						<dd v-for="(item, index) in searchList" :key="index">
							<router-link :to="{name: 'goods', params: {id: item}}">{{ item }}</router-link>
						</dd>
					</dl>
					
				</div>
				<p class="suggest">
					<router-link v-for="item in suggestList" :key="item" :to="{name: 'goods', params: {id: item}}">
						{{ item }}
					</router-link>
				</p>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import api from '@/api/index.js'
	export default{
		data(){
			return {
				searchWord: '',
				isFocus: false,
				hotPlaceList: [],
				searchList: [],
				suggestList: []
			}
		},
		computed:{
			isHotPlace(){
				return !this.searchWord && this.isFocus;
			},
			isSearchList(){
				return this.searchWord && this.isFocus;
			},
		},
		methods:{
			focusInput(){
				this.isFocus = true;
			},
			blurInput(){
				var self = this;
				//*** 有问题 ，在200 毫秒以内的情况下 ，点击弹出来的菜单时，没有反应，200 毫秒后就消失了，
				//当把定时器调到 300 毫秒以上时 却又能成功触发其他的功能 比如点击菜单中的选项跳转界面
				setTimeout(function() {
				    self.isFocus = false;
				}, 300)
			},
			input(){
				//请求搜索框热门数据
				let val = this.searchWord;
				api.getSeatchList().then(res => {
					this.searchList = res.data.data.list.filter((item, index) => {
						//把在输入框的文本通过过滤 与 请求回来的数据匹配
						return item.indexOf(val) > -1;
					});
				})
			},
		},
		mounted() {
			//请求最近热门搜索
			api.searchHotWords().then(res => {
				this.hotPlaceList = res.data.data;
				this.suggestList = res.data.data;
			})
		}
	}
</script>

<style lang="scss">
	@import '@/assets/css/public/header/index.scss';
	@import '@/assets/css/public/header/search.scss';
</style>
