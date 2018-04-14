/**
 * Created by kdkjPC on 2018/4/14.
 */
import Vue from 'vue'
import Axios from 'axios'

const axiosConfig = Axios.create({
    baseURL: '',
    withCredentials: true,
    timeout: 10000
})




export default axiosConfig
