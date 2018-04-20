<template>
    <div class="container">
      <div class="intro">
        <h1>2018最美模特大赛</h1>
        <p>该书讲述了在僻静街道旁的一家杂货店，只要写下烦恼投进店前门卷帘门的投信口，第二天就会在店后的牛奶箱里得到回答：因男友身患绝症，年轻女孩月兔在爱情与梦想间徘徊；松冈克郎为了音乐梦想离家漂泊，却在现实中寸步难行；少年浩介面临家庭巨变，挣扎在亲情与未来的迷茫中……他们将困惑写成信投进杂货店，奇妙的事情随即不断发生。该书讲述了在僻静街道旁的一家杂货店，只要写下烦恼投进店前门卷帘门的投信口，第二天就会在店后的牛奶箱里得到回答该书讲述了在僻静街道旁的一家杂货店，只要写下烦恼投进店前门卷帘门的投信口，第二天就会在店后的牛奶箱里得到回答</p>
        <div class="number">
          <div class="numberB">
            <div class="numberC">
              <p>参赛选手</p>
              <p>123</p>
            </div>
            <div class="numberC orange">
              <p>累计投票</p>
              <p>123</p>
            </div>
            <div class="numberC blue">
              <p>访问次数</p>
              <p>123</p>
            </div>
          </div>
          <div class="numberT">
            <div class="numberTime">
              <p>投票开始时间 : 2018-05-06 12:00</p>
              <p>投票结束时间 : 2018-05-06 12:00</p>
            </div>
            <div class="numberD">剩余 <p>12</p> 天</div>
          </div>
        </div>
        <p>
          <span>规则</span><br/>
       该书讲述了在僻静街道旁的一家杂货店，只要写下烦恼投进店前门卷帘门的投信口，第二天就会在店后的牛奶箱里得到回答：因男友身患绝症，年轻女孩月兔在爱情与梦想间徘徊；松冈克郎为了音乐梦想离家漂泊，却在现实中寸步难行；少年浩介面临家庭巨变，挣扎在亲情与未来的迷茫中……他们将困惑写成信投进杂货店，奇妙的事情随即不断发生。该书讲述了在僻静街道旁的一家杂货店，只要写下烦恼投进店前门卷帘门的投信口，第二天就会在店后的牛奶箱里得到回答该书讲述了在僻静街道旁的一家杂货店，只要写下烦恼投进店前门卷帘门的投信口，第二天就会在店后的牛奶箱里得到回答
        </p>
        <div class="signBtn" @click="signBtn">我要报名</div>
        <div class="look">
          <div @click="toRanking">排行榜</div>
          <div class="blue" @click="toIntroduce">活动介绍</div>
        </div>
      </div>
      <div class="signPeople">
        <div class="search clear">
          <input type="text" placeholder="请输入选手姓名或编号">
          <div class="searchBtn">搜索</div>
        </div>
        <div class="con">
          <div class="conB clear" v-for="item,index in listPerson" :key="index" @click="toVipDetail">
            <img :src="item.src" alt="">
            <div class="conDes">
              <p class="num">{{item.num}}</p>
              <p class="name">{{item.name}}</p>
              <p><button class="btn " :class="index==2?'aRBtn':''">投票10</button><span>{{item.time}}</span></p>
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
        <div class="look">
          <div @click="toRanking">排行榜</div>
          <div class="blue" @click="toIntroduce">活动介绍</div>
        </div>
      </div>
      <div class="comment">
        <div class="list">
          <div class="listB clear" v-for="item,index in list" :key="index">
            <div class="headImg">
              <img :src="item.src" alt="">
              <p>{{item.name}}</p>
            </div>
            <div class="listC">
              <p>{{item.title}}</p>
              <p><span>{{item.timer}}</span></p>
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
      <div class="send clear">
        <div>
          <div class="sendImg">
            <img src="../../../assets/wish1.png" alt="">
          </div>
          <div class="text">
            <textarea placeholder="想说什么就说什么吧"></textarea>
          </div>
        </div>
        <button class="sendSecret"><i class="iconfont icon-fasong"></i>发送</button>
      </div>
    </div>
    </div>
</template>
<script>
    export default require('./voteSignCtr');
