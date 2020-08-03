import axios from 'axios'
axios.defaults.baseURL = 'https://open.duyiedu.com'

//请求拦截器
axios.interceptors.request.use( request => {
	
	request.params = {
		...request.params,
		appkey: '1175883207_1585147246391'
	}

	return request
	
})

export default axios