<template>
	<el-breadcrumb separator-class="el-icon-arrow-right">
		<el-breadcrumb-item>{{city.name}}美团</el-breadcrumb-item>
		<el-breadcrumb-item>{{city.name}}{{product}}</el-breadcrumb-item>
	</el-breadcrumb>
</template>

<script>
	export default{
		computed:{
			city(){
				return this.$store.state.position
			},
			product(){
				return this.$route.params.name
			}
		},
	}
</script>