</script>
<style scoped>
  .container {
    width:1200px;
    margin:50px auto;
    color:#333;
  }
  /*介绍*/
  .intro {
    width:100%;
    padding:50px;
    box-sizing: border-box;
    background-color: white;
  }
  .intro h1 {
    width:100%;
    margin-bottom:50px;
    text-align: center;
  }
  .intro>p {
    line-height: 30px;
  }
  .number {
    margin:50px auto;
    width:600px;
  }
  .numberB {
    width:100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .numberT {
    margin-top:50px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .numberTime {
    font-size:18px;
    line-height:35px;
    letter-spacing: 2px;
  }
  .numberD {
    flex: 1;
    font-size:14px;
    margin-left:50px;
  }
  .numberD p {
    display: inline-block;
    width:50px;
    height:50px;
    background-color: #db844e;
    border-radius: 10px;
    line-height: 50px;
    text-align: center;
    color:white;
    font-size:20px;
    font-weight: bold;
  }
  .numberC {
    width:140px;
    height:140px;
    border:10px solid #e45872;
    border-radius: 100%;
    text-align: center;
    color:#e45872;
    font-size:18px;
  }
  .numberC p:nth-of-type(1) {
    margin-top:40px;
    margin-bottom:10px;
  }
  .orange {
    border-color:#e7963a;
    color:#e7963a;
  }
  .blue {
    border-color:#58a9e0;
    color:#58a9e0;
  }
 .signBtn {
   width:260px;
   height:50px;
   line-height: 50px;
   background-color: #db844e;
   color:white;
   text-align: center;
   border-radius: 50px;
   margin:50px auto;
   cursor: pointer;
   letter-spacing: 2px;
   font-size:15px;
 }
  .look {
    text-align: right;
  }
  .look div {
    width:80px;
    height:80px;
    display: inline-block;
    margin-left:30px;
    border-radius: 100%;
    background-color: #e7963a;
    color:white;
    line-height: 80px;
    text-align: center;
    cursor: pointer;
  }
  .look div.blue {
    background-color: #58a9e0;
  }
/*参加人*/
  .signPeople {
    margin-top:30px;
    width:100%;
    padding:50px;
    box-sizing: border-box;
    background-color: white;
  }
  .search {
    width:500px;
    margin:0 auto;
  }
  .search input {
    width:398px;
    height:38px;
    border:1px solid #e2e2e2;
    text-indent: 20px;
    float: left;
  }
  .search .searchBtn {
    width:98px;
    height:40px;
    float: left;
    color:white;
    background-color:#4D484F ;
    text-align: center;
    line-height: 40px;
  }
  .con {
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .conB {
    width:330px;
    margin-top:50px;
    border-radius: 5px 5px 0 0;
  }
  .conB img{
    width:330px;
    height:260px;
    border-radius: 5px 5px 0 0;
    float: left;
  }
  .conDes {
    width:100%;
    height:140px;
    padding:10px 30px 30px 30px;
    border:1px solid #e3e3e3;
    box-sizing: border-box;
    border-top:none;
    float: left;
  }
  .conDes p {
    text-align: center;
    margin-bottom:10px;
  }
  .conDes .num {
    font-size:25px;
    font-weight: bold;
    color:#dd8150;
  }
  .btn {
    width:140px;
    padding:8px 0;
    border-radius: 40px;
    background-color: #dd8150;
    border:none;
    color:white;
    outline:none;
    cursor: pointer;
  }
  .aRBtn {
    background-color: #bbbbbb;
  }
  /*评论*/
  .comment {
    width:100%;
    padding:50px;
    box-sizing: border-box;
    background-color: white;
    margin-top:30px;
  }
  .list {
    margin-top:50px;
    border:1px solid #e2e2e2;
  }
  .listB {
    padding:15px;
    border-bottom:1px solid #e2e2e2;
  }
  .listB:last-child{
    border-bottom:none;
  }
  .headImg {
    width:200px;
    text-align: center;
    float: left;
  }
  .headImg img {
    width:70px;
    height:70px;
    border-radius: 100%;
  }
  .headImg p {
    margin-top:10px;
  }
  .listC {
    width:860px;
    float: left;
  }
  .listC p:nth-of-type(1) {
    width:100%;
    /*height:80px;*/
    /*overflow: auto;*/
  }
  .listC p:nth-of-type(2) {
    margin-top:70px;
    color:#999;
  }
  .listC p i{
    float: right;
    cursor: pointer;
  }
  .pagination {
    text-align: center;
    margin-top:50px;
  }

  /*发送*/
  .send {
    width:1200px;
    background-color: white;
    margin:30px auto 100px;
    box-sizing: border-box;
    padding:30px;
  }
  .sendImg {
    width:70px;
    margin-right:15px;
  }
  .sendImg img {
    width:70px;
    height:70px;
    border-radius: 100%;
  }
  .send>div {
    width:100%;
    display: flex;
    flex-direction: row;
  }
  .send .text {
    flex: 1;
  }
  .send textarea {
    width:100%;
    border:1px solid #e2e2e2;
    resize:none;
    border-radius: 40px;
    height:100px;
    padding:15px 30px;
    box-sizing: border-box;
  }
  .sendSecret {
    width:100px;
    height:40px;
    background-color: #97857b;
    border:none;
    outline: none;
    border-radius: 40px;
    float: right;
    margin-top:15px;
    color:white;
    cursor: pointer;
  }
  .sendSecret i {
    margin-right:10px;
  }
</style>
