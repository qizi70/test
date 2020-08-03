<template>
	<div class="m-menu">
		<dl class="nav" @mouseleave="menuLeave">
			<dt>全部分类</dt>
			<dd v-for="item in menuList" :key="item.type" @mouseenter="menuEnter(item)">
				<i :class="item.type"></i>
				{{ item.name }}
				<span class="arrow"></span>
			</dd>
		</dl>

		<div v-if="curDetail" class="detail" @mouseenter="detailEnter" @mouseleave="detailLeave">
			<template v-for="item in curDetail.items">
				<h4 :key="item.title">{{ item.title }}</h4>
				<span v-for="v in item.items" :key="v">{{ v }}</span>
			</template>
		</div>
	</div>
</template>

<script>
	import api from '@/api/index.js'
	export default{
		data(){
			return {
				curDetail: null,
				menuList: []
			}
		},
		methods:{
			menuEnter(item){
				this.curDetail = item;
			},
			menuLeave(){
				this.timer = setTimeout(() => {
					this.curDetail = null;
				}, 100)
			},
			detailEnter(){
				clearTimeout(this.timer);
			},
			detailLeave(){
				this.curDetail = null;
			}
		},
		mounted() {
			api.getMenuList().then(res => {
				this.menuList = res.data.data;
			})
		}
		
	}
</script>

<style>
</style>
