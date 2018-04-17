/**
 * Created by kdkjPC on 2018/4/14.
 */
import Vue from 'vue'
import Axios from 'axios'

var baseU = 'http://192.168.20.133:8886/tsjy/'
const axiosConfig = Axios.create({
    baseURL: baseU,
    withCredentials: true,
    timeout: 10000
});




export default {
  axiosConfig:axiosConfig,
  baseU:baseU
}
