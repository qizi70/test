<template>
	<div class="page-product">
		
		<el-row>
			<crumbs class="m-crumbs"/>
		</el-row>
		
		<el-row>
			
			<el-col :span="19">
				<el-row>
					<categroy />
				</el-row>
				<el-row>
					<m-list />
				</el-row>
			</el-col>
			<el-col :span="5">
				<!-- map + fav -->
			</el-col>
			
		</el-row>
		
	</div>
	
</template>

<script>
	import Crumbs from '@/components/products/crumbs.vue'
	import Categroy from '@/components/products/categroy.vue'
	import MList from '@/components/products/list.vue'
	export default{
		components:{
			Crumbs,
			Categroy,
			MList,
		}
	}
</script>

<style lang="scss">
	@import "@/assets/css/products/index.scss"
</style>
