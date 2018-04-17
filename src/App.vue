<template>
  <div id="app">
    <div class="headerBox">
    <header class="header">
      <div class="header_btn">
        <div class="login">登录</div>
        <div class="register">注册</div>
      </div>
      <div class="logo">
        <img src="@/assets/images/login.jpg" alt="">
      </div>
    </header>
    </div>
    <nav class="nav">
      <ul class="nav_bar">
        <li class="nav_bar_title" :class="index==thisIndex?'nav_bar_titleA':''" v-for="(item,index) in navList" :key="index" @click="toLink(index)">
          <a v-if="index !=6 " href="javascript:void(0)">{{item.title}}</a>
          <div v-else>
            <div><a href="">{{item.title}}</a></div>
            <ul class="secondNav">
              <li class="secondNav_bar" v-for="(item,index) in item.secondNav" :key="index">
                <a href="">{{item.title}}</a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
    <router-view/>
    <footer class="footer"></footer>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data(){
      return {
        thisIndex:0,
        navList: [
          {
            title: '首页',
          },{
            title: '快讯'
          },{
            title: '就业'
          },{
            title: '视频'
          },{
            title: '音乐'
          },{
            title: '网红'
          },{
            title: '许愿',
            secondNav: [
              {
                title: '许愿树'
              },{
                title: '神秘树洞'
              },{
                title: '解忧杂货铺'
              }
            ]
          },{
            title: '跳蚤'
          },{
            title: '探城'
          },{
            title: '活动',
            href:''
          }
        ]
      }
    },
    methods:{
      toLink(index){
        this.thisIndex = index;
        switch (index) {
          case 0:
            this.$router.push({
              path: "/"
            });
            break;
          case 1:
            this.$router.push({
              path: "/bSM"
            });
            break;
          case 2:
            this.$router.push({
              path: "/scroll"
            });
            break;
          case 9:
            this.$router.push({
              path: "/active"
            });
            break;
        }
      }
    },
    mounted(){
      if (this.$route.path.indexOf("/active")>=0) {
        this.thisIndex = 9;
      }
    }
  }
</script>
<!--清除样式-->
<style>
  html {
    height:100%;
    overflow: auto;
  }
  html,body{
    width:100%;
    position:relative;
    padding:0;
    margin:0;
    min-width:1200px;
    background-color: #f2f2f2;
  }
  body {
    min-height:100%;
  }
  * {
    padding:0;
    margin:0;
  }
  #app {
    width:100%;
    height:100%;
    font-size:14px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }
  ul {
    padding:0;
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
    color:white;
  }
  img {
    border:none;
  }
  .clear:after {
    content:"";
    display: block;
    clear: both;
  }
  .el-icon-loading {
    font-size:50px;
  }
  .el-loading-spinner .el-loading-text {
    font-size:20px;
  }
  .el-table .cell {
    white-space: nowrap;
  }
  .el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev, .el-pagination.is-background .el-pager li {
    width:35px;
    height:35px;
    background-color: white;
    border:3px solid #e2e2e2;
    line-height: 30px;
    font-size:12px;
    color:#999;
  }
  .el-pagination.is-background .btn-next:hover, .el-pagination.is-background .btn-prev:hover, .el-pagination.is-background .el-pager li:hover {
    background-color: #97857b;
    border-color:#97857b;
    color:white;
  }
  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #97857b;
    border-color:#97857b;
    color:white;
  }
  .el-pagination.is-background .el-pager li:not(.disabled):hover {
    color:white;
  }
  .width12 {
    width:1200px;
    margin:0 auto;
    overflow: auto;
  }


/*公用头部样式*/
.headerBox {
  width:100%;
  background-color: #fff;
}
  .header{
    width: 1200px;
    height: 130px;
    margin: 0 auto;
  }
  .header_btn{
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    width: 130px;
    height: 25px;
    line-height: 25px;
    float: right;
    margin-top: 15px;
  }
  .header_btn div{
    text-align: center;
    width: 55px;
    border: 1px solid #9a9a9a;
    border-radius: 15px;
  }
  .header_btn div.login{
    /* width: 65px; */
  }
  .nav{
    width: 100%;
    min-width: 1200px;
    height: 60px;
    background-color: #4d484f;
  }
  .logo{
    text-align: center;
    margin:  0px auto 35px;
    padding-top: 60px;
  }
  .nav>ul.nav_bar{
    width: 900px;
    margin: 0 auto;
    display: flex;
    display: -webkit-flex;
  }
  .nav>ul.nav_bar li{
    position: relative;
    flex: 1;
    line-height: 60px;
    text-align: center;
  }
  .nav>ul.nav_bar li a{
    color: #fff;
    display: inline-block;
    width: 100%;
    height: 100%;
  }
  .nav>ul.nav_bar li.nav_bar_title:hover{
    background-color: #5b565d;
  }
  .nav>ul.nav_bar li.nav_bar_titleA {
    background-color: #5b565d;
  }
  .nav>ul.nav_bar li:nth-child(7):hover ul.secondNav{
    display: block;
  }
  ul.secondNav{
    display: none;
    position: absolute;
    z-index: 99;
    left: -5px;
    background-color: #fff;
    width: 100px;
  }
  ul.secondNav li.secondNav_bar{
    line-height: 40px;
    height: 40px;
    border-bottom: 1px solid #ddd;
  }
  ul.secondNav li.secondNav_bar:last-child{
    border-bottom: none;
  }
  ul.secondNav li.secondNav_bar a{
    color: #000;
  }
  ul.secondNav li.secondNav_bar:hover{
    background-color: #97857b;
  }
  ul.secondNav li.secondNav_barA {
    background-color:#97857b ;
  }



  .footer{
    position:absolute;
    bottom:0;
    width: 100%;
    min-width: 1200px;
    height: 60px;
    background-color: #4d484f;
  }
</style>
