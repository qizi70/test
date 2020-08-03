<template>
	<div :class="['choose-wrap', disabled?disabled:'']" @click="showWrapper" v-document-click="documentClick">
		<div class="choose">
			<span>{{ value }}</span>
			<i class="el-icon-caret-bottom"></i>
			<div class="mt-content" :class="{active: showWrapperActive}">
				<h2>{{ title }}</h2>
				<div :class="['wrapper', className]">
					<div class="col" v-for="(listData, index) in renderList" :key="index">
						<span 
							class="mt-item" 
							:class="{active: item.name == value}"
							v-for="item in listData" 
							:key="item.name" 
							@click="changeValue(item)"
						>
							{{ item.name }} 
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
			}
		},
		props:['list', 'title', 'value', 'showWrapperActive', 'disabled', 'className'],
		// {	list: Array,
		// 	title: String,
		// 	value: String,
		// 	showWrapperActive: Boolean
		// },
		computed:{
			renderList(){
				let col = Math.ceil( this.list.length / 12 );
				let resultList = [];
				for(let i = 0; i < col; i++){
					//截出来数组 再把数组放到 渲染的数组里
					let data = this.list.slice(i * 12, i * 12 + 12);
					resultList.push(data)
				}
				return resultList
			}
		},
		methods:{
			showWrapper(e){
				//阻止事件冒泡
				e.stopPropagation();
				if(!this.showWrapperActive){
					//使用自定义事件，来更改点击城市/省份 显示或隐藏
					if(!this.disabled){
						this.$emit('change_active', true)
					}
				} 
			},
			documentClick(){
				if(this.showWrapperActive){
					// this.showWrapperActive = false;
					this.$emit('change_active', false)
				}
			},
			//点击下拉列表的城市或省份
			changeValue(item){
				this.$emit('change', item)
			}
		},
	}
</script>

<style lang="scss">
	@import "@/assets/css/changeCity/select.scss"
</style>
