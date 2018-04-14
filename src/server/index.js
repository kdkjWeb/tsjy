import Vue from 'vue'
import Axios from 'axios'


const axiosConfig = Axios.create({
    baseURL: '',
    withCredentials: true,
    timeout: 3000
})
export default axiosConfig
