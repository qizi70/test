import axios from '@/axios.js'

//将请求地址集中处理
var api = {
	//查询最近热门搜索
	searchHotWords(params){
		return axios.get('/api/meituan/header/searchHotWords.json', params)
	},
	//搜索框列表数据获取
	getSeatchList(){
		return axios.get('/api/meituan/header/search.json')
	},
	//首页左侧导航条 导航数据
	getMenuList(){
		return axios.get('/api/meituan/index/nav.json')
	},
	//首页下方（有格调内容区数据获取）
	getResultProducts(){
		return axios.get('/api/meituan/index/resultsByKeywords.json')
	},
	// 产品展示列表数据获取
	getProductsList(){
		return axios.get('/api/meituan/list/goodsList.json')
	},
	// 获取分类列表
	getClassify(){
		return axios.get('/api/meituan/list/classify.json')
	},
	//获取热门城市列表
	getHotCity(){
		return axios.get('/api/meituan/city/hot.json') 
	},
	//获取最近搜索城市列表
	getRecents(){
		return axios.get('/api/meituan/city/recents.json')
	},
	//获取省份列表
	getProvince(){
		return axios.get('/api/meituan/city/province.json')
	},
	//获取当前位置信息
	getCurPosition(){
		return axios.get('/api/meituan/city/getPosition.json')
	},
	// 获取城市列表
	getCityList(){
		return axios.get('/api/meituan/city/cityList.json')
	},
	//用户登录接口
	login(params){
		return axios.get('/api/meituan/login', params)
	},
	//用户注册接口
	register(params){
		return axios.get('/api/meituan/register', params)
	}
}

export default api