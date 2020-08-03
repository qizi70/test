<template>
	
	<div class="m-header">
		<el-row>
			<top-bar />
		</el-row>
		<el-row style="box-shadow: 0 6px 27px 0 rgba(0,0,0,0.10);">
			<search-bar />
		</el-row>
	</div>
	
</template>

<script>
	import TopBar from './topBar.vue'
	import SearchBar from './searchBar.vue'
	export default{
		components:{
			TopBar,
			SearchBar
		}
	}
</script>

<style>
</style>
