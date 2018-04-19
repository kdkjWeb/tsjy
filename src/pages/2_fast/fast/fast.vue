<template>
  <div class="container">
    <div class="ad">
      <img src="http://pic31.photophoto.cn/20140609/0034034883622832_b.jpg" alt="">
      <div class="des">
        <div><p>2017年终盘点</p><p>2017-03-02</p></div>
        <p>创意方法论线下沙龙为设计工作创意方法论线下沙龙为设计工作创意方法论线下沙龙为设计工作创意方法论线下沙龙为设计工作</p>
      </div>
    </div>
    <div class="con">
      <div class="conB clear" v-for="item,index in list" :key="index">
        <img :src="item.src" alt="">
        <div class="conDes">
          <p>{{item.title}}</p>
          <p>{{item.des}}</p>
          <p>{{item.time}}</p>
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
  </div>
</template>
<script>
  export default require('./fastCtr');
</script>
<style scoped>
  .container {
    width:1200px;
    margin:50px auto;
    background-color: white;
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
  .des {
    width:100%;
    position:absolute;
    bottom:10px;
    left:0;
    padding:0 15px 0 35px;
    box-sizing: border-box;
    font-size:14px;
    color:white;
  }
  .des div {
    display: flex;
    flex-direction: row;
  }
  .des div p:nth-of-type(1){
    flex: 1;
  }
  .des div p:nth-of-type(2) {
    width:100px;
    text-align: right;
  }
  .des>p {
    margin:15px 0;
  }
  .con {
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .conB {
    width:525px;
    margin-top:50px;
    border-radius: 5px 5px 0 0;
  }
  .conB img{
    width:525px;
    height:325px;
    border-radius: 5px 5px 0 0;
    float: left;
  }
  .conDes {
    width:100%;
    height:150px;
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

</style>
