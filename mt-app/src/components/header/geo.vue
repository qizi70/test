<template>
	<div class="m-geo">
		<div class="position">
			<i class="el-icon-location-outline" />
			{{ city }}
			<router-link class="changeCity" :to="{name: 'changeCity'}">
				切换城市
			</router-link>
			[<a href="#" v-for="item in nearCity" :key="item.id"> {{ item.name }} </a>]
		</div>
		<div class="m-user" v-if="!userName">
			<router-link class="login" :to="{name: 'login'}">
				立即登录
			</router-link>
			
			<router-link class="register" :to="{name: 'register'}">
				注册
			</router-link>
		</div>
	</div>
</template>

<script>
	import api from '@/api/index.js'
	export default{
		data(){
			return {
				nearCity: []
			}
		},
		computed:{
			city(){
				return this.$store.state.position.name
			},
			userName(){
				console.log(this.$store.state.userName);
				return this.$store.state.userName
			}
		},
		watch:{
			'$store.state.position'(){
				this.nearCity = this.$store.state.position.nearCity
			}
		},
		mounted() {
			api.getCurPosition().then(res => {
				this.$store.dispatch('setPosition', res.data.data)
				this.nearCity = res.data.data.nearCity;
			})
		}
	}
</script>

<style>
</style>
