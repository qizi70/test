<template>
	<el-row class="m-header-topbar m-header">
		<el-col :span="10">
			<my-geo />
		</el-col>
		<el-col :span="14">
			<my-nav />
		</el-col>
	</el-row>
</template>

<script>
	import MyGeo from './geo.vue'
	import MyNav from './nav.vue'
	export default{
		components:{
			MyGeo,
			MyNav
		}
	}
</script>

<style lang="scss">
	@import '@/assets/css/public/header/topbar.scss'
</style>
