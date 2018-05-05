/**
 * Created by kdkjPC on 2018/4/14.
 */


import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);


const state = {
  userInfo:{},
  loginIsYes:false
};


export default new Vuex.Store({
    state,
    mutations:{
      setloginIsYes(state,data) {
        state.loginIsYes = data;
      }
    },
    getters: {
      loginIsYesF:(state)=>state.loginIsYes
    }
});
