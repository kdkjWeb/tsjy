<template>
    <div class="container">
      <div class="ad">
        <img src="http://pic31.photophoto.cn/20140609/0034034883622832_b.jpg" alt="">
      </div>
      <div class="actHeader">
        <ul class="clear">
          <li :class="thisIndex==index?'liAct':''" v-for="(item,index) in tabBarList" :key="index" @click="toLink(index)">{{item.title}}</li>
        </ul>
      </div>

      <!--列表-->
      <div class="con">
        <div class="conB clear" v-for="(item,index) in list" :key="index">
          <img :src="item.src" alt="">
          <div class="conDes">
            <p>{{item.title}}</p>
          </div>
        </div>
      </div>
      <el-pagination class="pagination"
                     background
                     @current-change="handleCurrentChange"
                     :current-page.sync="currentPage1"
                     :page-size="100"
                     :total="1000"
                     layout="prev, pager, next">
      </el-pagination>
      <div class="alert" v-if="showAlert">
        <div class="alertBox">
          <i class="iconfont icon-remove" @click="alertOpen"></i>
          <p>点歌台</p>
          <el-input v-model="input" placeholder="请输入歌名"></el-input>
          <el-input v-model="input" placeholder="请输入歌手"></el-input>
          <el-input v-model="input" placeholder="请输入主题"></el-input>
          <el-input type="textarea" :rows="3" v-model="input" placeholder="心里话"></el-input>
          <div class="alertBtn" @click="toMusicDetail">确定</div>
        </div>
      </div>
    </div>
</template>
<script>
    export default require('./musicCtr');
</script>
<style scoped>
  .container {
    width:1200px;
    background-color: white;
    margin:50px auto 100px;
    padding:50px;
    box-sizing: border-box;
  }
  .ad {
    position:relative;
    width:100%;
    height:500px;
  }
  .ad img {
    width:100%;
    height:100%;
  }

  /*小标题*/
  .actHeader{
    padding:40px 0 0 0;
    text-align: center;
  }
  .actHeader ul {
    width:424px;
    margin:0 auto;
  }
  .actHeader ul li {
    width:100px;
    padding:7px 0;
    border:3px solid #e2e2e2;
    float: left;
    cursor: pointer;
  }
  .actHeader ul li.liAct {
    border:3px solid #97857b;
    background-color: #97857b;
    color:white;
  }

  /*列表*/
  .con {
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .conB {
    width:335px;
    margin-top:50px;
  }
  .conB img{
    width:100%;
    height:231px;
    float: left;
  }
  .conDes {
    width:100%;
    height:60px;
    padding:20px 30px;
    border:1px solid #e3e3e3;
    box-sizing: border-box;
    border-top:none;
    float: left;
  }
  .conDes p:nth-of-type(1) {
    color:#333;
    margin-bottom:15px;
    font-size: 15px;
  }
  .conDes p:nth-of-type(2){
    color:#666;
    margin-bottom:15px;
  }
  .conDes p:nth-of-type(3){
    color:#999;
    text-align: right;
  }
  .pagination {
    text-align: center;
    margin-top:50px;
  }
  .alert {
    position:fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    background-color: rgba(0,0,0,.5);
  }
  .alertBox {
    width:400px;
    height:450px;
    background-color: white;
    border-radius: 10px;
    position:absolute;
    top:50%;
    left:50%;
    margin-top:-300px;
    margin-left:-250px;
    padding:30px 50px;
    box-sizing: border-box;
  }
  .alertBox i {
    position:absolute;
    top:10px;
    right:10px;
    font-size:20px;
  }
  .alertBox p{
    text-align: center;
    margin-bottom:20px;
  }
  .alertBox .el-input {
    margin-bottom:20px;
  }
  .alertBtn {
    width:100%;
    height:40px;
    line-height: 40px;
    text-align: center;
    color:white;
    font-size:16px;
    background-color: #5b565d;
    margin-top:20px;
    cursor: pointer;
  }
</style>
